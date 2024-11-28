// escribe tu respuesta acá
function numeroDeCaracteres(text,caracter){
    let contar = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] === caracter) {
            contar++;
          }
    }
    return contar;
}

// código de prueba
console.log(numeroDeCaracteres("Hola Mundo", "o")) // 2
console.log(numeroDeCaracteres("MMMMM", "m")) // 0
console.log(numeroDeCaracteres("eeee", "e")) // 4