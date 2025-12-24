window.addEventListener('scroll', function () {
  if (window.scrollY > 100) {
    document.documentElement.classList.add('scroll');
  } else {
    document.documentElement.classList.remove('scroll');
  }
});

const header = document.querySelector('.header');
if (header) {
  window.addEventListener('scroll', function () {
    if (window.scrollY > 35) {
      header.classList.add('_header-scroll');
    } else {
      header.classList.remove('_header-scroll');
    }
  });
}

const filterButtons = document.querySelectorAll('.block-filter__title');
if (filterButtons) {
  const filterItems = document.querySelectorAll('.block-filter__column');

  filterButtons.forEach(button => {
    button.addEventListener('click', function () {
      const filterValue = this.getAttribute('data-filter');

      filterButtons.forEach(btn => {
        btn.classList.remove('active');
      });

      this.classList.add('active');

      filterItems.forEach(item => {
        if (filterValue === 'all' || item.getAttribute('data-filter') === filterValue) {
          item.classList.remove('hide');
        } else {
          item.classList.add('hide');
        }
      });
    });
  });
}