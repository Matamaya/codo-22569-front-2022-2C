//filtrar elementos
const alumnos = [
    {
        edad: 35,
        nombre: "carlos"//agrego objetos completos en el array
    },
    {
        edad: 30,
        nombre: "juan"
    },
    {
        edad: 40,
        nombre: "eduardo"
    },
    {
        edad: 38,
        nombre: "gaby"
    }
];

//alumnos con edad < 40
//declaro un array auxiliar donde guardar los que cumplan la condicion
const aux = [];
for (let unAlumno of alumnos) { //foreach (imperativo: que y como)
    //console.log(unAlumno);
    if (unAlumno.edad < 40) {
        aux.push(unAlumno.nombre);
    }
}
console.log('menores de 40: ', aux);

//FILTER -->estructura --> nombreArray.filter(NombreVariable => Expresion que queremos evaluar);
const aux2 = alumnos.filter(unAlumno => unAlumno.edad < 40); //declarativo: (que)
console.log('menores de 40: ', aux2); 

//MAP, junto con filter devuelve un array de lo que sea que especifiquemos
const nombresDeAlumnos = aux2.map(unAlumno => unAlumno.nombre); //(que quiero???)
console.log(nombresDeAlumnos);

//SOME: old form:
let existe = false;

for (let i=0;i<alumnos.length && !existe;i++) { //foreach (imperativo que y como)
    existe = alumnos[i].edad == 40; 
}

// muestren si existe un alumnos con edad = 40, y no recorrer todo el ciclo for
console.log(existe)

//SOME: new form
const existe2 = alumnos.some(unAlumno => unAlumno.edad == 40);
console.log(existe2)

//SI TODOS LOS ALUMNOS TIENE EDAD = 35
let todos35 = true;
for (let i = 0; i < alumnos.length && (todos35 = alumnos[i].edad !== 35); i++) {}
console.log(todos35);

//EVERY
const todos35_2 = alumnos.every(unAlumno => unAlumno.edad == 35);
console.log(todos35_2);

//SUMAR TODAS LAS EDADES DE LOS ALUMNOS OLD
let edadTotal = 0;
alumnos.forEach(unAlumno => edadTotal += unAlumno.edad);//que

console.log(edadTotal);

//REDUCE
const edadTotal2 = alumnos.reduce((total,alumnoActual) => total + alumnoActual.edad,0);
console.log(edadTotal2);
//al reduce se le agregan dos parametros uno que va a acumulando los valores (total) y otro donde esta el valor actual, 0=valor inicial