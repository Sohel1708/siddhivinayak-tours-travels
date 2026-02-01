let testimonials = document.querySelectorAll(".testimonial");
let index = 0;

function showTestimonial(i) {
  testimonials.forEach(t => t.classList.remove("active"));
  testimonials[i].classList.add("active");
}

function nextTestimonial() {
  index = (index + 1) % testimonials.length;
  showTestimonial(index);
}

function prevTestimonial() {
  index = (index - 1 + testimonials.length) % testimonials.length;
  showTestimonial(index);
}

setInterval(nextTestimonial, 5000);

/* FORM EMAIL */
document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = nameInput = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let details = document.getElementById("details").value;

  let body =
    "Name: " + name + "%0D%0A" +
    "Phone: " + phone + "%0D%0A" +
    "Details: " + details;

  window.location.href =
    "mailto:siddhivinayaktoursandtravels@gmail.com" +
    "?subject=New Booking Enquiry" +
    "&body=" + body;
});
