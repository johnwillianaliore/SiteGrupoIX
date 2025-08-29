$(function () {
  // Pré-carrega as imagens de fundo (melhora first-hover)
  $('.sessao-7-bg-image').each(function(){
    const url = $(this).css('background-image').replace(/^url\(["']?(.+?)["']?\)$/, '$1');
    if (url) { const img = new Image(); img.src = url; }
  });

  const $container = $('.sessao-7-container');

  // Troca de temporadas
  $('.temporada-btn').on('click', function () {
    const $btn = $(this);
    if ($btn.hasClass('active')) return;

    $('.temporada-btn').removeClass('active');
    $btn.addClass('active');

    const target = $btn.data('temporada');
    $('.sessao-7-temporada-content.active').removeClass('active');
    $(`.sessao-7-temporada-content[data-content-temporada="${target}"]`).addClass('active');

    // reset estado
    $container.removeClass('video-mode');
    $('.sessao-7-panel').removeClass('is-expanding video-visible');
    $('.sessao-7-video-container').empty();
  });

  // Hover/preview (desativado quando em modo vídeo)
  $container.on('mouseenter', '.sessao-7-panel', function () {
    if (!$container.hasClass('video-mode')) {
      $(this).addClass('active').siblings().removeClass('active');
    }
  });
  $container.on('mouseleave', function () {
    if (!$container.hasClass('video-mode')) {
      $(this).find('.sessao-7-panel').removeClass('active');
    }
  });

  // Click → expande e injeta iframe
  $container.on('click', '.sessao-7-panel', function () {
    if ($container.hasClass('video-mode')) return;

    const $panel = $(this);
    const videoId = $panel.data('youtube-id');
    if (!videoId) return;

    $container.addClass('video-mode');
    $panel.addClass('is-expanding').siblings().removeClass('active');

    setTimeout(() => {
      if ($panel.hasClass('is-expanding')) {
        // player com otimizações
        const src =
          `https://www.youtube.com/embed/${videoId}` +
          `?autoplay=1&mute=0&playsinline=1&controls=1&modestbranding=1&rel=0&iv_load_policy=3`;
        const iframe =
          `<iframe loading="lazy" src="${src}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
        $panel.find('.sessao-7-video-container').html(iframe);
        $panel.addClass('video-visible');
      }
    }, 700);
  });

  // Fechar (botão)
  $container.on('click', '.sessao-7-close-btn', function (e) {
    e.stopPropagation();
    closeVideo($(this).closest('.sessao-7-panel'));
  });

  // Fechar (Esc)
  $(document).on('keydown', function (e) {
    if (e.key === 'Escape') {
      const $open = $('.sessao-7-panel.video-visible');
      if ($open.length) closeVideo($open);
    }
  });

  function closeVideo($panel){
    $container.removeClass('video-mode');
    $panel.removeClass('is-expanding video-visible');
    $panel.find('.sessao-7-video-container').empty(); // remove iframe = para tudo
  }
});
$(function(){
  const BP = 980; // largura de corte mobile
  const $desktopContainer = $('.sessao-7-container');
  const $mobileWrap = $('#sessao-7-mobile');
  const $mobileSwiperEl = $('#sessao-7-mobile-swiper .swiper-wrapper');

  // conta quantos painéis tem na T1 (para sabermos onde começa a T2)
  const $t1 = $('.sessao-7-temporada-content[data-content-temporada="1"] .sessao-7-panel');
  const $t2 = $('.sessao-7-temporada-content[data-content-temporada="2"] .sessao-7-panel');
  const season1Count = $t1.length;

  let swiper = null;

  function buildMobileSlides(){
    $mobileSwiperEl.empty();

    // monta slides na ordem: T1 -> T2
    const allPanels = $t1.toArray().concat($t2.toArray());
    allPanels.forEach((panel, idx)=>{
      const $panel = $(panel).clone(true, true);

      // garante structure adequada no slide
      // (seu HTML original já tem .sessao-7-bg-image .sessao-7-content .sessao-7-video-container .sessao-7-close-btn)
      const slide = $('<div class="swiper-slide"></div>');
      slide.append($panel);
      $mobileSwiperEl.append(slide);
    });
  }

  function initMobile(){
    if (swiper) return;
    buildMobileSlides();

    swiper = new Swiper('#sessao-7-mobile-swiper', {
  slidesPerView: 1,
  spaceBetween: 14,
  resistanceRatio: 0.85,
  pagination: { el: '#sessao-7-mobile-swiper .swiper-pagination', clickable: true },
  initialSlide: season1Count,   // << começa no 1º item da Temporada 2
});


    // ao mudar de slide → acende o botão de temporada correspondente
    swiper.on('slideChange', () => {
      const idx = swiper.realIndex;
      const isT2 = idx >= season1Count;
      $('.temporada-btn').removeClass('active');
      $('.temporada-btn[data-temporada="' + (isT2 ? 2 : 1) + '"]').addClass('active');
    });

    // clique nos botões de temporada no mobile → vai para início da temporada
    $('.temporada-btn').off('click.mobile').on('click.mobile', function(){
      const season = Number($(this).data('temporada'));
      if (!swiper) return;
      const targetIndex = (season === 2) ? season1Count : 0;
      swiper.slideTo(targetIndex);
    });

// Mobile: clique abre no YouTube (sem embed)
$('#sessao-7-mobile-swiper')
  .off('click', '.sessao-7-panel')
  .on('click', '.sessao-7-panel', function(){
    const youtubeId = $(this).data('youtube-id');
    if (!youtubeId) return;
    const url = `https://www.youtube.com/watch?v=${youtubeId}`;
    window.open(url, '_blank', 'noopener'); // abre no app/aba do YouTube
  });



    // fechar vídeo no slide
    $('#sessao-7-mobile-swiper').off('click', '.sessao-7-close-btn').on('click', '.sessao-7-close-btn', function(e){
      e.stopPropagation();
      const $panel = $(this).closest('.sessao-7-panel');
      $panel.find('.sessao-7-video-container').empty();
      $(this).css({opacity:0, transform:'scale(0)', pointerEvents:'none'});
    });

    // tecla ESC fecha se houver vídeo aberto no slide atual
    $(document).on('keydown.s7mobile', (e)=>{
      if (e.key === 'Escape'){
        const $currentPanel = $('#sessao-7-mobile-swiper .swiper-slide-active .sessao-7-panel');
        $currentPanel.find('.sessao-7-video-container').empty();
        $currentPanel.find('.sessao-7-close-btn').css({opacity:0, transform:'scale(0)', pointerEvents:'none'});
      }
    });
  }

  function destroyMobile(){
    if (!swiper) return;
    swiper.destroy(true, true);
    swiper = null;
    $mobileSwiperEl.empty();
    $(document).off('keydown.s7mobile');
    $('.temporada-btn').off('click.mobile');
  }

  function applyResponsive(){
    const isMobile = window.innerWidth <= BP;
    if (isMobile){
      $('#sessao-10 .sessao-7-temporada-content').removeClass('active'); // evita desktop mostrar junto
      initMobile();
    }else{
      destroyMobile();
    }
  }

  // primeira aplicação + on resize
  applyResponsive();
  window.addEventListener('resize', debounce(applyResponsive, 200));

  // utilitário simples
  function debounce(fn, t){
    let id; return function(){ clearTimeout(id); id=setTimeout(fn, t); };
  }
});