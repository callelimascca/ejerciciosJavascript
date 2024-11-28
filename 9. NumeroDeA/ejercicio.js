// escribe tu respuesta acá
function numeroDeAes(text) {
    let count = 0;
    for (let i = 0; i < text.length; i++) {
      if (text[i] === 'a') {
        count++;
      }
    }
    return count;
  }
  
// código de prueba
console.log(numeroDeAes("abracadabra")) // 5
console.log(numeroDeAes("etinol")) // 0
console.log(numeroDeAes("")) // 0