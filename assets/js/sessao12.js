$(() => { // Equivalente ao IIFE e espera o DOM carregar
  const $slider = $('.s12__slider');
  if (!$slider.length) return;

  // Seletores jQuery
  const $slides = $slider.find('.s12__slide');
  const $prevBtn = $('.s12__nav--prev');
  const $nextBtn = $('.s12__nav--next');
  const $curEl = $('#s12Cur');
  const $totEl = $('#s12Tot');

  const total = $slides.length;
  let index = 0;

  function setIndex(i) {
    index = (i + total) % total;
    
    // Simplificado com jQuery: remove a classe de todos e adiciona apenas no slide certo
    $slides.removeClass('is-active');
    $slides.eq(index).addClass('is-active');
    
    // Usa .text() para definir o conteúdo
    $curEl.text(index + 1);
  }

  // Eventos de navegação
  $prevBtn.on('click', () => setIndex(index - 1));
  $nextBtn.on('click', () => setIndex(index + 1));
  
  // Inicialização
  $totEl.text(total);
  setIndex(0);

  // Acessibilidade/UX: abre só um <details> por vez
  function enforceSingleOpen() {
    // 'this' aqui é cada um dos slides
    const $slide = $(this); 
    $slide.on('toggle', 'details.s12__item', function(e) {
      if (!this.open) return; // Se o item foi fechado, não faz nada
      
      // Encontra outros 'details' abertos dentro do mesmo slide e os fecha
      $slide.find('details.s12__item[open]').not(this).prop('open', false);
    });
  }
  $slides.each(enforceSingleOpen);

  // Teclado: setas ← →
  $(document).on('keydown', (e) => {
    if (e.key === 'ArrowLeft') setIndex(index - 1);
    if (e.key === 'ArrowRight') setIndex(index + 1);
  });
});