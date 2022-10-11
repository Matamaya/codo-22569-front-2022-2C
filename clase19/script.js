/* CLASE 19: Intro API
Trabajamos en el Front, donde no se conecta a una base de datos, no los guarda ni los persiste

Para esta tarea vamos a ir consumiendo un poco de info del BACKEND
Como, A.P.I. rest - recursos expuestos en un lugar determinado. -- BACKEND
Los recursos son el contenido que expone un sitio web y lo deja disponible para que alguien lo pueda consumir
estos recursos pueden ser: consulta (GET), creacion (POST), modificacion (PUT), eliminacion(DELE)

en mi js escribo un codigo que usando tecnologias como FETCH armamos una cosulta para que llegue a la url donde estan los recursos y me devuelva la info

JSON (javascript objectnotation): posee dos metodos de conversion (util del front al back) 
JSON.stringify(objeto); -> transforma objeto a string
JSON.parse(string); -> transforma string a objeto*/


const personas = [//array1
    {//objeto1
        dni: 1234578,
        nombre: 'juan',
        direcciones: [//array2 dentro de objeto1
            {//objeto2 dentro array2
                calle: 'av siempre viva',
                localidad: {//objeto3 dentro un objeto2
                    cp: 1236,
                    nombre: 'caba'
                }
            },
            {
                calle: 'calle 14',
                localidad: {
                    cp: 1237,
                    nombre: 'amba'
                }
            }
        ]
    },
    {
        dni: 1234579,
        nombre: 'carlos',
        direcciones: [
            {
                calle: 'calle 16',
                localidad: {
                    cp: 1236,
                    nombre: 'caba'
                }
            },
        ]
    }
];


const str = JSON.stringify(personas);//obj -> str
const obj = JSON.parse(str);//str -> obj
 

console.log(personas);
console.log(str);
console.log(obj);


function RepasoArray() { 
//Averiguar si existe un codigo postal 1267
//const existe = personas.direcciones.some(dir => dir.localidad.cp === 1267); 
//console.log(existe); 
//usando ciclo for
let existe = false;
    for (let i = 0; !existe && i < persona.length; i++) {
        existe = persona[i].direcciones.some(dir => dir.localidad.cp === 1237);
    }
    console.log(existe);

    //usando every
    const existeV2 = personas.every(per => per.direcciones.some(dir => dir.localidad.cp !== 1237));
    console.log(existeV2);

    //usando un map
    const dirs = personas.map(p => p.direcciones);
    console.log(dirs);

    const dirFlat = dirs.flat();
    console.log(dirFlat);

    const existeV3 = dirFlat.some(d => d.localidad.cp === 1237);
    console.log(existeV3);
    //-----------------

    let array1 = [1,2,3, [4,5,6],7,8 ];
    //el .flat lo convertira a [1,2,3,4,5,6,7,8], como que desfragmenta los arrays que hay dentro de otro mayor
    console.log(array1);
    array1 = array1.flat();
    console.log(array1);
};

//dibujar los datos de la persona en un div
function CrearDivPersona(personas) {
    const divPersona = document.getElementById('contenidoExterno');
    personas.forEach(persona => {
        divPersona.innerHTML += CrearCardPersona(persona);
    });
}
//inicio - convoco la funcion 
CrearDivPersona(personas);

//card importado de Bootstrap, añadido por JS!!!
function CrearCardPersona(unaPersona) {
    const html = `<div class="card" style="width: 18rem;">    
    <div class="card-body">
      <h5 class="card-title">${unaPersona.nombre}</h5>
      <p class="card-text">${CrearDirecciones(unaPersona.direcciones)}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`;   
  return html; 
  //templates: cuando tenemos un texto entre comillas invertidas `hola` se le pueden introducir variables usando ${variable}
}

function CrearDirecciones(direccion) {
    let dirs = '<ul>';
    const dires = direccion.forEach(
        d => dirs += '<li>' + d.calle + ',' + d.localidad.cp  + '</li>'
    );
    return dirs + dires + '</ul>';
}