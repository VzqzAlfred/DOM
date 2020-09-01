/*
Estas llamadas (mètodos) devuelven código y contenido HTML
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
1. Cin id:
        Obtener un elemento por su ID
    document.getElementByld()

2. Con selectores de CSS
    document.querySelector()    ó   element.querySelector()
    document.querySelector()    ó   element.querySelectorAll()

*/
    // El parámetro tiene que ir entre comillas 
console.log(document.getElementById(`title`))

const title = document.getElementById('title')
title.style.background = 'purple'       // Hereda propiedades del CSS el fondo del título.
