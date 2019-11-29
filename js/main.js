let box = document.body.querySelector('#box');
let logo = document.body.querySelector('#logo');
let nav = document.body.querySelector('.nav');
let center = document.body.querySelector('.center');
let triangle = document.body.querySelector('#triangle');
let content = document.body.querySelector('#content');
let placeholderNav = document.body.querySelectorAll('.placeholderNav');
let schoolName = document.body.querySelector('.schoolName');

window.addEventListener('load', visualise);
window.addEventListener('scroll', visualise);

function visualise() {
    if(window.pageYOffset >= 815) {
        nav.style.backgroundImage="none";
        nav.style.backgroundColor="black";
        box.style.backgroundImage="none";
        box.style.backgroundColor="black";
        placeholderNav[0].style.display="hidden";
        placeholderNav[1].style.display="hidden";
        placeholderNav[0].style.backgroundImage="none";
        placeholderNav[1].style.backgroundImage="none";
        logo.style.display="flex";
        triangle.style.borderTop="5vh solid black";
        schoolName.style.display="flex";
    } else if (window.pageYOffset < 815) {
        nav.style.backgroundColor="transparent";
        nav.style.backgroundImage="linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0.8)";
        box.style.backgroundColor="transparent";
        box.style.backgroundImage="linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0)";
        placeholderNav[0].style.display="visible";
        placeholderNav[0].style.backgroundImage="linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0)";
        placeholderNav[1].style.display="visible";
        placeholderNav[1].style.backgroundImage="linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0)";
        logo.style.display="none";
        triangle.style.borderTop="none";
        schoolName.style.display="none";
    }
}
