(() => {
  const navToggler = {
    isOpen: false,
    handleTogglerClick: function() {
      this.toggler.onclick = (ev) => {
        this.toggler.style.visibility = "hidden";
        if (this.isOpen) {
          this.navMenu.classList.remove("open");
        } else {
          this.navMenu.classList.add("open");
        }
        
        setTimeout(() => {
          this.isOpen = !this.isOpen;
          if (this.isOpen) {
            this.setClosingTransitionDelays();
          } else {
            this.setOpeningTransitionDelays();
          }
          this.updateTogglerText();
          this.toggler.style.visibility = "visible";
        }, 1000);
      }
    },
    setClosingTransitionDelays: function() {
      this.navMenuItems.forEach((navItem, index) => {
        navItem.style.transitionDelay = `0.${index}s`;
      });
      const numberOfNavItems = document.querySelectorAll('nav ul li').length;
      this.navMenu.style.transitionDelay = `0.${numberOfNavItems + 2}s`;
    },
    setOpeningTransitionDelays: function() {
      this.navMenu.style.transitionDelay = '0s';
      this.navMenuItems.forEach((navItem, index) => {
        navItem.style.transitionDelay = `0.${index + 2}s`;
      });
    },
    setTogglerElements: function() {
      this.toggler = document.querySelector('nav .nav-toggler');
      this.navMenu = document.querySelector('nav ul');
      this.navMenuItems = document.querySelectorAll('nav ul li');
    },
    toggler: null,
    togglerTexts: {
      open: '☰',
      close: '✖'
    },
    updateTogglerText: function() {
      const identifier = this.isOpen ? 'close' : 'open';
      this.toggler.innerHTML = this.togglerTexts[identifier];
    },
    init: function () {
      this.setTogglerElements();
      this.updateTogglerText();
      this.setOpeningTransitionDelays();
      this.handleTogglerClick();
    },
  };

  document.addEventListener("DOMContentLoaded", () => {
    navToggler.init.bind(navToggler)();
  });
})();