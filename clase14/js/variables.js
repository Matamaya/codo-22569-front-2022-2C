/* definir variables */
let valor1;
let valor2;
let resultado;

/*asignacion de valores a las variables */
valor1=10;
valor2=20;
resultado=valor1+valor2;
/*+ es operador matematico
= es opereador de asignacion */

/*mostrar por consola */
console.log(resultado);
/*alert(resultado)*/

/*brakpoint(punto de quiebre): designar un punto (linea de codigo) en donde se detendra la 
ejecucion de mi codigo .js

debug: inspeccionar las variable para ver como van cambiando sus valores
a medida que se ejecuta el programa

un valor posible para una variable es undefined(indefinido)*/

/*+ tipos de datos:*/

let nombre = 'carlos'; //string (caracteres)
let apellido = 'lopez';//string (caracteres)
let edad = 31; //number
let letra='a'
let esArgentino = true; //boleano (true/false)

//var tipo objeto (reune multiples variables en una sola)
const persona = {
     nombre: 'carlos',
     apellido:'lopez' ,
     edad:36,
     letra: 'a',
     esArgentino:true ,
};

console.log('variable apellido:', apellido); //texto seguido del valor
console.log(persona) //muestra objeto completo
console.log(persona.esArgentino, persona.edad)//muestra atributo/s especifico del objeto console.log(objeto.atributo)

edad=37 //es posible porque es una variable

const altura=175; //fijar un valor, una vez fijado en adelante no puede reasignarse
console.log('altura'); 

/*si a un objeto le fijamos su valor este no podra cambiar. 
Pero si puede ser alterado el valor de sus atributos*/ 

persona = {
    edad:37
};

console.log(persona)

//cambiar el valor de un atributo de objeto objeto.atributo=valor;
persona.edad=38;

console.log(edad);