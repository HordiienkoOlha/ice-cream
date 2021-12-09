(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-sand-open]'),
    closeModalBtn: document.querySelector('[data-modal-sand-close]'),
    modal: document.querySelector('[data-modal-products-sand]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();