(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-pink-open]'),
    closeModalBtn: document.querySelector('[data-modal-pink-close]'),
    modal: document.querySelector('[data-modal-products-pink]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();