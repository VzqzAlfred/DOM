/*
Estas llamadas (métodos) devuelven código y contenido HTML
    - document
        document.doctype
        document.documentEeement
        document.head
            document.charset
            document.title
        document.body
            document.links
            document.images
            document.getSelection()     Permite obtener la seleccion
                toString()
        document.scripts
        document.styleSheets
*/

/*
    $0   Devuelve lo que hayas seleccionado
    $0.nodeType     Devuelve que estas seleccionado
    $0.nodeName     Devuelve el elemento HTML que tienes seleccionado

    $0.childNodes   devuelve lo que seleccionaste
*/

/*          SELECCIONAR NODOS        
1. Con id:
        Obtener un elemento por su ID
    document.getElementByld()

2. Con selectores de CSS
    document.querySelector()    ó   element.querySelector()
    document.querySelector()    ó   element.querySelectorAll()

*/

    // getElementByYd:     Siempre se le ponen de parametros los ID de las etiquetas del HTM
    // El parámetro tiene que ir entre comillas 
console.log(document.getElementById(`title`))       //Te imprime la etiqueta

const title = document.getElementById('title')
title.style.background = 'purple'       // Hereda propiedades del CSS el fondo del título.


    // querySelector:     Se le pone como parámetro la etiqueta al que se le quiere hacer efeco
console.log(document.querySelector(`h1`))

    // querySelectorAll:    Hace que todas las etiquetas que pongamos como parámetro hagan el efecto
console.log(document.querySelectorAll(`li`));

const listItems = document.querySelectorAll(`ul li`)
console.log(listItems[0]);



const elementList = document.getElementsByTagName(`li`)
// const nodeList = document.querySelectorAll(`li`)

// No son arreglos los que devuelve
console.log(elementList);
// console.log(nodeList);


// Convirtiendo a arreglo con spred operator
const nodeList = [...document.querySelectorAll(`li`)] 
// ó    const nodeList = Array.from(document.querySelectorAll(`li`))


// map  Recorre todo el arreglo
nodeList.map(el => el.style.background = `yellow`)




