// Меню бургер
const iconMenu = document.querySelector('.header__burger-btn');
const menuNav = document.querySelector('.menu__nav');
const backgroundColor = document.querySelector('.background-color')

if (iconMenu) {
  iconMenu.addEventListener('click', function () {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    menuNav.classList.toggle('_active');
    backgroundColor.classList.toggle('_active');
  });
}

// Прокрутка страницы при клике на меню

const menuLinks = document.querySelectorAll('.menu__nav_item[data-goto]');
if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener('click', onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (
      menuLink.dataset.goto &&
      document.querySelector(menuLink.dataset.goto)
    ) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue =
        gotoBlock.getBoundingClientRect().top + pageYOffset - 30;

      if (iconMenu.classList.contains('_active')) {
        document.body.classList.remove('_lock');
        iconMenu.classList.remove('_active');
        menuNav.classList.remove('_active');
        backgroundColor.classList.remove('_active');

      }

      window.scrollTo({
        top: gotoBlockValue,
        behavior: 'smooth',
      });

      e.preventDefault();
    }
  }
}
