$(function() { // Substitui o (function(){})() e espera o DOM carregar
  const YT_URL = "https://www.youtube.com/embed/X7kAYLl7q8g?autoplay=1&mute=0&rel=0&playsinline=1&modestbranding=1&iv_load_policy=3";

  // Seletores jQuery
  const $playBtn  = $('#s11PlayBtn');
  const $modal    = $('#s11Modal');
  const $backdrop = $('#s11Backdrop');
  const $closeBtn = $('#s11CloseBtn');
  const $mediaBox = $('#s11Media');

  function openModal() {
    if (!$modal.length) return; // Checa se o modal existe
    
    $modal.addClass('is-open').attr('aria-hidden', 'false');
    
    // Injeta o iframe usando .html()
    const iframeHTML = `<iframe src="${YT_URL}" title="Grupo IX - Vídeo institucional" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
    $mediaBox.html(iframeHTML);
    
    // Trava o scroll do body usando .css()
    $('html, body').css('overflow', 'hidden');
  }

  function closeModal() {
    if (!$modal.length) return;
    
    $modal.removeClass('is-open').attr('aria-hidden', 'true');
    
    // Remove o iframe para pausar o vídeo
    $mediaBox.html('');
    
    // Libera o scroll
    $('html, body').css('overflow', '');
  }

  // Adiciona os listeners de evento
  $playBtn.on('click', openModal);
  $closeBtn.on('click', closeModal);
  $backdrop.on('click', closeModal);
  
  $(document).on('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  });
});