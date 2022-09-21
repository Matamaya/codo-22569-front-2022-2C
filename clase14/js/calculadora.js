function calcular () {
    let valor1= prompt('ingrese valor1');//permitir que el usuario ingrese valor
    let operador= prompt('ingrese operador (+,-,*,/)');
    let valor2= prompt('ingrese valor2');

    console.log(valor1);
    console.log(valor2);
    console.log(operador);


    const resultado=parseInt(valor1)+parseInt(valor2); //parseInt transforma los valores de texto a numero
    console.log(resultado);

}
