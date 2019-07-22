document.addEventListener("DOMContentLoaded", () => {
  /*   M.AutoInit(); */
  const elems = document.querySelectorAll(".carousel");
  M.Carousel.init(elems, {
    fullWidth: true,
    duration: 150,
    shift: 0,
    indicators: true,
    noWrap: false
  });

  setInterval(() => {
    $(".carousel").carousel("next");
  }, 3500);
});
