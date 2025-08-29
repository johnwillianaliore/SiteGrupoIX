// VERSÃO FINAL 3.0 - Mantém o play contínuo para frente e usa corte direto para trás.
// Convertido para jQuery
$(function() { // Equivalente a window.addEventListener('load', ...) ou $(document).ready()

    // --- Variáveis dos Elementos (com seletores jQuery) ---
    const $infoBoxes = $('.secao_4_info_box');
    const $logosGrid = $('.secao_4_logos_grid');
    const $paisesContainer = $('.secao_4_paises_container');
    const $initialImageContainer = $('#secao_4_imagem_inicial_container');
    const $videoPlayerContainer = $('#secao_4_video_player_container');
    const $cover15Anos = $('#secao_4_15_anos_cover');
    const $video15Anos = $('#secao_4_v_15_anos');
    const $logoPages = $('.secao_4_logos_page');
    const $progressBarContainer = $('.secao_4_progress_bar_container');
    const $progressBarFill = $('.secao_4_progress_bar_fill');
    const $countrySpans = $('.secao_4_pais_item');
    const $videoInternacional = $('#secao_4_video_internacional');

    // --- Variáveis de Controle ---
    let logoCurrentPageIndex = 0;
    let logoInterval;
    let areCountryVideosLoaded = false;
    let countryCurrentIndex = -1;
    let timeUpdateHandler = null;

    // --- Lógica dos Países (Refatorada) ---
    function updateCountryStates() {
        $countrySpans.removeClass('current');
        // Encontra o span específico pelo data-index e adiciona a classe
        $countrySpans.filter(`[data-index="${countryCurrentIndex}"]`).addClass('current');
    }

    // Função genérica para tocar um segmento e pausar no final
    function playSegmentAndPause($targetSpan) {
        const targetEndTime = parseFloat($targetSpan.data('endTime'));

        const onPlayUpdate = () => {
            // Acessa o elemento DOM para obter 'currentTime'
            if ($videoInternacional[0].currentTime >= targetEndTime) {
                $videoInternacional[0].pause();
                $videoInternacional.off('timeupdate', onPlayUpdate); // Usa .off() para remover o listener
            }
        };

        $videoInternacional[0].play();
        timeUpdateHandler = onPlayUpdate;
        $videoInternacional.on('timeupdate', timeUpdateHandler); // Usa .on() para adicionar o listener
    }

    // Função principal de clique, com a nova lógica simplificada
    function handleCountryClick($span) {
        if (!$span.length || !$videoInternacional.length) return;

        const targetIndex = parseInt($span.data('index')); // Usa .data() para ler atributos data-*
        if (targetIndex === countryCurrentIndex) return;

        // Limpa qualquer listener de tempo anterior
        if (timeUpdateHandler) {
            $videoInternacional.off('timeupdate', timeUpdateHandler);
        }

        // Mostra o vídeo
        $initialImageContainer.removeClass('visible');
        $videoPlayerContainer.addClass('visible');
        $videoInternacional.show(); // .show() é um atalho para display: 'block' ou similar

        const startIndex = countryCurrentIndex;
        countryCurrentIndex = targetIndex;
        updateCountryStates();

        if (targetIndex > startIndex) {
            // AVANÇAR
            playSegmentAndPause($span);
        } else {
            // RETROCEDER
            const startTime = parseFloat($span.data('time'));
            $videoInternacional.prop('currentTime', startTime); // Usa .prop() para definir propriedades como currentTime
            playSegmentAndPause($span);
        }
    }

    // --- CONTROLE PRINCIPAL ---
    function handleInfoBoxClick($box) {
        if (!$box || !$box.length) return;
        
        $infoBoxes.removeClass('secao_4_active');
        $box.addClass('secao_4_active');
        const control = $box.data('control');

        // Reset Geral
        stopLogoSlider();
        $logosGrid.removeClass('visible');
        $paisesContainer.removeClass('visible');
        $videoPlayerContainer.removeClass('visible');
        $initialImageContainer.removeClass('visible');
        
        if ($videoInternacional.length) {
            $videoInternacional[0].pause();
            if (timeUpdateHandler) {
                $videoInternacional.off('timeupdate', timeUpdateHandler);
            }
        }
        
        $cover15Anos.removeClass('visible');
        // Usa .css() para múltiplas propriedades
        $video15Anos.css({
            opacity: '0',
            visibility: 'hidden'
        })[0].pause();

        // Lógica de Exibição
        if (control === 'logos-grid') {
            $logosGrid.addClass('visible');
            startLogoSlider();
        } else if (control === 'countries-video') {
            preloadCountryVideo();
            $paisesContainer.addClass('visible');
            countryCurrentIndex = -1;
            const $primeiroPais = $('.secao_4_pais_item[data-index="0"]');
            handleCountryClick($primeiroPais);
        } else if (control === 'anos-mercado-video') {
            $cover15Anos.addClass('visible');
        }
    }

    // --- ATRIBUIÇÃO DE EVENTOS (com jQuery) ---
    $infoBoxes.on('click', function() {
        handleInfoBoxClick($(this)); // $(this) se refere ao elemento clicado
    });

    $cover15Anos.on('click', play15AnosVideo);

    $countrySpans.on('click', function() {
        handleCountryClick($(this));
    });

    // --- INICIALIZAÇÃO ---
    const $activeInitialBox = $('.secao_4_info_box.secao_4_active');
    if ($activeInitialBox.length) {
        handleInfoBoxClick($activeInitialBox);
    }

    // --- Funções Originais Completas (convertidas) ---
    function startLogoSlider() {
        stopLogoSlider();
        $logoPages.removeClass('active prev next').addClass('prev');
        $logoPages.first().removeClass('prev').addClass('active');
        $progressBarContainer.addClass('visible');
        restartProgressBar();
        logoInterval = setInterval(showNextLogoPage, 5000);
    }

    function showNextLogoPage() {
        const $oldPage = $logoPages.eq(logoCurrentPageIndex);
        const newPageIndex = (logoCurrentPageIndex + 1) % $logoPages.length;
        const $newPage = $logoPages.eq(newPageIndex);
        
        if (newPageIndex === 1) {
            $oldPage.removeClass('active').addClass('next');
            $newPage.removeClass('prev').addClass('active');
        } else {
            $oldPage.removeClass('active').addClass('prev');
            $newPage.removeClass('next').addClass('active');
        }
        logoCurrentPageIndex = newPageIndex;
        restartProgressBar();
    }

    function restartProgressBar() {
        $progressBarFill.removeClass('animate');
        // Força um reflow do navegador, similar a 'void progressBarFill.offsetWidth'
        $progressBarFill[0].offsetWidth; 
        $progressBarFill.addClass('animate');
    }

    function stopLogoSlider() {
        clearInterval(logoInterval);
        $progressBarContainer.removeClass('visible');
        $progressBarFill.removeClass('animate');
    }

    function play15AnosVideo() {
        $cover15Anos.removeClass('visible');
        $video15Anos.css({
            opacity: '1',
            visibility: 'visible'
        });
        $video15Anos.prop('currentTime', 0)[0].play();
    }

    function preloadCountryVideo() {
        if (areCountryVideosLoaded || !$videoInternacional.length) return;
        $videoInternacional[0].load();
        areCountryVideosLoaded = true;
    }
});