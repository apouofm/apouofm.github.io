class GlobalHeader extends HTMLElement {
  constructor() {
      super();
      console.info('constructed');
  }

  connectedCallback() {
      console.info('connected');

      let self = this;
      $.get("pages/nav.html", function(data) {
          let context = $(data).find("#navBar").html();
          self.innerHTML = data;

          // Add the hamburger menu functionality after the navbar is loaded
          const navbarBurger = document.querySelector('.navbar-burger');
          if (navbarBurger) {
              const navbarMenu = document.getElementById(navbarBurger.dataset.target);
              navbarBurger.addEventListener('click', () => {
                  navbarBurger.classList.toggle('is-active');
                  if (navbarMenu) {
                      navbarMenu.classList.toggle('is-active');
                  }
              });
          }
      });
  }
}

customElements.define('global-header', GlobalHeader);