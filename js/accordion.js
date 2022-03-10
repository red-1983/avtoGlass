var acc = document.getElementsByClassName("button");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });














/*let accHeading = document.querySelectorAll(".button");
let accPanel = document.querySelectorAll(".myDIV");

for (let i = 0; i < accHeading.length; i++) {
    // Execute whenever an accordion is clicked 
    accHeading[i].onclick = function() {
        if (this.nextElementSibling.style.maxHeight) {
           hidePanels();     // Hide All open Panels 
        } else {
           showPanel(this);  // Show the panel
        } 
    };
}

// Function to Show a Panel
function showPanel(elem) {
  hidePanels();
  
  elem.classList.add("active");
  elem.nextElementSibling.style.maxHeight=  elem.nextElementSibling.scrollHeight+ "px";

  /*elem.nextElementSibling.style.maxHeight =  elem.nextElementSibling.scrollHeight+"vw";*/
}

// Function to Hide all shown Panels
/*function hidePanels() {
  for (let i = 0; i < accPanel.length; i++) {
      accPanel[i].style.maxHeight =null;
      accHeading[i].classList.remove("active");
  }
}
*/