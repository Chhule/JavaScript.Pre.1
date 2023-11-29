function simular() {
    // Aquí puedes escribir la lógica de tu simulador
    // Por ejemplo, realizar cálculos y mostrar el resultado en el elemento con id "output"
    var resultado = realizarCalculos();
    document.getElementById("output").innerText = "Resultado: " + resultado;
}

function realizarCalculos() {
    // Esta función representa los cálculos que quieras realizar en tu simulador
    // Puedes personalizarla según tus necesidades
    var valor1 = parseFloat(prompt("Ingresa el primer valor:"));
    var valor2 = parseFloat(prompt("Ingresa el segundo valor:"));
    var suma = valor1 + valor2;
    return suma;
}