document.addEventListener(`DOMContentLoaded`, inicializador)

function inicializador(){
    const cambiarClaseBoton = document.getElementById(`changeClass`)
    cambiarClaseBoton.addEventListener(`click`, changeStyle)

    const cambiarListaDeBoton = document.getElementById(`changeList`)
    cambiarListaDeBoton.addEventListener(`click`, changeClassList)

}

function changeStyle(){
    const elementos = document.getElementsByClassName(`item`)
    console.log(elementos.item(0)) // el primer item es el parrafo en el HTML

    for (let i = 0; i < elementos.length; i++){
        elementos.item(i).style.color = `#fff`
    }
}

function changeClassList(){
    const listElements = document.getElementsByTagName(`li`)
    for (let i =0; i < listElements.length; i++){
        listElements.item(i).classList.add(`itemgrande`)
                    // classList:  Contiene para manipular las clases de ese elemento
                    // add:  Es agregar clase
    }
}

