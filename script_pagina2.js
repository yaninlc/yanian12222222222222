// Inicializar EmailJS
emailjs.init('_quECKGEbQP4yftk9');

// Manejo del envío de correo
document.getElementById('email-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    emailjs.send('service_bh62oxa', 'template_gtdar1r', {
        username: username,
        email: email,
        message: message
    })
    .then(() => {
        document.getElementById('email-status').textContent = 'Correo enviado exitosamente.';
    })
    .catch(() => {
        document.getElementById('email-status').textContent = 'Error al enviar el correo.';
    });
});

// API de Unsplash para cargar imágenes
document.getElementById('load-image').addEventListener('click', function () {
    // Generar una URL única con un parámetro aleatorio
    const imageUrl = `https://picsum.photos/600/400?random=${Math.random()}`;
    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = 'Imagen aleatoria de paisajes';
    
    const container = document.getElementById('image-container');
    container.innerHTML = ''; // Limpia el contenedor
    container.appendChild(img); // Añade la nueva imagen
});



// API de OpenWeather para consultar el clima
document.getElementById('get-weather').addEventListener('click', function () {
    const lat = document.getElementById('latitude').value.trim(); // Obtén la latitud
    const lon = document.getElementById('longitude').value.trim(); // Obtén la longitud
    const apiKey = 'a7107e504f448757429a9d35147c1283'; // Asegúrate de tener una clave válida

    // Verifica que los valores no estén vacíos
    if (!lat || !lon) {
        document.getElementById('weather-result').textContent = 'Por favor, ingresa latitud y longitud.';
        return;
    }

    // URL de la API con parámetros dinámicos
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=es`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error en la API: ${response.statusText} (Código: ${response.status})`);
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('weather-result').textContent =
                `El clima en ${data.name} es ${data.weather[0].description} con ${data.main.temp}°C.`;
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('weather-result').textContent =
                'No se pudo obtener el clima. Verifica la latitud y longitud ingresadas.';
        });
});
