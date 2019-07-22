document.addEventListener("DOMContentLoaded", () => {
  M.AutoInit();
});

sliderButton1 = document.querySelector("#bar1");
sliderButton2 = document.querySelector("#bar2");
sliderButton3 = document.querySelector("#bar3");

slider1 = document.querySelector("#slider ~figure");
/* 
slider2 = document.querySelector("#slider #figure #img-three");
slider3 = document.querySelector("#slider #figure #img-one"); */

console.log(slider);

sliderButton1.addEventListener("click", (e) => {
  if (sliderButton1.checked) {
    slider1.style.marginLeft = "-0%";
  }
});

sliderButton2.addEventListener("click", (e) => {
  if (sliderButton1.checked) {
    slider1.style.marginLeft = "-100%";
  }
});

sliderButton3.addEventListener("click", (e) => {
  if (sliderButton1.checked) {
    slider1.style.marginLeft = "-200%";
  }
});

sliderButton1.addEventListener("change", (e) => {
  if (sliderButton1.checked) {
    slider1.style.marginLeft = "-0%";
  }
});

sliderButton2.addEventListener("change", (e) => {
  if (sliderButton1.checked) {
    slider1.style.marginLeft = "-100%";
  }
});

sliderButton3.addEventListener("change", (e) => {
  if (sliderButton1.checked) {
    slider1.style.marginLeft = "-200%";
  }
});
