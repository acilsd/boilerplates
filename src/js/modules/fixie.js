export function stickyHeader() {
  const h = document.getElementById('sticky');
  const stickPoint = document.getElementById('about').offsetTop;
  let offset = window.pageYOffset;

  if ( offset >= (stickPoint - 50) ) {
    h.style.position = 'fixed';
    h.style.top = '0px';
  } else if ( offset <= stickPoint ) {
    h.style.position = 'absolute';
    h.style.top = '50vh';
    h.style.left = '0px';
  }
}
