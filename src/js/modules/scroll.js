export function scroll() {
  const menuLink = document.querySelectorAll('.menu-link');
  let menuList = {};
  let linkHashList = document.querySelectorAll('[href^="#link"]');
  let scrollSpeed = 0.3;

  for (let i = 0; i < linkHashList.length; i++) {
    linkHashList[i].onclick = (e) => {
      let pageWidth = window.pageYOffset;
      let target = e.target;
      let hash = target.href.replace(/[^#]*(.*)/, '$1');
      let top = document.querySelector(hash).getBoundingClientRect().top;
      let start = null;
      requestAnimationFrame(step);
      //fckn magic i was drugged while writing this
      function step(time) {
        if(start === null) {start = time;}
        let progress = time - start;
        let rect = (top < 0 ? Math.max(pageWidth - progress / scrollSpeed, pageWidth + top) : Math.min(pageWidth + progress / scrollSpeed, pageWidth + top));
        window.scrollTo(0,rect);
        if(rect != pageWidth + top) {requestAnimationFrame(step)} else {location.hash = hash;}
      };
      return false;
    };
  };
}
