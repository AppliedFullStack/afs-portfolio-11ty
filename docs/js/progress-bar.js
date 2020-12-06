(() => {
  const progressBar = {
    observeContainersVisibility: function () {
      const execContext = this;

      const observer = new IntersectionObserver(
        function (entries) {
          for (const entry of entries) {
            execContext.setProgressBarWidths(
              entry.target,
              entries[0].isIntersecting
            );
          }
        },
        { threshold: [0.3] }
      );

      const skillCategories = document.querySelectorAll(
        "#page-cv .skill-category"
      );
      for (const skillCategory of skillCategories) {
        observer.observe(skillCategory);
      }
    },
    populateProgressBar: function () {
      document
        .querySelectorAll(".progress[data-value]")
        .forEach((progressEle) => {
          const progressBarEle = document.createElement("div");
          progressBarEle.style.width = 0;
          progressBarEle.dataset.value = progressEle.dataset.value;
          progressBarEle.classList.add("progress-bar");

          progressEle.appendChild(progressBarEle);
        });
    },
    setProgressBarWidths(skillCategory, open) {
      skillCategory
        .querySelectorAll(".progress-bar")
        .forEach((progressBarEle, i) => {
          progressBarEle.style.transitionDelay = `${0.1 * (i + 1)}s`;
          progressBarEle.style.width = open
            ? `${progressBarEle.dataset.value}%`
            : "0";
        });
    },
    init: function () {
      this.populateProgressBar();
      this.observeContainersVisibility();
    },
  };

  document.addEventListener("DOMContentLoaded", () => {
    progressBar.init.bind(progressBar)();
  });
})();