(() => {
  const colorSwitcher = {
    handleColorSelection: function () {
      const colorChoices = document.querySelectorAll("ul.color-switcher li");
      for (const colorChoice of colorChoices) {
        colorChoice.onclick = (ev) => {
          this.setThemeColor(ev.currentTarget.dataset.color);
        };
      }
    },
    populateColorPreferences: function () {
      const allColors = [
        "#3498db",
        "#1abc9c",
        "#2ecc71",
        "#9b59b6",
        "#e74c3c",
        "#e67e22",
        "#f1c40f",
      ];

      const colorSwitcherContainer = document.querySelector("ul.color-switcher");

      for (const color of allColors) {
        const colorChoice = document.createElement("li");
        colorChoice.dataset.color = color;
        colorChoice.style.background = colorChoice.dataset.color;

        colorSwitcherContainer.appendChild(colorChoice);
      }
    },
    setTheFirstColor: function () {
      const firstColor = document.querySelector("ul.color-switcher li").dataset
        .color;
      this.setThemeColor(firstColor);
    },
    setThemeColor: function (color) {
      document.documentElement.style.setProperty("--primary-color", color);

      const colorChoices = document.querySelectorAll("ul.color-switcher li");
      for (const colorChoice of colorChoices) {
        if (colorChoice.dataset.color === color) {
          colorChoice.classList.add("active");
        } else {
          colorChoice.classList.remove("active");
        }
      }
    },
    init: function () {
      this.populateColorPreferences();
      this.setTheFirstColor();
      this.handleColorSelection();
    },
  };

  document.addEventListener("DOMContentLoaded", () => {
    colorSwitcher.init.bind(colorSwitcher)();
  });
})();