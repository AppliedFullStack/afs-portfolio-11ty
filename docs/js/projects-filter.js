(() => {
  const projectsFilter = {
    fetchElements: function(filtersSelector, filterablesSelector) {
      this.filters = document.querySelectorAll(filtersSelector);
      this.filterables = document.querySelectorAll(filterablesSelector);
    },
    handleFilterSelection: function() {
      for (let filter of this.filters) {
        filter.onclick = (ev) => {
          ev.preventDefault();
          
          const filterTag = ev.currentTarget.dataset.filter;

          for (let _filter of this.filters) {
            if (filter === _filter) {
              _filter.classList.add('active');
            } else {
              _filter.classList.remove('active');
            }
          }
          
          for (let filterable of this.filterables) {
            if (filterable.dataset.tags.includes(filterTag)) {
              filterable.classList.remove('hidden');
            } else {
              filterable.classList.add('hidden');
            }
          }
        };
      }
    },
    selectFirstFilter: function() {
      this.filters[0].click();
    },
    init: function (filtersSelector, filterablesSelector) {
      this.fetchElements(filtersSelector, filterablesSelector);

      if (this.filters.length === 0) return;

      this.handleFilterSelection();
      this.selectFirstFilter();
    },
  };

  document.addEventListener("DOMContentLoaded", () => {
    projectsFilter.init.bind(projectsFilter)('.filters [data-filter]', '.project[data-tags]');
  });
})();