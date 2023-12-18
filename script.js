const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let slideIndex = 0;
slides[slideIndex].classList.add('active');
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// Function to show the next slide automatically
function autoSlide() {
    slides[slideIndex].classList.remove('active');
    slideIndex = (slideIndex === slides.length - 1) ? 0 : slideIndex + 1;
    slides[slideIndex].classList.add('active');
    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
}

// Set interval to call autoSlide function every 2 seconds
const slideInterval = setInterval(autoSlide, 2000);

// Stop the slider when the user clicks on prev or next button
prevBtn.addEventListener('click', () => {
    clearInterval(slideInterval);
});

nextBtn.addEventListener('click', () => {
    clearInterval(slideInterval);
});


function prevSlide() {
    slides[slideIndex].classList.remove('active');
    slideIndex = (slideIndex === 0) ? slides.length - 1 : slideIndex - 1;
    slides[slideIndex].classList.add('active');
    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function nextSlide() {
    slides[slideIndex].classList.remove('active');
    slideIndex = (slideIndex === slides.length-1) ? 0 : slideIndex + 1;
    slides[slideIndex].classList.add('active');
    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
}