// Handle form submission
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMessage = document.getElementById("form-message");

    if (name && email && message) {
        formMessage.textContent = "Thank you for your message!";
        formMessage.style.color = "green";

        // Clear the form
        this.reset();
    } else {
        formMessage.textContent = "Please fill in all fields.";
        formMessage.style.color = "red";
    }
});
