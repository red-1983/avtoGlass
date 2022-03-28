/*function myFunction(x) {
    x.classList.toggle("change");
}*/
let mobileMenu=document.querySelector(".mobile_menu");
let mobileNav1=document.querySelector(".mobile_nav1");
let mobileNav2=document.querySelector(".mobile_nav2");
let bar1=document.querySelector(".bar1");
let bar2=document.querySelector(".bar2");
let bar3=document.querySelector(".bar3");
mobileMenu.addEventListener("click", function(evt) {
    evt.preventDefault();
    bar1.classList.toggle("change1");
    bar2.classList.toggle("change2");
    bar3.classList.toggle("change3");
    mobileNav1.classList.toggle("nav-block");
    mobileNav2.classList.toggle("nav-block");
});
