(() => {
    const refs = {
      openMenuBtn: document.querySelector('[data-menu-open]'),
      closeMenuBtn: document.querySelector('[data-menu-close]'),
      modal: document.querySelector('[data-menu]'),
    };
    refs.closeMenuBtn.addEventListener('click', toggleMenu);
    refs.openMenuBtn.addEventListener('click', toggleMenu);
  
    function toggleMenu() {
      refs.modal.classList.toggle('is-open');
    }
  })();