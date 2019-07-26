const targets = document.querySelectorAll("[data-lazy]");

const lazyLoad = (target) => {
  const io = new IntersectionObserver((entries, observer) => {
    console.log(entries);
    entries.forEach((entry) => {
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

/* document.addEventListener("DOMContentLoaded", function() {
  var lazyloadImages;

  if ("IntersectionObserver" in window) {
    lazyloadImages = document.querySelectorAll(".lazy");
    var imageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var image = entry.target;
          image.classList.remove("lazy");
          imageObserver.unobserve(image);
        }
      });
    });

    lazyloadImages.forEach(function(image) {
      imageObserver.observe(image);
    });
  }
});
 */
