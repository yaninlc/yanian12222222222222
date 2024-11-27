// Inicializar EmailJS
emailjs.init("_quECKGEbQP4yftk9"); // Reemplaza con tu User ID de EmailJS

document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const loginMessage = document.getElementById("loginMessage");

    // Validación simulada (puedes cambiar esto según tus necesidades)
    const validUser = "admin";
    const validPassword = "12345";

    if (username === validUser && password === validPassword) {
        loginMessage.style.color = "green";
        loginMessage.textContent = "Inicio de sesión exitoso";

        // Enviar correo con EmailJS
        emailjs.send("service_bh62oxa", "template_gtdar1r", {
            username: username,
        }).then(
            () => {
                console.log("Correo enviado con éxito");
                // Redirigir a Página 2 después de enviar el correo
                setTimeout(() => {
                    window.location.href = "pagina2.html";
                }, 1000);
            },
            (error) => {
                console.error("Error al enviar el correo:", error);
            }
        );
    } else {
        loginMessage.style.color = "red";
        loginMessage.textContent = "Usuario o contraseña incorrectos";
    }
});
