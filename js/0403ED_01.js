//CRUD

// 1-2 :crear
const agenda = [
    {
        id: 1,
        nombre: "fer lopez",
        telefono: "+34123456789",
        email: "fer.string@mail.com",
        empresa: "string",
    },
    {
        id: 2,
        nombre: "alex almeida",
        telefono: "+34123456789",
        email: "alex.string@mail.com",
        empresa: "string",
    },
    {
        id: 3,
        nombre: "zelda link",
        telefono: "+34123456789",
        email: "zelda.string@mail.com",
        empresa: "string",
    }
];

//3 - read - mostramos los contactos
function mostrarContactos() {
    const tbody = document.getElementById("tablaContactos");
    tbody.innerHTML = ""; // Limpiar la tabla

    agenda.forEach(contacto => {
        tbody.innerHTML += `
            <tr>
                <td>${contacto.nombre}</td>
                <td>${contacto.telefono}</td>
                <td>${contacto.email}</td>
                <td>${contacto.empresa}</td>
                <td>
                <button class="btn btn-danger btn-sm" onclick="borrarId(${contacto.id})">Eliminar</button>
                </td>
            </tr>
        `;
    });
};
mostrarContactos();


//4 - 5 : Create, (añadir contacto) al final del array aplicando el metodo (.push y unshift)
function agregarContacto (nombre, tel, mail, empresa, esUrgente = false){
    //validacion
    if (!nombre || !tel) return console.error (" Faltan datos ");

    const nuevoContacto = crearObjetoContacto(nombre, tel, mail, empresa)

    if (esUrgente){
        agenda.unshift(nuevoContacto); //al inicio
    }else{
        agenda.push(nuevoContacto); //al final
    }

}

// 6 -7 Operaciones de Borrado (DELETE)- aplicamos lo que aprendiste de .splice()
//borrado simples
function borrarUltimo(){ agenda.pop();}
function borrarPrimero(){agenda.shift();}

// 8 - borrar id especifico
function borrarId(idABuscar){ const indice = agenda.findIndex(contacto => contacto.id === idABuscar);
    if (indice !== -1){
        agenda.splice(indice, 1); //cortamos 1 elemento en esa posicion
        console.log(`contacto con ID ${idABuscar} eliminado`)
    }else {
        console.warn("No se encontro el contacto")
    }
}

// 9
function crearObjetoContacto(nombre, tel, mail, empresa) {
    return {
        id: Date.now(),
        nombre,     // Usando el shorthand que vimos antes
        telefono: tel,
        email: mail,
        empresa
    };
}
