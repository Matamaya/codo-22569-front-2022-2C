/*defino mi primer vector/array/arreglo */
const edadCarlos = 36;
const edadEduardo = 40;
const edadCesar = 25;

//los vectores son dinamicos
const edades = [];
//agregar un elemento
edades.push(36);//agregando 36 al vector edades
//invocando el metodo "push"
edades.push(edadEduardo);
edades[2] = edadCesar;
console.log(edades);

//recorrer el vector
console.log('0:',edades[0]);
console.log('1:',edades[1]);
console.log('2:',edades[2]);

//agrego mas edades
edades.push(38);
edades.push(39);
edades.push(51);

//uso de ciclos
for(let i=0; i < edades.length; i++) {
    //alt+96
    console.log(`dentro del for ${i}:`,edades[i]);
}

function calcular() {
    const nota1Value = document.getElementById('nota1').value;
    const nota2Value = document.getElementById('nota2').value;
    //solo proceso si el user cargo las DOS notas
    if (nota1Value !=='' && nota2Value !=='') {
        //invoco la funcion que procesa las notas
        procesarNotas(+nota1Value,+nota2Value);
    }else{
        alert('ingrese los datos requeridos');
    }
}

function procesarNotas(nota1,nota2) {
    const notas = [nota1,nota2];//forma 3, crear vector y agregar cont
    /* forma 1:
    const notas = [];
    notas[0] = nota1;
    notas[1] = nota2;*/
    /* forma 2:
    const notas = [];
    notas.push(nota1);
    notas.push(nota2);
    */
    let min=calcularMinimo(notas);
    let max = calcularMaximo(notas);//recibe el array completo
    let promedio=calcularPromedio(notas);
    //mostrar por consola
    console.log('maximo: ', max);
    console.log('minimo: ', min);
    console.log('promedio: ', promedio);
}

function calcularMaximo(notas) {
    let max;
    //definir una varible LOCAL
    if(notas[0] > notas[1]) {
        max = notas[0]
    }
    if(notas[1] > notas[0]) {
        max = notas[1];
    }
    if(notas[0] === notas[1]) {
        max = notas[0];
    }
    return max;
}

function calcularMinimo(notas) {
    let min;
    //definir una varible LOCAL
    if(notas[0] < notas[1]) {
        min = notas[0]
    }
    if(notas[1] < notas[0]) {
        min = notas[1];
    }
    if(notas[0] === notas[1]) {
        min = notas[0];
    }
    return min;
}

function calcularPromedio(notas) {
    //recorrro el vector acumulando notas
    let acumulador = 0;
    for(let i=0;i<notas.length;i++) {    
        acumulador= acumulador+notas[i];    
    }
    //calcular promedio:sumatoria de notas / cantidad de notas
    const promedio = acumulador/notas.length
    //retorno el promedio
    return promedio
}