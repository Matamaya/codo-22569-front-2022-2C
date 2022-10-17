function buscar(texto) {
    //recorrer el json.data
    //e ir filtrando ya sea los nombres o los apellidos que contegan
    const usuariosFiltrados = json.data.filter(u => u.first_name.includes(texto) || u.last_name.includes(texto));

    Users(usuariosFiltrados);
}

//funcion principal, llama a los demas componentes
function render() {

    //invoco la funcion que esta en el archivo navbar.js
    const parametros = {
        contenedor: 'navbar',
        titulo: 'MI NAVBAR',
    };

    Navbar(parametros);

    Users(json.data);
}

//invocar a la funcion
render();