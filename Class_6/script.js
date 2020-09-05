document.addEventListener(`DOMContentLoaded`, launchCookieAdvisor)

function launchCookieAdvisor(){
    const capaCookies = document.createElement(`div`)   // Se crea un elemento div
        // Se agrega código HTML
    capaCookies.innerHTML = `<p>Tienes que aceptar las Cookies <span>Aceptar</span></p>`
    capaCookies.classList.add(`avisoCookies`)


    const todosLosSpanEnDiv = capaCookies.getElementsByTagName(`span`)     // busco los span de div
    todosLosSpanEnDiv.item(0).addEventListener(`click`, function(){                 // al elemento 0 de span en el div realiza la funcción
        capaCookies.remove()    // Elimina el anuncio con remove()
    })
    
        // Hacemos que aparezca lo que hicimos 
    document.body.appendChild(capaCookies)
}