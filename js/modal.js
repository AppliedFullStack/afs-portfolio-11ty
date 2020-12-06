(() => {
  const modalUtil = {
    handleOpenTrigger: function() {
      const modalTriggers = document.querySelectorAll("[data-toggle='modal']");
    
      for (let modalTrigger of modalTriggers) {
        modalTrigger.onclick = (ev) => {
          ev.preventDefault();
          
          const modalEle = document.querySelector(ev.currentTarget.dataset.target);
          modalEle.classList.add('modal--open')
        }
      }
    },
    handleCloseTrigger: function() {
      const closeTriggers = document.querySelectorAll("[data-dismiss='modal'");

      for (let closeTrigger of closeTriggers) {
        closeTrigger.onclick = (ev) => {
          ev.preventDefault();

          const parentModal = ev.currentTarget.closest('.modal');
          parentModal.classList.remove('modal--open');
        }
      }
    },
    closeOnOverlayClick: function() {
      document.addEventListener('click', (ev) => {

        if (ev.target.classList.contains('modal')) {
          ev.target.classList.remove('modal--open');
        } else if (ev.target.closest('.modal').length && !(ev.target.classList.contains('modal-content') || ev.target.closest('.modal-content').length)) {
          ev.target.closest('.modal').classList.remove('modal--open');
        }
        console.log(ev.target);
        let shouldCloseModal = ev.target.classList.contains('modal');
        shouldCloseModal ||= ev.target.closest('.modal').length && !(
          ev.target.classList.contains('modal-content') || ev.target.closest('.modal-content').length
        );
        if (ev.target.classList.contains('modal') || ev.target.closest('.modal').length && ev.target.closest('.modal-content').length) {
          ev.target.closest('.modal').classList.remove('modal--open');
        }
      })
    },
    init: function() {
      this.handleOpenTrigger();
      this.handleCloseTrigger();
      this.closeOnOverlayClick();
    }
  };

  document.addEventListener("DOMContentLoaded", () => {
    modalUtil.init();
  });
})();