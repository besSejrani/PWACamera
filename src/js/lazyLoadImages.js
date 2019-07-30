const targets = document.querySelectorAll("[data-lazy]");

const lazyLoad = target => {
  const io = new IntersectionObserver((entries, observer) => {
    console.log(entries);
    entries.forEach(entry => {
      console.log("😍");

      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.getAttribute("data-lazy");
        img.setAttribute("src", src);
        img.classList.remove("progessiveImage");

        observer.disconnect();
      }
    });
  });

  io.observe(target);
};

targets.forEach(lazyLoad);

// intersecting header

const header = document.getElementById("homeSlider");
const nav = document.getElementById("nav");

const slideObserverOptions = {
  rootMargin: "-150px 0px 0px 0px"
};

const slideObserver = new IntersectionObserver((entries, slideObserver) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      nav.classList.remove("check");
    } else {
      nav.classList.add("check");
    }
  });
}, slideObserverOptions);

slideObserver.observe(header);
