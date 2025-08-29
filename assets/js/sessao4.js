// A GSAP e o ScrollTrigger continuam sendo essenciais e não são substituídos.
gsap.registerPlugin(ScrollTrigger);

$(function() { // Forma curta e padrão do jQuery para document.addEventListener("DOMContentLoaded", ...)

    // --- SELEÇÃO DE ELEMENTOS (com jQuery) ---
    const $container = $(".nova-secao-2-container");
    const $textoColuna = $(".nova-secao-2-coluna-texto");
    const $steps = $(".nova-secao-2-texto-step");
    const $timelineWrapper = $(".nova-secao-2-timeline-wrapper");
    const $checkpoints = $(".nova-secao-2-timeline-checkpoint");
    const $canvas = $(".nova-secao-2-anim-item");
    
    // Para obter o contexto do canvas, precisamos do elemento DOM puro ($canvas[0])
    const context = $canvas.length ? $canvas[0].getContext("2d") : null;
    if (!context) {
        console.error("Elemento canvas ou seu contexto não foi encontrado.");
        return;
    }

    // --- CONFIGURAÇÃO DA SEQUÊNCIA DE IMAGENS (sem alterações, é lógica pura) ---
    const totalFrames = 480;
    const imagePath = "https://grupoix.com.br/new/wp-content/uploads/2025/08/";
    const imageName = "3D_";
    const imageFormat = ".webp";
    const getCurrentFrame = (index) => `${imagePath}${imageName}${String(index).padStart(3, '0')}${imageFormat}`;

    // --- LÓGICA DE PRÉ-CARREGAMENTO (sem alterações, é lógica pura) ---
    function preloadImages() {
        return new Promise((resolve) => {
            let loadedCount = 0;
            const loadedImages = [];
            for (let i = 0; i < totalFrames; i++) {
                const img = new Image();
                img.src = getCurrentFrame(i);
                const onImageLoadOrError = () => {
                    loadedCount++;
                    loadedImages[i] = img;
                    if (loadedCount === totalFrames) {
                        resolve(loadedImages);
                    }
                };
                img.onload = onImageLoadOrError;
                img.onerror = () => {
                    console.error("Não foi possível carregar a imagem: " + img.src);
                    onImageLoadOrError();
                };
            }
        });
    }

    preloadImages().then(loadedFrames => {
        console.log("Todas as imagens foram pré-carregadas! Iniciando as animações.");
        setupAnimations(loadedFrames);
    });

    function setupAnimations(frames) {
        // Desenha a primeira imagem no canvas
        const firstImage = frames.find(img => img && img.complete);
        if (firstImage) {
            // Usamos .prop() do jQuery para definir propriedades
            $canvas.prop({
                width: firstImage.width,
                height: firstImage.height
            });
            context.drawImage(firstImage, 0, 0);
        }

        const frameData = { current: 0 };

        // LÓGICA DE ANIMAÇÃO GSAP (usando variáveis jQuery)
        gsap.to(frameData, {
            current: totalFrames - 1,
            snap: "current",
            ease: "none",
            scrollTrigger: {
                trigger: $container[0], // GSAP prefere o elemento DOM puro para triggers
                start: "top top",
                // Usando métodos jQuery para calcular alturas
                end: () => `+=${$textoColuna.outerHeight() - $(window).height()}`,
                scrub: 1.5,
                pin: ".nova-secao-2-coluna-animacao"
            },
            onUpdate: () => {
                const img = frames[Math.round(frameData.current)];
                if (img && img.complete) {
                    // Acessa as propriedades width/height do elemento DOM
                    context.clearRect(0, 0, $canvas[0].width, $canvas[0].height);
                    context.drawImage(img, 0, 0);
                }
            }
        });

        // "Pina" a coluna da timeline
        ScrollTrigger.create({
            trigger: $container[0],
            start: "top top",
            end: () => `+=${$textoColuna.outerHeight() - $(window).height()}`,
            pin: ".nova-secao-2-coluna-timeline"
        });

        // Configura a ativação dos textos e checkpoints usando .each()
        $steps.each(function(i, step) {
            const checkpoint = $checkpoints.get(i); // Pega o elemento DOM do checkpoint no índice 'i'
            if (checkpoint) {
                gsap.set(checkpoint, { top: step.offsetTop + step.offsetHeight / 2 });
            }
            ScrollTrigger.create({
                trigger: step,
                start: "top center",
                end: "bottom center",
                toggleClass: { targets: [step, checkpoint], className: "is-active" }
            });
        });

        // Sincroniza o scroll da timeline
        function syncTimelineScroll() {
            const scrollHeight = $textoColuna.outerHeight() - $(window).height();
            gsap.to($timelineWrapper, { // GSAP pode receber o objeto jQuery diretamente aqui
                y: -scrollHeight,
                ease: "none",
                scrollTrigger: {
                    trigger: $container[0],
                    start: "top top",
                    end: () => `+=${scrollHeight}`,
                    scrub: 1,
                }
            });
        }
        syncTimelineScroll();
        
        // Garante que o ScrollTrigger recalcule
        setTimeout(() => {
            ScrollTrigger.refresh();
        }, 100);
    }
});