import {throttle, debounce} from 'throttle-debounce';
import {stickyHeader} from './modules/fixie';
import {scroll} from './modules/scroll';
import {scrollSpy} from './modules/scrollSpy';

scroll();

window.addEventListener('scroll',
  throttle(50, stickyHeader)
);
window.addEventListener('scroll',
  debounce(50, scrollSpy)
);
