const slider = document.getElementById("slider");
let sliderPos
slider.addEventListener("input", function (e) {
    sliderPos = e.target.value;
    document.querySelector(".foreground-img").style.width = `${sliderPos}%`;
    document.querySelector(".slider-button").style.left = `calc(${sliderPos}% - 1.15vw)`;
})