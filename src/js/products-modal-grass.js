(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-grass-open]'),
    closeModalBtn: document.querySelector('[data-modal-grass-close]'),
    modal: document.querySelector('[data-modal-products-grass]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();