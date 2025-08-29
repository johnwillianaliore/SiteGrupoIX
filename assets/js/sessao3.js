document.addEventListener('DOMContentLoaded', function() {

    // --- LÓGICA INTERNA DA SEÇÃO 3 ---
    const tabs = document.querySelectorAll('.secao_3_tab');
    const contents = document.querySelectorAll('.secao_3_content');
    const subCategoryItems = document.querySelectorAll('.secao_3_item');
    let textTransitionTimeout;

    function updateTextContent(contentPane, contentId) {
        const textBlock = contentPane.querySelector('.secao_3_main-text-block');
        const template = document.getElementById(contentId);
        if (!textBlock || !template) return;
        
        clearTimeout(textTransitionTimeout);
        textBlock.style.opacity = '0';

        textTransitionTimeout = setTimeout(() => {
            textBlock.innerHTML = template.innerHTML;
            textBlock.style.opacity = '1';

            const animatedChildren = textBlock.querySelectorAll('h2, p, strong, li');
            animatedChildren.forEach((child, index) => {
                child.style.opacity = '0';
                child.style.animation = `slideFadeIn 0.5s ease ${index * 0.1}s forwards`;
                child.addEventListener('animationend', () => {
                    child.style.animation = '';
                    child.style.opacity = '1';
                }, { once: true });
            });
        }, 300);
    }
    
    function setActiveItem(itemToActivate) {
        if (!itemToActivate || itemToActivate.classList.contains('item-active')) return;
        const contentPane = itemToActivate.closest('.secao_3_content');
        const grid = itemToActivate.closest('.secao_3_items-grid');
        const imageContainer = contentPane.querySelector('.secao_3_image-container');

        grid.querySelectorAll('.secao_3_item').forEach(item => item.classList.remove('item-active'));
        itemToActivate.classList.add('item-active');
        updateIcons(itemToActivate);

        const targetImageId = itemToActivate.getAttribute('data-content-id');
        const newActiveImage = imageContainer.querySelector(`[data-image-id="${targetImageId}"]`);
        const currentActiveImage = imageContainer.querySelector('.active-img');
        if (currentActiveImage && currentActiveImage !== newActiveImage) {
            currentActiveImage.classList.remove('active-img');
        }
        if (newActiveImage) {
            newActiveImage.classList.add('active-img');
        }
        updateTextContent(contentPane, targetImageId);
    }
    
    function updateIcons(activeItem) {
        const parentGrid = activeItem.closest('.secao_3_items-grid');
        parentGrid.querySelectorAll('.secao_3_item').forEach(item => {
            const iconEl = item.querySelector('.secao_3_item-icon');
            if (iconEl) {
                const normalIcon = item.getAttribute('data-icon-normal');
                const activeIcon = item.getAttribute('data-icon-active');
                iconEl.style.backgroundImage = `url('${item === activeItem ? activeIcon : normalIcon}')`;
            }
        });
    }

    subCategoryItems.forEach(item => {
        item.addEventListener('click', () => setActiveItem(item));
    });

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            if (tab.classList.contains('secao_3_active')) return;
            tabs.forEach(t => t.classList.remove('secao_3_active'));
            contents.forEach(c => c.classList.remove('secao_3_active'));
            tab.classList.add('secao_3_active');
            const targetContent = document.getElementById(tab.getAttribute('data-target'));
            if (targetContent) {
                targetContent.classList.add('secao_3_active');
                const firstItem = targetContent.querySelector('.secao_3_item');
                if (firstItem) setActiveItem(firstItem);
            }
        });
    });

    // --- FUNCIONALIDADE DE ANCORAGEM (PONTE COM O MENU) ---
    function handleUrlNavigation() {
        if (!window.location.hash.startsWith('#secao_3_container')) return;

        const paramsString = window.location.hash.split('?')[1];
        if (!paramsString) return;
        
        const params = new URLSearchParams(paramsString);
        const tabId = params.get('tab');
        const itemId = params.get('item');

        if (!tabId) return;

        const targetTab = document.querySelector(`.secao_3_tab[data-target="${tabId}"]`);
        const targetContent = document.getElementById(tabId);
        if (!targetTab || !targetContent) return;

        // 1. Rola a página até a seção
        document.getElementById('secao_3_container').scrollIntoView({ behavior: 'smooth', block: 'start' });

        // 2. Ativa a aba e o conteúdo corretos diretamente (sem simular clique)
        tabs.forEach(t => t.classList.remove('secao_3_active'));
        contents.forEach(c => c.classList.remove('secao_3_active'));
        targetTab.classList.add('secao_3_active');
        targetContent.classList.add('secao_3_active');

        // 3. Encontra o item alvo ou o primeiro item como padrão
        let itemToActivate = null;
        if (itemId) {
            itemToActivate = targetContent.querySelector(`.secao_3_item[data-content-id="${itemId}"]`);
        }
        if (!itemToActivate) {
            itemToActivate = targetContent.querySelector('.secao_3_item');
        }
        
        // 4. Ativa o item correto, evitando o bug de clique duplo
        if (itemToActivate) {
            setTimeout(() => {
                 setActiveItem(itemToActivate);
            }, 50); // Pequeno delay para a transição da aba
        }
    }

    // --- INICIALIZAÇÃO ---
    // Verifica a URL ao carregar a página
    handleUrlNavigation();
    // Adiciona um listener para futuras mudanças na URL (navegação na mesma página)
    window.addEventListener('hashchange', handleUrlNavigation, false);

    // Inicializa o primeiro item da aba que já vem ativa no HTML, caso não haja âncora na URL
    if (!window.location.hash.includes('#secao_3_container')) {
        const initialActiveContent = document.querySelector('.secao_3_content.secao_3_active');
        if (initialActiveContent) {
            const firstItem = initialActiveContent.querySelector('.secao_3_item');
            if (firstItem) setActiveItem(firstItem);
        }
    }
});
document.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById('oqfText');
  if (!el) return;

  // estado inicial
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity .5s ease, transform .5s ease';

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
        io.disconnect();
      }
    });
  }, { threshold: 0.3 });

  io.observe(el);
});
