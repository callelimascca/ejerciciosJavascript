// escribe tu respuesta acá
function sumarRango(inicio, fin) {
    let suma = 0;
    
    // Verificamos si el inicio es mayor que el fin, si es así, intercambiamos
    if (inicio > fin) {
        let tiempo = inicio;
        inicio = fin;
        fin = tiempo;
    }
    
    for (let i = inicio; i <= fin; i++) {
        suma += i;
    }
    
    return suma;
}
// código de prueba
console.log(sumarRango(0, 10)) // 55
console.log(sumarRango(12, 14)) // 39
console.log(sumarRango(5, 5)) // 0