// escribe tu respuesta acá
function likes(number) {
    if (number < 1000) {
        return number;
    } else if (number < 1000000) {
        return (number / 1000) + 'K';  // Redondea a la unidad más cercana y añade "K"
    } else {
        return (number / 1000000) + 'M';  // Redondea a la unidad más cercana y añade "M"
    }
}

// código de prueba
console.log(likes(983)) // "983"
console.log(likes(1900)) // "1K"
console.log(likes(54000)) // "54K"
console.log(likes(120800)) // "120K"
console.log(likes(25222444)) // "25M"