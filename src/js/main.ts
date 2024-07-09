
import LazyLoad from 'vanilla-lazyload';
// import Pjax from 'Pjax';
const lazyloadImg = () => {
  (window as any).lazyLoadInstance = new LazyLoad({
      elements_selector: 'img',
      threshold: 0,
      data_src: 'lazy-src',
      callback_error: (img: any) => {
        console.log(img, 'img===>');
          // img.setAttribute("srcset", GLOBAL_CONFIG.lazyload.error);
      }
  })
}
lazyloadImg();

