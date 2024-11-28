// escribe tu respuesta acá
function imprimirArreglo(...elementos) {
    // Usamos un bucle for para recorrer el arreglo e imprimir cada elemento
    for (let i = 0; i < elementos.length; i++) {
      console.log(elementos[i]);
    }
  }
  
  // Código de prueba
  imprimirArreglo(1, "Hola", 2, "Mundo");
  