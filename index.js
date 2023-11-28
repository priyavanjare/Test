
let image = document.querySelector(".image");
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const selector = document.querySelectorAll('.select');
var current = 0
const slids = document.querySelectorAll('.slides');
var currentSlides = 0
var restart = document.querySelector(".restart")



let images = ["Property 1=Variant2 (1).png","Property 1=Variant3 (1).png","Property 1=Variant4 (1).png","Property 1=Variant5 (1).png","Property 1=Variant6 (1).png","Property 1=Variant7 (1).png"]


setInterval(function(){
    let random = Math.floor(Math.random()*6);
    image.src = images[random]
},1000)



function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

window.addEventListener("keydown",(e)=>{
    if(e.key === "ArrowRight"){
        nextSlide()
    }
})
window.addEventListener("keydown",(e)=>{
    if(e.key === "ArrowLeft"){
        prevSlide()
    }
})

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Show the initial slide
showSlide(currentSlide);





function showSlides(index) {
    slids.forEach((slids, i) => {
        slids.classList.toggle('active1', i === index);
    });
}

function prevSlides() {
    currentSlides = (currentSlides - 1 + slids.length) % slids.length;
    showSlides(currentSlides);
}

function nextSlides() {
    currentSlides = (currentSlides + 1) % slids.length;
    showSlides(currentSlides);
}

// Show the initial slide
showSlides(currentSlides);


function goBack(){
    showSlides(0);
}




function showPage(index) {
    selector.forEach((selector, i) => {
        selector.classList.toggle('active2', i === index);
    });
}


function Back() {
    current = (current - 1 + selector.length) % selector.length;
    showPage(current);
}

function Next() {
    current = (current + 1) % selector.length;
    showPage(current);
}

// Show the initial slide
showPage(current);


function GoBacks(){
    showPage(0);
}

function home(){
    window.scrollTo(0, 0);
}

window.addEventListener("mousemove",()=>{
        restart.style.display="flex"
 
})



 