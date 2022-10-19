async function buscar(texto) {
    //recorrer el json.data
    //e ir filtrando ya sea los nombres o los apellidos que contegan
    const usuariosFiltrados = json.data.filter(u => u.first_name.includes(texto) || u.last_name.includes(texto));

    Users(usuariosFiltrados);
    const response = await buscarEnServicioRest(1);//esta en script.js

    if(response.ok) {
        const data = response.json();

        data.then(json => Users(json.data));
    }
    else {
        console.log(response.status)
    }
}

//funcion principal, llama a los demas componentes
async function render() {

    //invoco la funcion que esta en el archivo navbar.js
    const parametros = {
        contenedor: 'navbar',
        titulo: 'MI NAVBAR',
    };

    Navbar(parametros);

    //no cargo mas desde el archivo json
    //Users(json.data);

    //traigo todo la lista https://reqres.in/api/users
    const response = await buscarEnServicioRest(-1);//esta en script.js

    if(response.ok) {
        const data = response.json();

        data.then(json => {
            Users(json.data)
            //ejecutar  otra linea
            //desestructurar un objeto
            //{page":1,"per_page":6,"total":12,"total_pages":2,data:[]}            
            //const {page, per_page, total, total_pages} = json;
            Paginador(json);
        });
        //ahora dibujo el paginador

    }
    else {
        console.log(response.status)
    }
}

//invocar a la funcion
render();