// Carousel Functionality
const slides = document.querySelectorAll(".carousel-item");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

document.querySelector(".carousel-control.next").addEventListener("click", nextSlide);
document.querySelector(".carousel-control.prev").addEventListener("click", prevSlide);

// Initialize the carousel
showSlide(currentSlide);

// Textual AI Project Buttons
function viewProject(project) {
  switch (project) {
    case 'distant-read':
      alert('Opening the Distant Read project!');
      window.location.href = 'distant-read.html'; // Placeholder URL
      break;

    case 'short-story':
      alert('Opening the Generative Short Story project!');
      window.location.href = 'short-story.html'; // Placeholder URL
      break;

    case 'conversation':
      alert('Opening the Conversation with a Bot project!');
      window.location.href = 'conversation.html'; // Placeholder URL
      break;

    default:
      alert('Project not found!');
  }
}
