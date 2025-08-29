$(function() { // Forma curta de $(document).ready()
  const $video = $('#mlmcVideo');
  if (!$video.length) return; // Em jQuery, verifica-se a existência com .length

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Tenta autoplay silencioso (muted) quando entrar na viewport
  const playIfPossible = () => {
    // Para usar .play(), precisamos do elemento DOM, não do objeto jQuery
    const promise = $video[0].play(); 
    if (promise !== undefined) {
      promise.catch(() => {
        // se o navegador bloquear, mantemos pausado (sem erro no console)
      });
    }
  };

  // Pause fora de viewport (economia real)
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !prefersReduced) {
        playIfPossible();
      } else {
        $video[0].pause(); // Pausa o elemento DOM
      }
    }, { threshold: 0.35 });
    
    // O observe precisa receber o elemento DOM puro
    observer.observe($video[0]);
  } else {
    // fallback: tenta tocar assim que carregar
    if (!prefersReduced) {
      playIfPossible();
    }
  }

  // Garante mudo para não bloquear autoplay em nenhum device (forma jQuery)
  $video.prop('muted', true);
});