(() => {
  const d = document;
  const btn = d.getElementById('ix-back-to-top');
  if(!btn) return;

  const showAt = 600; // px
  const smooth = () => window.scrollTo({top:0, behavior:'smooth'});

  const onScroll = () => {
    (window.scrollY > showAt) ? btn.classList.add('ix-show')
                              : btn.classList.remove('ix-show');
  };
  btn.addEventListener('click', smooth);
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll(); // estado inicial
})();

/* global window, document */
(() => {
  const POPUP_ID = 'ix-popup';
  const OPEN_CLASS = 'ix-open';
  const STORAGE_KEY = 'ixPopupLastClose';
  const DEBUG_ON = (location.hash.includes('debug') || localStorage.getItem('ixDebug')==='1');

  const ms = {
    delayInitial: 8000,       // 8s para primeira abertura
    cooldown: 24*60*60*1000,  // 24h para reabrir se o user fechou
  };

  const log = (...a)=> DEBUG_ON && console.log('[IX][POPUP]', ...a);

  const $ = (sel, ctx=document)=> ctx.querySelector(sel);
  const $$ = (sel, ctx=document)=> Array.from(ctx.querySelectorAll(sel));

  const el = $('#'+POPUP_ID);
  if(!el){ log('popup não encontrado'); return; }

  const dialog = $('.ix-popup-dialog', el);

  const now = () => Date.now();
  const last = +localStorage.getItem(STORAGE_KEY) || 0;

  const canOpen = () => (now()-last) > ms.cooldown;

  const open = () => {
    if(!canOpen()){ log('cooldown ativo, não abrir'); return; }
    el.classList.add(OPEN_CLASS);
    el.setAttribute('aria-hidden','false');
    log('abriu popup');
  };

  window.ixPopupClose = function ixPopupClose(){
    el.classList.remove(OPEN_CLASS);
    el.setAttribute('aria-hidden','true');
    localStorage.setItem(STORAGE_KEY, String(now()));
    log('fechou popup, salvou cooldown');
  }

  // Fecha por overlay / botão
  el.addEventListener('click', (e)=>{
    if (e.target.matches('[data-close-popup]')) window.ixPopupClose();
  });
  // Fecha por ESC
  document.addEventListener('keydown', (e)=>{
    if(e.key==='Escape' && el.classList.contains(OPEN_CLASS)) window.ixPopupClose();
  });
  // Evita fechar clicando dentro do diálogo
  dialog.addEventListener('click', e=> e.stopPropagation());

  // Exibe depois do delay, se puder
  setTimeout(open, ms.delayInitial);

  // Exponho no console para testes
  window.ixPopupOpen = open;
})();