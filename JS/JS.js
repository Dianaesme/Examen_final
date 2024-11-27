//Autor: Diana Esmeralda Ortiz Cervantes 
//Fecha: 27/11/2024
//Lenguaje Javacript
//Fuente: local
//Examen



document.getElementById('botonHola').addEventListener('click', function() {
    alert('Hola Mundo');
});

document.getElementById('botonNosVemos').addEventListener('click', function() {
    alert('Nos Vemos');
});

 

document.addEventListener("keydown", function(event){

    const elemento = document.getElementById("Cuerpo");

    if (event.key ==="1"){

        elemento.className = "Cuerpo00";                //Aqui dice que escuche al teclado y va cambiar el color del fondo y las letras

    }

    if (event.key ==="2"){

        elemento.className = "Cuerpo01";

    }

    if(event.key ==="3"){

        elemento.className = "Cuerpo02";

    }

    if(event.key ==="4"){

        elemento.className = "Cuerpo03";

    }

    if(event.key ==="5"){

        elemento.className = "Cuerpo04";

    }




});



/***Universidad Autonoma de Durango ***/
/***Diseño de la comunicacion grafica ***/
/*** Buenas profe ***/