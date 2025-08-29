document.addEventListener('DOMContentLoaded', () => {
  const html = document.documentElement;
  const canvas = document.getElementById('canvas-sequencia');
  const context = canvas.getContext('2d');
  const containerAnimacao = document.getElementById('container-animacao');
  const blocoTextoAnimado = document.getElementById('blocoTextoAnimado');

  // ====== FRAMES ======
  const frameCount = 312;
  const currentFrame = (i) => `assets/images/frames1/Home_${String(i).padStart(3,'0')}.webp`;

  // Pré-carrega
  const images = [];
  (function preload() {
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.push(img);
    }
  })();

  // ====== RENDER COM DPR (nítido e full-bleed) ======
  function drawImageCover(img) {
    const sw = window.innerWidth;
    const sh = window.innerHeight;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.style.width  = sw + 'px';
    canvas.style.height = sh + 'px';
    canvas.width  = Math.round(sw * dpr);
    canvas.height = Math.round(sh * dpr);
    
    context.setTransform(dpr, 0, 0, dpr, 0, 0);

    const iw = img.naturalWidth;
    const ih = img.naturalHeight;
    const imgRatio = iw / ih;
    const screenRatio = sw / sh;

    let dw = sw, dh = sh, dx = 0, dy = 0;

    // A MÁGICA ACONTECE AQUI: Lógica de "cover"
    if (screenRatio > imgRatio) {
      // Tela é MAIS LARGA que a imagem -> Ajusta pela largura
      // A altura da imagem vai transbordar e será cortada/centralizada
      dh = sw / imgRatio;
      dy = (sh - dh) / 2; // Centraliza verticalmente
    } else {
      // Tela é MAIS ALTA que a imagem -> Ajusta pela altura
      // A largura da imagem vai transbordar e será cortada/centralizada
      dw = sh * imgRatio;
      dx = (sw - dw) / 2; // Centraliza horizontalmente
    }

    context.clearRect(0, 0, sw, sh);
    context.drawImage(img, dx, dy, dw, dh);
  }

  if (images[0]) images[0].onload = () => drawImageCover(images[0]);

  // ====== CONTROLE DA ANIMAÇÃO ======
  const textAnimationStart = 0.20; // 20%
  const textAnimationEnd   = 1.00; // 100%

  function updateAnimation() {
    const containerTop = containerAnimacao.offsetTop;
    const scrollableHeight = containerAnimacao.scrollHeight - window.innerHeight;
    const scrollTop = html.scrollTop;

    let scrollFraction = 0;
    let frameIndex = 0;

    if (scrollTop < containerTop) {
      scrollFraction = 0;
      frameIndex = 0;
    } else if (scrollTop > containerTop + scrollableHeight) {
      scrollFraction = 1;
      frameIndex = frameCount - 1;
    } else {
      const progress = scrollTop - containerTop;
      scrollFraction = progress / scrollableHeight;
      frameIndex = Math.min(frameCount - 1, Math.floor(scrollFraction * frameCount));
    }

    // Texto central entra e permanece até o fim da seção
    let textProgress = (scrollFraction - textAnimationStart) / (textAnimationEnd - textAnimationStart);
    textProgress = Math.max(0, Math.min(1, textProgress));

    const translateYvh = (1 - textProgress) * 100;
    blocoTextoAnimado.style.transform = `translateY(${translateYvh}vh)`;
    blocoTextoAnimado.style.opacity = String(textProgress);

    // Blur proporcional
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const maxBlur = isMobile ? 6 : 10;
    canvas.style.filter = `blur(${textProgress * maxBlur}px)`;

    // Desenha o frame atual
    const img = images[frameIndex];
    if (img && img.complete) {
      requestAnimationFrame(() => drawImageCover(img));
    }
  }

  // Eventos
  window.addEventListener('scroll', updateAnimation, { passive: true });
  window.addEventListener('resize', () => {
    updateAnimation();
    if (images[0] && images[0].complete) drawImageCover(images[0]);
  });

  // Primeira execução
  updateAnimation();
});
