document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const details = document.getElementById("details").value;

  const mailtoLink =
    `mailto:sohelbhai8888@gmail.com?subject=New Cab Booking Enquiry` +
    `&body=Name: ${name}%0D%0APhone: ${phone}%0D%0ADetails: ${details}`;

  window.location.href = mailtoLink;
});
