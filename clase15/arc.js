let edad = 0;
//sumar 1 a edad
edad = edad + 1;

let otraEdad = edad++;
let edad2 = ++edad;

let altura = 175;
altura--;
--altura;

function incrementar() {
     
    const labelContador = document.getElementById('contador'); 
    let valorDelLabelContador = +(labelContador.innerHTML);  
    valorDelLabelContador++;
    labelContador.innerHTML = valorDelLabelContador;
 
    imprimePar(valorDelLabelContador);
}

function decrementar() {
    const labelContador = document.getElementById('contador');
    let valorDelLabelContador = +(labelContador.innerHTML);
    
    valorDelLabelContador--;
    labelContador.innerHTML = valorDelLabelContador;

    imprimePar(valorDelLabelContador);
}

function imprimePar(valor) {
    let textoParidad;
    if(esPar(valor)) {
        textoParidad='ES PAR';
         
    }else {
        textoParidad='ES IMPAR';
    }
    actualizarTexto('paridad', textoParidad);
}

function actualizarTexto(id, nuevovalor) {
    const labelParidad = document.getElementById('id');
    labelParidad.innerHTML = nuevovalor;   

}


function esPar(valor) {
    /*
    if( (valor % 2) === 0) {
        return true;
    }else {
        return false;
    }*/

   /*Evitar tener dos return en una funcion (recomendado):
     let resto = valor % 2; 
       return resto;  */

    return valor % 2 === 0;//Evitar definir un valor e inmediatamente retornarlo:

}

   
//sucecion llamadas: onclick - incrementar/decrementar - imprimepar - espar