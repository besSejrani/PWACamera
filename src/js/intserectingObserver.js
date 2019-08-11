/**
|--------------------------------------------------
| Intersecting Header
|--------------------------------------------------
*/

const header = document.getElementById("homeSlider");
const nav = document.getElementById("nav");

const slideObserverOptions = {
  rootMargin: "-150px 0px 0px 0px"
};

const slideObserver = new IntersectionObserver((entries, slideObserver) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      nav.classList.remove("check");
    } else {
      nav.classList.add("check");
    }
  });
}, slideObserverOptions);

slideObserver.observe(header);
