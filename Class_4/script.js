    // forms:  accede al primer formulario, por eso se pone como arreglo.
// document.forms[0].action
        // action:  es el valor del que hay en action de form
// document.forms[0].elements[0].value = `Hello`
        // elements[_]:   accede al primer elemento del form
document.forms[0].elements[0].value = `Hello`


document.getElementById('idCampo').addEventListener('click', changeFocus)

function changeFocus () {
    document.forms.elformulario.campo.focus()
}

                                // keyup:   Hace que cada vez que se pulse una tecla y se levante de pulsarla se genera
document.getElementById(`c1`).addEventListener(`keyup`, function () {
    console.log(`Lo escrito es:`, this.value)       // coloca la linea de `Hello`
})




 