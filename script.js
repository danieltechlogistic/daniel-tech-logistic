alert("Welcome to My Company!");  
// Contact Form

const contactForm = document.querySelector(".contact-form form");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value;

    const whatsappMessage =
        "Hello Daniel, Tech & Logistic!%0A%0A" +
        "Name: " + name + "%0A" +
        "Email: " + email + "%0A" +
        "Phone: " + phone + "%0A" +
        "Service: " + service + "%0A%0A" +
        "Message:%0A" + message;

    const whatsappNumber = "2347014869013";

    const whatsappURL =
        "https://wa.me/" + whatsappNumber +
        "?text=" + whatsappMessage;

    window.open(whatsappURL, "_blank");

});