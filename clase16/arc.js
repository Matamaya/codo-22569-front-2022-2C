/*defino mi primer vector/array/arreglo */
const edadCarlos = 36;
const edadEduardo = 40;
const edadCesar = 25;

//los vectores son dinamicos
const edades = [];
//agregar un elemento
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
for(let i=0;i < edades.length; i++) {
    //alt+96
    console.log(`dentro del for ${i}:`,edades[i]);
}

function calcular() {
    const nota1Value = document.getElementById('nota1').value;
    const nota2Value = document.getElementById('nota2').value;
    //invoco la funcion que procesa las notas
    procesarNotas(nota1Value,nota2Value);
}

function procesarNotas(nota1,nota2) {
    const notas = [nota1,nota2];//otra forma

    /*const notas = [];
    notas[0] = nota1;
    notas[1] = nota2;*/
    /*
    const notas = [];
    notas.push(nota1);
    notas.push(nota2);
    */

    let min;
    let promedio;
    
    
    let max = calcularMaximo(notas);
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
    if(notas[0] > notas[1]) {
        min = notas[0]
    }
    if(notas[1] > notas[0]) {
        min = notas[1];
    }
    if(notas[0] === notas[1]) {
        min = notas[0];
    }
    return min;
}

function calcularPromedio (notas) {
    let acumulador = 0;
    for(let i=0;i<notas.length;i++) {    
        acumulador= acumulador+notas[i];    
    return 0;
    }
}

/* primero creo la funcion
function calcularNotas() {
    const nota1 = document.getElementById("nota1").value;
    const nota2 = document.getElementById("nota2").value;

    //validacion
    const notasValidas = validarNotas(nota1,nota2);//tipo  boolean

    if(!notasValidas) { // notasValidas === false
        alert('Verifique los datos ingresados');
        return;
    }
    
    calcularValores(nota1, nota2);    
}

function validarNotas(nota1,nota2) {
    //aca solo aplico validaciones
    if(Number(nota1) && Number(nota2)) {
        return true;
    }
    return false;
}

function calcularValores(nota1,nota2) {   
    //crear el vector de notas
    const notas = [];

    //carga un vector
    //1 - nombreVector[indice]=valor;
    notas[0] = parseInt(nota1);
    notas[1] = +nota2;
    
    //ahora trabajo con el vector
    //recorrer el vector
    let menor = notas[0];
    let mayor = notas[0];
    let promedio;
    let suma = 0;
    for(let i=0;i<notas.length;i++) {
        //calculo el menor
        if(notas[i] < menor)  {
            menor = notas[i];
        }
        //calcular el mayor
        if(notas[i] > mayor)  {
            mayor = notas[i];
        }
        //sumo las notas
        suma = suma + notas[i];
    }

    //ahora que tengo el la suma de las notas, calculo el promedio
    promedio = suma / notas.length;

    //mustro los datos
    console.log(menor);
    console.log(mayor);
    console.log(promedio);
} */