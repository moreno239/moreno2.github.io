let slideIndex = 1 ;
showSlides(slideIndex);



function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
  }	
  
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("gridslide");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }

    slides[slideIndex-1].style.display = "block";  
  
  }

  const intervalMS  = 4000;         // 4 segundos
  let slideInterval = null;         // Para almacenar el setInterval
  
  // Muestra el primer slide y arranca el auto-slide
  window.addEventListener('load', () => {
    showSlides(slideIndex);
    slideInterval = setInterval(() => plusSlides(1), intervalMS);
  
    // Pausa al hover en el slider
    const slider = document.querySelector('.primercajon');
    slider.addEventListener('mouseenter', () => clearInterval(slideInterval));
    slider.addEventListener('mouseleave', () => {
      clearInterval(slideInterval);
      slideInterval = setInterval(() => plusSlides(1), intervalMS);
    });
  });