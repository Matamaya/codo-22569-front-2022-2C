const arraydePalabra = [];

function addPalabra () {
    //capturo valor input
   const valuePalabra = document.getElementById('palabra').value;

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

    //limpio el div
    document.getElementById('listado').innerHTML='';

    //recorro el array y voy agregando palabras
    let ul ='<ul>';
    for (let unaPalabra of arraydePalabra){
        document.getElementById('listado').innerHTML += `${unaPalabra}`;
    }
}

//variables template