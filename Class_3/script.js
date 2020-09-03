/*              EVENTOS              
    addEventListener( _ ,function)
    
    _ : 
    - load                   Carga cuando la página haya terminado de cargar
    - DOMContentLoad         Se dispara cuando el DOM ya se hayan cargado y estan listos para recibir acciones
    */

function inicializador(){
    const parrafo1 = document.getElementById(`parrafo1`)
    parrafo1.style.color = `orange`
}

function inicializadorYear(){
    let year = new Date().getFullYear()       // Obtenemos el año actual
    document.getElementById(`year`).value = year
}

// cuando la página se termine de cargar la web, carga la función
window.addEventListener(`load`, inicializador)

document.addEventListener(`DOMContentLoaded`, inicializadorYear)



/*                INTERACCIÓN              */

const changeStyle = () => {
    document.getElementById(`age`).style.color = `blue`
    document.getElementById(`age`).style.fontSize = `2.5rem`
}

function age(){
    let age = new Date().getFullYear()  // Consigue el año actual
    document.getElementById(`age`).value = age  // Asignacion de el valor para que este fijo

    document.getElementById(`age`).addEventListener(`click`, changeStyle)       // al hacer click al elemento con id=age se cambia de color
}

document.addEventListener(`DOMContentLoaded`, age)

let persons = [`Alfred`, `Said`, `Santy`]

for(let person of persons){
    alert(`Hola` + ` ` +    person)
}