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
    if( (valor % 2) === 0) {
        return true;
    }else {
        return false;
    }
}

/*function esPar(valorDelLableContador){
    let resto = valorDelLableContador % 2;
    return resto;
}*/

return valor % 2;


/* % operador modulo (mod) devuelve R
 D|_d__
 R  c
 
 si R es 0, D es par
 si R es distinto de 0, D es impar
 
 if es un condicional*/


 /*== ===*/
let a = '10';
let b = 10;
// console.log(a == b) //compara valor interno: true | false 
// console.log(a === b); //compara tipo de variable y valor

//sucecion llamadas: onclick - incrementar/decrementar - imprimepar - espar