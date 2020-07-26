const buttons = document.querySelectorAll(".icons");
const testimonials = document.querySelectorAll(".testimonials");
const testimonialLetters = document.querySelector(".testimonialLetters");
const totalTestimonials = testimonials.length;

let current = 0;
let vw;

let resizeTimeout;

(function init() {
    setSlider();

    window.onresize = function(){
        clearTimeout(resizeTimeout);
        resizeTimeout= setTimeout (handleResize, 100);
    } 

    for(i=0; i < testimonials.length; i++) {
        testimonials[i].style.width = vw + "px";
    }

    for(i=0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", changeSlide)
        window.addEventListener("keydown", changeSlideKey)
    }
})();

function setSlider() {
    vw = window.innerWidth;
    sliderWidth = vw * totalTestimonials;
    testimonialLetters.style.width = sliderWidth + "px";
    for(i=0; i < testimonials.length; i++) {
        testimonials[i].style.width = vw + "px";
    }
}

function handleResize() {
    setSlider();
}

function changeSlide() {
    
    let action = this.getAttribute("data-action");
    if(action == "p") {
        if(current > 0) {
            current--;
        } else {
            current = totalTestimonials -1;
        }
        nextSlide(current);
    } 
    else if(action == "n") {
        if(current < totalTestimonials-1) {
            current = totalTestimonials -1;
        } else if (current >= totalTestimonials-1) {   
            current--;  
        }
        nextSlide(current);
    }

  
}


function changeSlideKey(event) {
    if(event.keyCode == 37) {
       
        if(current > 0) {
            current--;
        } else {
            current = totalTestimonials -1;
        }
        nextSlide(current);
    } 
    else if(event.keyCode == 39) {
        if(current < totalTestimonials-1) {
            current = totalTestimonials -1;
        } else if (current >= totalTestimonials-1) {   
            current--;  
        }
        nextSlide(current);
    }
}


function nextSlide(change) {    
    let newWidth = change * vw;
    testimonialLetters.style.transform = "translate(" + -newWidth + "px)";
}