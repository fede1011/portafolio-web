
// boton de enviar formulario


// const btn__enviar = document.querySelector('.boton--enviar');
// btn__enviar.addEventListener('click', function(evento){

//     console.log(evento);
//     console.log(evento.preventDefault());
//     console.log('enviando formulario...');


// })


// Eventos de los inputs --- text area.


document.addEventListener('DOMContentLoaded' , function() {

    inicarApp();
});

function inicarApp() {

    scroll();
}


const datos = {

    nombre: '',
    email: '',
    mensaje: ''
}


const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');
;


nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);


function leerTexto (e) {

    datos [e.target.id] = e.target.value;


    console.log(datos);
}

/// Elemento del submit


formulario.addEventListener('submit', function(evento) {

    evento.preventDefault();


    /// Validar Formulario.

    const { nombre, email} = datos;
    const form = document.getElementById("form");

    if( nombre === '' || email == '' ){

        mensajeSimplifiiicado ('Complete los campos obligatorios del formulario *' , true);
        return; // Corta la  ejecución del codigo

    }

        mensajeSimplifiiicado('Formulario enviado correctamente.');

        form.reset();

})

function mensajeSimplifiiicado (mensaje, error = null) {


    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if(error ) {

        alerta.classList.add('error');
    } else {

        alerta.classList.add('correcto');
    }

    formulario.appendChild(alerta);

    // Desaperce 5 segundos.

    setTimeout(() => {

        alerta.remove();

    }, 5000);
}

/// Funcion -- Scroll

function scroll() {

    const enlaces = document.querySelectorAll('.navegacion--principal a');
    enlaces.forEach( enlace => {

        enlace.addEventListener('click', function (e) {

            e.preventDefault();

            const seccionScroll = e.target.attributes.href.value;
            const seccion = document.querySelector(seccionScroll);
            seccion.scrollIntoView({ behavior: "smooth" });

        } )

    })
}





