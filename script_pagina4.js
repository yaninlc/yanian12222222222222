function multiplicar() {
    const num1 = prompt("Ingresa el primer número:");
    const num2 = prompt("Ingresa el segundo número:");
    if (num1 && num2) {
        const resultado = parseFloat(num1) * parseFloat(num2);
        alert(`El resultado de la multiplicación es: ${resultado}`);
    } else {
        alert("Por favor, ingresa valores válidos.");
    }
}

function elevarCuadrado() {
    const num = prompt("Ingresa un número:");
    if (num) {
        const resultado = Math.pow(parseFloat(num), 2);
        alert(`El resultado de elevar al cuadrado es: ${resultado}`);
    } else {
        alert("Por favor, ingresa un valor válido.");
    }
}

function restar() {
    const num1 = prompt("Ingresa el primer número:");
    const num2 = prompt("Ingresa el segundo número:");
    if (num1 && num2) {
        const resultado = parseFloat(num1) - parseFloat(num2);
        alert(`El resultado de la resta es: ${resultado}`);
    } else {
        alert("Por favor, ingresa valores válidos.");
    }
}
