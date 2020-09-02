/*
    getAtribute()       Obtiene un atributo
    setAtribute()       Define un atributo
    classList
        .add()          Agrega clases
        .remove()       Elimina clases
        .toggle()
    id
    value
*/

let title = document.getElementById(`title`)
document.write(`<div>${title.getAttribute(`id`)}</div>`)
document.write(`<div>${title.getAttribute(`class`)}</div>`)

title.id = `titulo`     // Cambiar el nombre del id en la etiqueta h1

title.classList.add(`main`, `nav`)
console.log(title);


/*                  CONTENIDO

    textContect         Te devuelve el texto del contenido que hay en esa etiqueta
    innerHTML           te da lo mismo que textConten, pero si hay etiquetas las imprime
    outerHTML           Te da toda la etiqueta 
*/

const title1 = document.querySelector(`h1`)
console.log(title1.textContent);
console.log(title1.innerHTML);
console.log(title1.outerHTML);




/*          CREAR ELEMENTOS 

    document.createElement()        Crea etiquetas HTML
    element.appendChild()                   Mete elementos en el DOM
*/

                    // Como parámetro es la etiqueta HTML
const teacher = document.createElement(`h2`)

teacher.textContent =`Welcome to create Elements`
teacher.classList.add(`teacher`)
teacher.id = `teacher`

// En el documento has que aparezca el elemento creado
document.body.appendChild(teacher)




const sr = document.createElement(`p`)
sr.textContent = `Galileo Galilei.`
const teacherContainer = document.getElementById(`teacher_id`)

if (teacherContainer && teacherContainer.querySelector(`em`)){
    teacherContainer.querySelector(`em`).appendChild(sr)
}