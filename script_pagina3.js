// Inicializar EmailJS
emailjs.init("_quECKGEbQP4yftk9");

document.getElementById("personalForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Capturar los datos del formulario
    const formData = {
        name: document.getElementById("name").value,
        lastname: document.getElementById("lastname").value,
        age: document.getElementById("age").value,
        address: document.getElementById("address").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        city: document.getElementById("city").value,
        country: document.getElementById("country").value,
        message: document.getElementById("commentBox").value,
    };

    // Enviar datos por EmailJS
    emailjs.send("service_bh62oxa", "template_21hqxah", formData)
        .then(() => {
            document.getElementById("formMessage").textContent = "¡Formulario enviado con éxito!";
            document.getElementById("formMessage").style.color = "green";
        })
        .catch((error) => {
            console.error("Error al enviar el formulario:", error);
            document.getElementById("formMessage").textContent = "Hubo un error al enviar el formulario.";
            document.getElementById("formMessage").style.color = "red";
        });
});

document.getElementById("clearForm").addEventListener("click", function () {
    // Limpiar los campos del formulario
    document.getElementById("personalForm").reset();
    document.getElementById("formMessage").textContent = ""; // Limpiar mensaje
});
