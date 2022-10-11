const arraydePalabra = [];

function addPalabra () {
    //capturo valor input
   const valuePalabra = document.getElementById('palabra').value;//el .value captura solo el valor del input y no la etiqueta completa

   //validacion de que no sea vacio
   if (valuePalabra==='') {
    return;
   }

   //agrego la palabra al array
   arraydePalabra.push(valuePalabra);
   //console.log(arraydePalabra);

   listarPalabras();
} 

function listarPalabras(){
    //validar que el ARRAY no sea vacio
    if (arraydePalabra==='') {
        return;
    }

     
    //recorro el array y voy agregando palabras
    const ul = document.createElement('ul');//creamos un ul en html con el metodo createelement
    for (let unaPalabra of arraydePalabra){
        const li = document.createElement('li');
        li.innerHTML = unaPalabra;//texto dentro del li
        
        document.getElementById('listado').innerHTML=('');//limpio el div
        ul.appendChild(li);//añadir li al ul mediante appendChild
    }
    
    document.getElementById('listado').appendChild(ul);
    //document.getElementById('listado').innerHTML += ul;
}
/*
        li.id = Math.random();// agregar id dinamicamente con js, math random da entre 0 - 0.999999
        li.className = 'texto-rojo';//crear clase dinamicamente
        

        //agregar evento dinamico al li
                li.addEventListener('click',function() {
            alert('dentro del evento onclick de li')
        });*/