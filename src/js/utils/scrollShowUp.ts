document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("nav");

  let prevScrollpos = window.pageYOffset;
  window.onscroll = () => {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      nav.classList.remove("hidden");
    } else {
      nav.classList.add("hidden");
    }
    prevScrollpos = currentScrollPos;
  };
});
