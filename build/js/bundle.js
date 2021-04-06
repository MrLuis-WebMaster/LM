document.addEventListener('DOMContentLoaded', function() {
    scrollNav();
    navegacionFija();
});

function navegacionFija() {

    const barra = document.querySelector('.Header');

    // Registrar el Intersection Observer
    const observer = new IntersectionObserver( function(entries) {
        if(entries[0].isIntersecting) {
            barra.classList.remove('fijo');
        } else {
            barra.classList.add('fijo');
        }
    });

    // Elemento a observar
    observer.observe(document.querySelector('.Sobre'));
}


function scrollNav() {
    const enlaces = document.querySelectorAll('.Navegacion a');

    enlaces.forEach( function( enlace ) {
        enlace.addEventListener('click', function(e) {
            e.preventDefault();
            const seccion = document.querySelector(e.target.attributes.href.value);

            seccion.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});



// Validador para el formulario

const Datos = {
    nombre:'',
    email:'',
    celular:'',
    mensaje:''
};


const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const celular = document.querySelector("#celular");
const mensaje = document.querySelector("#mensaje");

nombre.addEventListener("input",leertexto);
email.addEventListener("input",leertexto);
celular.addEventListener("input",leertexto);
mensaje.addEventListener("input",leertexto);

function leertexto (e) {
    Datos[e.target.id]= e.target.value;
    console.log(Datos);
}

// evento del submit 

const formulario = document.querySelector(".formulario");

formulario.addEventListener("submit",function(e){
    // validar formulario
    const {nombre, email, celular, mensaje} = Datos;
        if (nombre ==="" || email ==="" || celular ==="" || mensaje ==="" ) {
            e.preventDefault();
            mostrarmensaje ("Falta completar campos",true);
            return;
        } 
    //enviar formulario
    mostrarmensaje ("Enviado con exito");

})



function mostrarmensaje (mensaje,error=null) {
    const alerta = document.createElement("P");
    alerta.textContent= mensaje;
    if (error){
        alerta.classList.add("alerta");
    } else {
        alerta.classList.add("exito");
    }
    formulario.appendChild(alerta);

    setTimeout ( ( ) => {
        alerta.remove();
    }, 3000);
}

document.addEventListener('DOMContentLoaded', function() {
    CrearGaleria();
});


function CrearGaleria () {
    const galeria = document.querySelector (".galeria-imagenes");
    for (let i = 1; i <= 12; i++ ){
        // Creo las imagenes
        const imagen =document.createElement ("IMG");
        imagen.src = `build/img/${i}.webp`;

        imagen.dataset.imagenId = i;

        //funcion para imagen

        imagen.onclick = mostrarImagen;

        // Las coloco en una lista las imagenes

        const lista = document.createElement("LI");

        lista.appendChild(imagen);

        galeria.appendChild(lista);
    }    
};

function mostrarImagen (e) {
    const id = parseInt (e.target.dataset.imagenId);

    // Creo las imagenes
    const imagen = document.createElement ("IMG");
    imagen.src = `build/img/${id}.webp`;

    const overlay = document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');
    
    // Cuando se da click, cerrar la imagen
    overlay.onclick = function() {
        overlay.remove();
        body.classList.remove('fijar-body');
    }
    // Boton para cerrar la imagen
    const cerrarImagen = document.createElement('P');
    cerrarImagen.textContent = 'X';
    cerrarImagen.classList.add('btn-cerrar');

    // Cuando se presiona, se cierra la imagen
    cerrarImagen.onclick = function() {
        overlay.remove();
        body.classList.remove('fijar-body');
    }

    overlay.appendChild(cerrarImagen)
    
    // Mostrar en el HTML
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body');
};


const ham = document.querySelector('.ham');
const enlaces = document.querySelector('.Navegacion');
const barras = document.querySelectorAll('.ham span');
const background = document.querySelector(".Box-background");


ham.addEventListener('click', () => {
    enlaces.classList.toggle("activado");
    background.classList.toggle("activado");
    barras.forEach(child => {child.classList.toggle('animado')});
    ham.classList.toggle('girar');


});
