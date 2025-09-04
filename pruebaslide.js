let slideIndex    = 1;            // Índice inicial
const intervalMS  = 4000;         // 3 segundos
let slideInterval = null;         // Para almacenar el setInterval

// Muestra el primer slide y arranca el auto-slide
window.addEventListener('load', () => {
  showSlides(slideIndex);
  slideInterval = setInterval(() => plusSlides(1), intervalMS);

  // Pausa al hover en el slider (opcional)
  const slider = document.querySelector('.primercajon');
  slider.addEventListener('mouseenter', () => clearInterval(slideInterval));
  slider.addEventListener('mouseleave', () => {
    clearInterval(slideInterval);
    slideInterval = setInterval(() => plusSlides(1), intervalMS);
  });
});


// Navegar adelante/atrás
function plusSlides(n) {
    clearInterval(slideInterval);        // Detén el auto-slide
    slideIndex += n;                     // Ajusta índice
    showSlides(slideIndex);              // Muestra slide
    slideInterval = setInterval(() =>    // Reinicia auto-slide
      plusSlides(1),
      intervalMS
    );
  }
  
  // Mostrar slide por número (para indicadores, si los añades)
  function currentSlide(n) {
    clearInterval(slideInterval);
    slideIndex = n;
    showSlides(slideIndex);
    slideInterval = setInterval(() => plusSlides(1), intervalMS);
  }

  function showSlides(n) {
    const slides = document.getElementsByClassName('gridslide');
  
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1)             { slideIndex = slides.length; }
  
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
  
    slides[slideIndex - 1].style.display = 'block';
  }