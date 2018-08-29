
var myDropDown = document.querySelector('.menu1');
var btn = document.querySelector('.drop-btn');
function myFunction() {
    myDropDown.classList.contains("hidden")? myDropDown.classList.remove("hidden"):myDropDown.classList.add("hidden");
}

window.addEventListener("resize", function() {
    var SCREEN_WIDTH = 600;
    if (window.innerWidth > SCREEN_WIDTH){
     myDropDown.classList.remove("hidden");
    } else  myDropDown.classList.add("hidden");
    console.log(window.innerWidth)

});