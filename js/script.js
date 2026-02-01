let currentIndex = 0;
const testimonials = document.querySelectorAll(".testimonial");

function rotateTestimonials() {
  testimonials.forEach(t => t.classList.remove("active"));
  testimonials[currentIndex].classList.add("active");
  currentIndex = (currentIndex + 1) % testimonials.length;
}

rotateTestimonials();
setInterval(rotateTestimonials, 4000);
