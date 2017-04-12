export function scrollSpy() {
  let menuLink = document.querySelectorAll('.menu-link');
  let menuList = {};
  let scrollPosition = document.documentElement.scrollTop ||
      document.body.scrollTop;
  Array.prototype.forEach.call(menuLink, (e) => {
    menuList[e.id] = e.offsetTop - 250;
  });

  let i = 0;
  for(i in menuList) {
    if (menuList[i] <= scrollPosition) {
      document.querySelector('.active').setAttribute('class', 'navigation__link');
      document.querySelector('a[href*=' + i + ']').setAttribute('class', 'navigation__link active');
    }
  }
}
