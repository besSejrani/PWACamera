/**
|--------------------------------------------------
| Lazy loading images if image attribute is data-lazy
|--------------------------------------------------
*/

const targets = document.querySelectorAll("[data-lazy]");

const lazyLoad = target => {
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const srcset = img.getAttribute("data-lazy");
        img.setAttribute("srcset", srcset);
        observer.disconnect();
      }
    });
  });

  io.observe(target);
};

targets.forEach(lazyLoad);
