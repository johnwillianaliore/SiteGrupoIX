document.addEventListener('DOMContentLoaded', () => {
  // ===== seleciona elementos
  const html = document.documentElement;
  const container = document.getElementById('growth-anim');
  const canvas    = document.getElementById('growth-canvas');
  const overlay   = document.getElementById('growthOverlay');

  if (!container || !canvas || !overlay) {
    console.error('IDs esperados (#growth-anim, #growth-canvas, #growthOverlay) não encontrados.');
    return;
  }

  const ctx = canvas.getContext('2d');

  // ===== configuração de frames
  // seus arquivos: assets/images/frames2/IXGrowth_001.webp ... IXGrowth_100.webp
  const FRAME_START = 1;
  const FRAME_END   = 272;
  const frameCount  = FRAME_END - FRAME_START + 1;

  const currentFrame = (i) =>
    `assets/images/frames2/IXGrowth_${String(FRAME_START + i).padStart(3, '0')}.webp`;

  // ===== duração do scroll
  // ajuste fino: aumente PX_PER_FRAME se não estiver “chegando” ao último frame.
  const PX_PER_FRAME = window.innerWidth <= 768 ? 14 : 12;
  function setSectionHeight() {
    // altura total = viewport + “trilha” dos frames
    const h = window.innerHeight + (frameCount - 1) * PX_PER_FRAME;
    container.style.height = `${h}px`;
  }
  setSectionHeight();
  window.addEventListener('resize', setSectionHeight);

  // ===== preload
  const images = new Array(frameCount);
  let loaded = 0;

  function preload() {
    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      // tenta usar decode() (evita piscar entre onload/decodificação)
      if ('decode' in img) {
        img.decode()
          .catch(() => {}) // alguns browsers podem rejeitar; seguimos
          .finally(() => {
            images[i] = img;
            loaded++;
            if (loaded === frameCount) drawFirst();
          });
      } else {
        img.onload = () => {
          images[i] = img;
          loaded++;
          if (loaded === frameCount) drawFirst();
        };
        img.onerror = () => { images[i] = img; /* mantém posição */ };
      }
    }
  }
  preload();

  function drawFirst() {
    if (images[0] && images[0].complete) drawImageCover(images[0]);
  }

function drawImageCover(img) {
  const sw = window.innerWidth;
  const sh = window.innerHeight;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);

  canvas.style.width  = sw + 'px';
  canvas.style.height = sh + 'px';
  canvas.width  = Math.round(sw * dpr);
  canvas.height = Math.round(sh * dpr);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  const iw = img.naturalWidth;
  const ih = img.naturalHeight;
  const imgRatio = iw / ih;
  const screenRatio = sw / sh;

  let dw, dh, dx, dy;

  if (screenRatio > imgRatio) {
    // tela mais larga → corta em cima/baixo
    dw = sw;
    dh = sw / imgRatio;
    dx = 0;
    dy = (sh - dh) / 2;
  } else {
    // tela mais alta → corta nas laterais
    dh = sh;
    dw = sh * imgRatio;
    dx = (sw - dw) / 2;
    dy = 0;
  }

  ctx.clearRect(0, 0, sw, sh);
  ctx.drawImage(img, dx, dy, dw, dh);
}

  // ===== helpers
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

  // procura o frame carregado mais próximo (pra frente e pra trás)
  function getNearestLoaded(index) {
    if (images[index] && images[index].complete) return index;
    for (let off = 1; off < frameCount; off++) {
      const i1 = index + off;
      const i2 = index - off;
      if (i1 < frameCount && images[i1] && images[i1].complete) return i1;
      if (i2 >= 0         && images[i2] && images[i2].complete) return i2;
    }
    return 0; // fallback
  }

  // ===== animação (throttle via RAF)
  let ticking = false;
  function onScrollOrResize() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        updateAnimation();
      });
    }
  }

  function updateAnimation() {
    // posição absoluta do topo do container
    const rect = container.getBoundingClientRect();
    const containerTopAbs  = rect.top + window.scrollY;
    const containerHeight  = container.offsetHeight;
    const scrollableHeight = Math.max(1, containerHeight - window.innerHeight);

    const scrollTop   = window.pageYOffset || html.scrollTop || 0;
    const progress    = scrollTop - containerTopAbs;
    const scrollFrac  = clamp(progress / scrollableHeight, 0, 1);

    // qual frame?
    const frameIndex  = Math.floor(scrollFrac * (frameCount - 1));
    const nearest     = getNearestLoaded(frameIndex);
    const img         = images[nearest];

    // overlay animação
    const textStart = 0.20, textEnd = 1.00;
    let textProgress = (scrollFrac - textStart) / (textEnd - textStart);
    textProgress = clamp(textProgress, 0, 1);
    overlay.style.transform = `translateY(${(1 - textProgress) * 100}vh)`;
    overlay.style.opacity   = String(textProgress);

    // blur progressivo
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    canvas.style.filter = `blur(${textProgress * (isMobile ? 6 : 10)}px)`;

    if (img && img.complete) drawImageCover(img);
  }

  window.addEventListener('scroll',  onScrollOrResize, { passive: true });
  window.addEventListener('resize', () => {
    setSectionHeight();
    onScrollOrResize();
    if (images[0] && images[0].complete) drawImageCover(images[0]);
  });

  // primeira chamada (antes ou durante o preload)
  onScrollOrResize();
});