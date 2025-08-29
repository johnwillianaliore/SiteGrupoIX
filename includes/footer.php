<?php // includes/footer.php ?>
</main>
<button id="ix-back-to-top" aria-label="Voltar ao topo">
  <!-- usei um SVG pra não depender de imagem -->
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
       stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <polyline points="18 15 12 9 6 15"></polyline>
  </svg>
</button>
<!-- POPUP IX -->
<div id="ix-popup" class="ix-popup" aria-hidden="true">
  <div class="ix-popup-overlay" data-close-popup></div>

  <div class="ix-popup-dialog" role="dialog" aria-modal="true" aria-labelledby="ixPopupTitle" aria-describedby="ixPopupDesc">
    <button class="ix-popup-close" aria-label="Fechar" data-close-popup>×</button>

    <div class="ix-popup-body">
      <h3 id="ixPopupTitle">
        FALE COM NOSSO <span class="hl">TIME DE ESPECIALISTAS</span> E PUXE A
        <span class="hl">ALAVANCA DE CRESCIMENTO</span> DO SEU NEGÓCIO!
      </h3>
      <p id="ixPopupDesc">
        Impulsionamos sua empresa com estratégias de marketing digital baseadas em dados e não em achismos!
      </p>

      <form id="ixForm" class="ix-form" onsubmit="event.preventDefault(); /* envie aqui */ ixPopupClose(); this.reset();">
        <div class="ix-grid">
          <label class="ix-field required">
            <span class="sr-only">Seu nome</span>
            <input name="nome" placeholder="Qual o seu nome?" required>
          </label>

          <label class="ix-field required">
            <span class="sr-only">Nome da empresa</span>
            <input name="empresa" placeholder="Qual o nome da sua empresa?" required>
          </label>

          <label class="ix-field required">
            <span class="sr-only">E-mail corporativo</span>
            <input type="email" name="email" placeholder="Qual seu e-mail corporativo?" required>
          </label>

          <label class="ix-field required">
            <span class="sr-only">Telefone</span>
            <input type="tel" name="telefone" placeholder="Qual seu telefone?" required>
          </label>
        </div>

        <div class="ix-select-row">
          <label for="ixFat">Qual seu faturamento mensal?</label>
          <select id="ixFat" name="faturamento" required>
            <option value="" disabled selected>Até 100 mil</option>
            <option>Entre 100 mil e 300 mil</option>
            <option>Entre 300 mil e 500 mil</option>
            <option>Entre 500 mil e 1 milhão</option>
            <option>Acima de 1 milhão</option>
          </select>
        </div>

        <div class="ix-actions">
          <button type="submit" class="ix-btn">Enviar</button>
        </div>
      </form>
    </div>
  </div>

  <!-- X flutuante como no print -->
  <button class="ix-popup-close-floating" aria-label="Fechar" data-close-popup>✕</button>
</div>

<footer class="gx-footer">
  <div class="gx-footer__container">

    <!-- Coluna 1: Marca + redes -->
    <div class="gx-footcol">
      <div class="gx-footbrand">
        <img src="https://grupoix.com.br/new/wp-content/uploads/2025/08/Grupoix-2.webp"
             alt="Grupo IX" class="gx-footbrand__logo" width="220" height="64" loading="lazy">
        <div class="gx-footbrand__tag">Fanáticos por Resultados</div>
      </div>

      <div class="gx-footsocial">
        <div class="gx-footsocial__title">Siga-nos nas redes sociais!</div>
        <nav class="gx-footsocial__icons" aria-label="Redes sociais">
          <a class="gx-footsocial__link" href="https://www.instagram.com/grupoix360" target="_blank" rel="noopener">
            <!-- Instagram -->
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.4.6.6.3 1.1.8 1.4 1.4.3.5.5 1.2.6 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.6 2.4-.3.6-.8 1.1-1.4 1.4-.5.3-1.2.5-2.4.6-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.4-.6-.6-.3-1.1-.8-1.4-1.4-.3-.5-.5-1.2-.6-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.9.6-2.4.3-.6.8-1.1 1.4-1.4.5-.3 1.2-.5 2.4-.6C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.7.1-.9.1-1.4.3-1.7.5-.4.2-.7.5-.9.9-.3.3-.4.8-.5 1.7-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c.1.9.3 1.4.5 1.7.2.4.5.7.9.9.3.3.8.4 1.7.5 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c.9-.1 1.4-.3 1.7-.5.4-.2.7-.5.9-.9.3-.3.4-.8.5-1.7.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-.9-.3-1.4-.5-1.7-.2-.4-.5-.7-.9-.9-.3-.3-.8-.4-1.7-.5-1.2-.1-1.6-.1-4.7-.1zm0 3.1a6.9 6.9 0 1 1 0 13.8 6.9 6.9 0 0 1 0-13.8zm0 1.8a5.1 5.1 0 1 0 0 10.2 5.1 5.1 0 0 0 0-10.2zm6-2.2a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/></svg>
          </a>
          <a class="gx-footsocial__link" href="https://facebook.com/grupoix360" target="_blank" rel="noopener">
            <!-- Facebook -->
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 9H16V6h-2.5C11.6 6 11 7.2 11 9v2H9v3h2v7h3v-7h2.2l.8-3H14V9.5c0-.3.2-.5.5-.5z"/></svg>
          </a>
          <a class="gx-footsocial__link" href="https://linkedin.com/company/grupoix360" target="_blank" rel="noopener">
            <!-- LinkedIn -->
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.9 7.5A2.1 2.1 0 1 1 6.8 3a2.1 2.1 0 0 1 .1 4.5zM4.9 9h4v12h-4V9zm6.1 0h3.8v1.6h.1c.5-.9 1.7-1.9 3.6-1.9 3.8 0 4.5 2.5 4.5 5.7V21h-4v-5.2c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V21h-4V9z"/></svg>
          </a>
          <a class="gx-footsocial__link" href="https://www.youtube.com/@grupoix360" target="_blank" rel="noopener">
            <!-- YouTube -->
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M23 7.1s-.2-1.7-.8-2.5a3 3 0 0 0-2.1-1.1C17.9 3.1 12 3.1 12 3.1h0s-5.9 0-8.1.4A3 3 0 0 0 1.8 4.6C1.2 5.4 1.1 7.1 1.1 7.1S1 9 1 10.9v2.2C1 15 1.1 17 1.1 17s.2 1.7.8 2.5c.5.7 1.2 1 2.1 1.1 1.6.2 8 .4 8 .4s5.9 0 8.1-.4c.9-.1 1.6-.4 2.1-1.1.6-.8.8-2.5.8-2.5s.1-2 .1-3.9v-2.2c0-1.9-.1-3.8-.1-3.8zM9.8 14.8V6.9l6.3 3.9-6.3 4z"/></svg>
          </a>
        </nav>
      </div>
    </div>

    <!-- Coluna 2: Contato -->
    <div class="gx-footcol">
      <h3 class="gx-foot__title">Contato</h3>
      <address class="gx-footaddress">
        R.Antônio Pinhata, 135 –<br>Nova Vinhedo
      </address>
      <a class="gx-footlink" href="mailto:ix@grupoix.com.br">ix@grupoix.com.br</a><br>
      <a class="gx-footlink" href="tel:+551931670704">(19)3167-0704</a>
    </div>

    <!-- Coluna 3: Menu -->
    <div class="gx-footcol">
      <h3 class="gx-foot__title">Menu</h3>
      <ul class="gx-footmenu">
        <li><a href="#secao_3_container?tab=secao_3_pago" class="gx-footlink">Tráfego Pago</a></li>
        <li><a href="#secao_3_container?tab=secao_3_organico" class="gx-footlink">Tráfego Orgânico</a></li>
        <li><a href="#secao_3_container?tab=secao_3_crescimento" class="gx-footlink">Escala e Crescimento</a></li>
        <li><a href="#resultados_1" class="gx-footlink">Resultados</a></li>
        <li><a href="#podcast_1" class="gx-footlink">Podcast</a></li>
        <li><a href="#blog" class="gx-footlink">Blog</a></li>
        <li><a href="#quem-somos" class="gx-footlink">Quem somos</a></li>
      </ul>
    </div>

    <!-- Coluna 4: Parceiro -->
    <div class="gx-footcol">
      <h3 class="gx-foot__title">Parceiro</h3>
      <div class="gx-footpartners">
        <img src="https://grupoix.com.br/new/wp-content/uploads/2025/08/pngwing.com_.webp"
             alt="Google Partner" loading="lazy">
        <img src="https://grupoix.com.br/new/wp-content/uploads/2025/08/Met-Business-Partners-1.png"
             alt="Meta Business Partner" loading="lazy">
      </div>
    </div>

    <!-- Coluna 5: Newsletter -->
    <div class="gx-footcol">
      <h3 class="gx-foot__title">Inscreva-se em nossa Newsletter!</h3>
      <form class="gx-newsletter" id="gx-newsletter" method="post" action="#">
        <label class="gx-newsletter__check">
          <input type="checkbox" id="gx-nl-privacy" required>
          <span>Eu concordo com a Política de Privacidade</span>
        </label>
        <div class="gx-newsletter__field">
          <input type="email" id="gx-nl-email" placeholder="Email" required>
        </div>
        <button type="submit" class="gx-btn">Enviar</button>
        <p class="gx-newsletter__msg" id="gx-nl-msg" role="status" aria-live="polite"></p>
      </form>
    </div>

  </div>

  <hr class="gx-foot__divider">

  <div class="gx-footbar">
    <p>2025 © Grupo IX. Todos os direitos reservados.</p>
  </div>

</footer>
<?php /* se seu projeto NÃO carrega jQuery, inclua esta linha: */ ?>
<script src="https://code.jquery.com/jquery-3.7.1.min.js" defer></script>
<script defer src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
<script defer src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
<script defer src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
<script defer src="<?= asset('js/sessao6.js') ?>"></script>

<!-- JS global e do header -->
<script defer src="<?= asset('js/app.js') ?>"></script>
<script defer src="<?= asset('js/header.js') ?>"></script>
<script defer src="<?= asset('js/home.js') ?>"></script>
<script defer src="<?= asset('js/sessao3.js') ?>"></script>
<script defer src="<?= asset('js/sessao4.js') ?>"></script>
<script defer src="<?= asset('js/sessao5.js') ?>"></script>
<script defer src="<?= asset('js/sessao7.js') ?>"></script>
<script defer src="<?= asset('js/sessao8.js') ?>"></script>
<script defer src="<?= asset('js/sessao9.js') ?>"></script>
<script defer src="<?= asset('js/sessao10.js') ?>"></script>
<script defer src="<?= asset('js/sessao11.js') ?>"></script>
<script defer src="<?= asset('js/sessao12.js') ?>"></script>
<!-- GSAP (CDN) -->


<!-- Lógica da sessão 4 -->

<!-- Script leve para newsletter (simples) -->
<script>
document.addEventListener('DOMContentLoaded',function(){
  const form = document.getElementById('gx-newsletter');
  if(!form) return;
  form.addEventListener('submit',function(e){
    e.preventDefault();
    const email = document.getElementById('gx-nl-email');
    const privacy = document.getElementById('gx-nl-privacy');
    const msg = document.getElementById('gx-nl-msg');
    if(!privacy.checked){ msg.textContent = 'É necessário aceitar a Política de Privacidade.'; return; }
    if(!email.validity.valid){ msg.textContent = 'Preencha um email válido.'; return; }
    msg.textContent = 'Obrigado! Em breve entraremos em contato.';
    form.reset();
  });
});
</script>
<script>
  // abrir/fechar
  function ixPopupOpen(){ document.getElementById('ix-popup').classList.add('ix-open'); }
  function ixPopupClose(){ document.getElementById('ix-popup').classList.remove('ix-open'); }

  // delegação para fechar
  document.addEventListener('click', (e)=>{
    const trg = e.target;
    if (trg.matches('[data-close-popup]')) ixPopupClose();
  });

  // Exemplo: abrir depois de X segundos (remova se não quiser)
   window.setTimeout(ixPopupOpen, 100);
</script>

</body>
</html>
