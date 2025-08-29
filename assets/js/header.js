document.addEventListener('DOMContentLoaded', () => {
  /* ==================== DADOS DESKTOP ==================== */
  const dataMenus = {
    paga: [
      { text:"Campanhas ADS", link:"https://grupoix.com.br/new/#secao_3_container?tab=secao_3_pago&item=secao_3_content_pago_campanhas", image:"https://grupoix.com.br/new/wp-content/uploads/2025/08/Trafego-pago.webp" },
      { text:"Criativos", link:"https://grupoix.com.br/new/#secao_3_container?tab=secao_3_pago&item=secao_3_content_pago_criativos", image:"https://grupoix.com.br/new/wp-content/uploads/2025/08/Trafego-pago.webp" },
      { text:"Landing-page", link:"https://grupoix.com.br/new/#secao_3_container?tab=secao_3_pago&item=secao_3_content_pago_landing", image:"https://grupoix.com.br/new/wp-content/uploads/2025/08/Trafego-pago.webp" },
      { text:"Meta ADS", link:"https://grupoix.com.br/new/#secao_3_container?tab=secao_3_pago", image:"https://grupoix.com.br/new/wp-content/uploads/2025/08/Trafego-pago.webp" },
      { text:"Google ADS", link:"https://grupoix.com.br/new/#secao_3_container?tab=secao_3_pago", image:"https://grupoix.com.br/new/wp-content/uploads/2025/08/Trafego-pago.webp" },
      { text:"Linkedin ADS", link:"https://grupoix.com.br/new/#secao_3_container?tab=secao_3_pago", image:"https://grupoix.com.br/new/wp-content/uploads/2025/08/Trafego-pago.webp" },
      { text:"Tiktok ADS", link:"https://grupoix.com.br/new/#secao_3_container?tab=secao_3_pago", image:"https://grupoix.com.br/new/wp-content/uploads/2025/08/Trafego-pago.webp" },
      { text:"Anúncios de pesquisa", link:"https://grupoix.com.br/new/#secao_3_container?tab=secao_3_pago", image:"https://grupoix.com.br/new/wp-content/uploads/2025/08/Trafego-pago.webp" },
      { text:"Remarketing", link:"https://grupoix.com.br/new/#secao_3_container?tab=secao_3_pago", image:"https://grupoix.com.br/new/wp-content/uploads/2025/08/Trafego-pago.webp" },
      { text:"Conversão", link:"https://grupoix.com.br/new/#secao_3_container?tab=secao_3_pago", image:"https://grupoix.com.br/new/wp-content/uploads/2025/08/Trafego-pago.webp" }
    ],
    organica: [
      { text:"Site e E-commerce", link:"https://grupoix.com.br/new/#secao_3_container?tab=secao_3_organico&item=secao_3_content_organico_dev", image:"https://grupoix.com.br/new/wp-content/uploads/2025/08/Organico.webp" },
      { text:"Primeira página do Google", link:"https://grupoix.com.br/new/#secao_3_container?tab=secao_3_organico&item=secao_3_content_organico_seo", image:"https://grupoix.com.br/new/wp-content/uploads/2025/08/Organico.webp" },
      { text:"Blogs", link:"https://grupoix.com.br/new/#secao_3_container?tab=secao_3_organico&item=secao_3_content_organico_blogs", image:"https://grupoix.com.br/new/wp-content/uploads/2025/08/Organico.webp" },
      { text:"Relatórios", link:"https://grupoix.com.br/new/#secao_3_container?tab=secao_3_organico", image:"https://grupoix.com.br/new/wp-content/uploads/2025/08/Organico.webp" },
      { text:"Loja Virtual", link:"https://grupoix.com.br/new/#secao_3_container?tab=secao_3_organico", image:"https://grupoix.com.br/new/wp-content/uploads/2025/08/Organico.webp" },
      { text:"Wordpress", link:"https://grupoix.com.br/new/#secao_3_container?tab=secao_3_organico", image:"https://grupoix.com.br/new/wp-content/uploads/2025/08/Organico.webp" },
      { text:"Backlinks", link:"https://grupoix.com.br/new/#secao_3_container?tab=secao_3_organico", image:"https://grupoix.com.br/new/wp-content/uploads/2025/08/Organico.webp" },
      { text:"Rankear", link:"https://grupoix.com.br/new/#secao_3_container?tab=secao_3_organico", image:"https://grupoix.com.br/new/wp-content/uploads/2025/08/Organico.webp" },
      { text:"Palavras-chave", link:"#secao_3_container?tab=secao_3_organico", image:"https://grupoix.com.br/new/wp-content/uploads/2025/08/Organico.webp" },
      { text:"Redes sociais", link:"https://grupoix.com.br/new/#secao_3_container?tab=secao_3_organico", image:"https://grupoix.com.br/new/wp-content/uploads/2025/08/Organico.webp" }
    ],
    resultados: [
      { text:"Análise de dados", link:"https://grupoix.com.br/new/#secao_3_container?tab=secao_3_crescimento&item=secao_3_content_growth_paga", image:"https://grupoix.com.br/new/wp-content/uploads/2025/08/Escala.webp" },
      { text:"Dashboards", link:"https://grupoix.com.br/new/#secao_3_container?tab=secao_3_crescimento&item=secao_3_content_growth_bi", image:"https://grupoix.com.br/new/wp-content/uploads/2025/08/Escala.webp" },
      { text:"Treinamento de vendas", link:"https://grupoix.com.br/new/#secao_3_container?tab=secao_3_crescimento&item=secao_3_content_growth_yellowix", image:"https://grupoix.com.br/new/wp-content/uploads/2025/08/Escala.webp" }
    ]
  };

  /* ==================== ELEMENTOS (DESKTOP) ==================== */
  const menuItems = document.querySelectorAll('.menugpix-wrapper .menugpix-item');
  const megaMenu = document.getElementById('menugpix-megamenu');
  const megamenuContent = document.getElementById('megamenu-content-container');
  const submenuContainer = document.getElementById('menugpix-submenus');
  const imageContainer = document.getElementById('menugpix-image');
  const blogStrip = document.getElementById('menugpix-blogstrip');
  const mainWrapper = document.querySelector('.menugpix-wrapper');
  const overlay = document.getElementById('menugpix-overlay');
  let openTimeout, closeTimeout, currentOpenMenu = null;

  /* ==================== BLOG FETCH (DESKTOP + MOBILE) ==================== */
  let blogCache = null;
  const WP_POSTS_ENDPOINT = 'https://grupoix.com.br/blog/wp-json/wp/v2/posts?per_page=3&_embed';
  const stripHTML = (html) => { const d=document.createElement('div'); d.innerHTML=html; return d.textContent||d.innerText||''; };
  const formatDateBR = (iso) => { try{ const d=new Date(iso); return d.toLocaleDateString('pt-BR',{day:'2-digit',month:'short',year:'numeric'}).replace('.',''); } catch{ return ''; } };
  async function fetchLatestPosts() {
    if (blogCache) return blogCache;
    const res = await fetch(WP_POSTS_ENDPOINT,{cache:'no-store'});
    if (!res.ok) throw new Error('Falha ao carregar posts');
    blogCache = await res.json();
    return blogCache;
  }
  function renderBlogStripDesktop(posts){
    blogStrip.innerHTML='';
    posts.forEach(p=>{
      const link=p.link||'#';
      const title=stripHTML(p.title?.rendered||'Sem título');
      const date=formatDateBR(p.date);
      let thumb=''; try{ thumb=p._embedded['wp:featuredmedia'][0]?.source_url||''; }catch{}
      if(!thumb) thumb='https://grupoix.com.br/new/wp-content/uploads/2025/08/Organico.webp';
      const a=document.createElement('a'); a.className='menugpix-blogcard'; a.href=link; a.target='_blank';
      a.innerHTML=`<img class="menugpix-blogcard-thumb" src="${thumb}" alt="">
        <div class="menugpix-blogcard-body">
          <div class="menugpix-blogcard-title">${title}</div>
          <div class="menugpix-blogcard-meta">${date}</div>
        </div>`;
      blogStrip.appendChild(a);
    });
    requestAnimationFrame(()=>{ blogStrip.style.opacity='1'; });
  }

  /* ==================== DESKTOP: HOVER MEGAMENU ==================== */
  const showMenu = (item) => {
    const menuKey = item.getAttribute('data-menu');
    if ((!dataMenus[menuKey] && menuKey !== 'blogs') || currentOpenMenu === menuKey) return;
    currentOpenMenu = menuKey;
    megamenuContent.style.opacity='0'; blogStrip.style.opacity='0'; blogStrip.innerHTML='';
    setTimeout(() => {
      submenuContainer.innerHTML=''; imageContainer.innerHTML='';
      if (menuKey !== 'blogs') {
        const menuData = dataMenus[menuKey];
        submenuContainer.classList.toggle('use-two-columns', menuData.length > 5);
        menuData.forEach((menuItem,index)=>{
          const linkElement=document.createElement('span');
          linkElement.className='menugpix-submenu';
          linkElement.innerHTML=menuItem.text;
          linkElement.dataset.link=menuItem.link;
          linkElement.addEventListener('click',()=>{ if(linkElement.dataset.link) window.location.href=linkElement.dataset.link; hideMenu(); });
          linkElement.addEventListener('mouseenter',()=>{
            document.querySelectorAll('.menugpix-image img').forEach(img=>img.style.display='none');
            const currentImg=document.getElementById(`menugpix-img-${index}`);
            if(currentImg) currentImg.style.display='block';
          });
          submenuContainer.appendChild(linkElement);
          const img=document.createElement('img'); img.src=menuItem.image; img.id=`menugpix-img-${index}`;
          imageContainer.appendChild(img);
        });
      } else {
        imageContainer.innerHTML='';
      }

      const setCorrectHeight = () => {
        if (imageContainer.firstChild) imageContainer.firstChild.style.display='block';
        const newHeight = megamenuContent.scrollHeight + blogStrip.scrollHeight;
        megaMenu.style.height = newHeight+'px';
        megamenuContent.style.opacity='1';
      };

      if (menuKey === 'blogs') {
        fetchLatestPosts().then(posts=>{
          renderBlogStripDesktop(posts);
          const newHeight = megamenuContent.scrollHeight + blogStrip.scrollHeight;
          megaMenu.style.height=newHeight+'px';
        }).catch(()=>{
          blogStrip.innerHTML='<div style="padding:14px;opacity:.7">Não foi possível carregar posts.</div>';
          const newHeight = megamenuContent.scrollHeight + blogStrip.scrollHeight;
          megaMenu.style.height=newHeight+'px';
        });
        setCorrectHeight();
      } else {
        const firstImage=imageContainer.querySelector('img');
        if(firstImage){ if(firstImage.complete) setCorrectHeight(); else firstImage.onload=setCorrectHeight; }
        else { setCorrectHeight(); }
      }
    },200);
    mainWrapper.classList.add('megamenu-active'); overlay.classList.add('is-active');
  };

  const hideMenu = () => {
    currentOpenMenu=null;
    megaMenu.style.height='0px';
    mainWrapper.classList.remove('megamenu-active');
    overlay.classList.remove('is-active');
  };

  menuItems.forEach(item=>{
    item.addEventListener('mouseenter',()=>{
      clearTimeout(closeTimeout);
      const key=item.getAttribute('data-menu');
      if (dataMenus[key] || key==='blogs') {
        openTimeout=setTimeout(()=>showMenu(item),200);
      } else {
        clearTimeout(openTimeout);
        hideMenu();
      }
    });
    item.addEventListener('mouseleave',()=>clearTimeout(openTimeout));
  });
  mainWrapper.addEventListener('mouseenter',()=>clearTimeout(closeTimeout));
  mainWrapper.addEventListener('mouseleave',()=>{ clearTimeout(openTimeout); closeTimeout=setTimeout(hideMenu,300); });

  /* ==================== MOBILE: SLIDE PANEL + ACORDEÃO ==================== */
  const burger = document.getElementById('menugpix-burger');
  const mobile = document.getElementById('menugpix-mobile');
  const mbody = document.getElementById('mmobile-body');
  const mclose = document.getElementById('mmobile-close');

  function buildMobileMenu(){
    mbody.innerHTML='';

    const groups = [
      { key:'paga', label:'Tráfego Pago' },
      { key:'organica', label:'Tráfego Orgânico' },
      { key:'resultados', label:'Escala e Crescimento' },
      { key:'blogs', label:'Blogs' },
      { key:null, label:'Resultados', link:'#resultados_1' },
      { key:null, label:'Podcast', link:'#podcast_1' },
    ];

    groups.forEach(g=>{
      const wrap = document.createElement('div');
      wrap.className='mmobile-accordion-item';

      const btn = document.createElement('button');
      btn.className='mmobile-acc-btn';
      btn.type='button';
      btn.innerHTML = `<span>${g.label}</span><span class="chev">▾</span>`;

      const panel = document.createElement('div');
      panel.className='mmobile-acc-panel';

      if (g.key && g.key!=='blogs') {
        const ul = document.createElement('div'); ul.className='mmobile-sublist';
        (dataMenus[g.key]||[]).forEach(item=>{
          const a=document.createElement('a'); a.className='mmobile-subitem'; a.href=item.link; a.textContent=item.text;
          a.addEventListener('click', closeMobileMenu);
          ul.appendChild(a);
        });
        panel.appendChild(ul);
      } else if (g.key === 'blogs') {
        const holder = document.createElement('div'); holder.className='mmobile-blogstrip'; holder.textContent='Carregando posts...';
        panel.appendChild(holder);
        btn.addEventListener('click', async ()=>{
          if (btn.dataset.loaded==='1') return;
          try {
            const posts = await fetchLatestPosts();
            holder.innerHTML='';
            posts.forEach(p=>{
              const link=p.link||'#';
              const title=stripHTML(p.title?.rendered||'Sem título');
              const date=formatDateBR(p.date);
              let thumb=''; try{ thumb=p._embedded['wp:featuredmedia'][0]?.source_url||''; }catch{}
              if(!thumb) thumb='https://grupoix.com.br/new/wp-content/uploads/2025/08/Organico.webp';
              const a=document.createElement('a'); a.className='mmobile-blogcard'; a.href=link; a.target='_blank';
              a.innerHTML = `<img src="${thumb}" alt=""><div class="txt"><div class="t">${title}</div><div class="d">${date}</div></div>`;
              holder.appendChild(a);
            });
            btn.dataset.loaded='1';
          } catch(e){
            holder.textContent='Não foi possível carregar posts.';
          }
        });
      } else {
        btn.addEventListener('click', ()=>{ window.location.href=g.link; closeMobileMenu(); });
      }

      if (g.key) {
        btn.setAttribute('aria-expanded','false');
        btn.addEventListener('click', ()=>{
          const expanded = btn.getAttribute('aria-expanded')==='true';
          btn.setAttribute('aria-expanded', String(!expanded));
          if (!expanded) {
            panel.style.maxHeight = panel.scrollHeight + 'px';
          } else {
            panel.style.maxHeight = 0;
          }
        });
      }

      wrap.appendChild(btn);
      wrap.appendChild(panel);
      mbody.appendChild(wrap);
    });
  }

  function openMobileMenu(){
    buildMobileMenu();
    mobile.classList.add('is-open');
    overlay.classList.add('is-active');
    document.documentElement.style.overflow='hidden';
    mobile.setAttribute('aria-hidden','false');
  }
  function closeMobileMenu(){
    mobile.classList.remove('is-open');
    overlay.classList.remove('is-active');
    document.documentElement.style.overflow='';
    mobile.setAttribute('aria-hidden','true');
  }

  burger.addEventListener('click', openMobileMenu);
  mclose.addEventListener('click', closeMobileMenu);
  overlay.addEventListener('click', ()=>{
    if (megaMenu.style.height !== '0px' && getComputedStyle(megaMenu).display!=='none') {
      hideMenu();
    } else {
      closeMobileMenu();
    }
  });

  document.addEventListener('keydown', (e)=>{
    if (e.key==='Escape') {
      hideMenu();
      closeMobileMenu();
    }
  });
});
