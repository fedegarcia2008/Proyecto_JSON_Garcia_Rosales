const formulario = document.getElementById("formulario");
let pas_json = [];
function mostrarTabla() {
    const contenedor = document.getElementById('tablaPas');
    contenedor.innerHTML = '';
    let tabla = document.createElement('table');
    tabla.border = "1";

    tabla.innerHTML = `
    <tr>
        <th>DNI</th>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Dirección</th>
        <th>Razón Social</th>
        <th>RUC</th>
    </tr>`;

    pas_json.forEach(p => {

        let fila = document.createElement('tr');

        fila.innerHTML = `
            <td>${p.dni}</td>
            <td>${p.nombre}</td>
            <td>${p.apellido}</td>
            <td>${p.direccion}</td>
            <td>${p.razon}</td>
            <td>${p.ruc}</td>
        `;

        tabla.appendChild(fila);
    });

    contenedor.appendChild(tabla);
}


fetch("pasajero.json")
    .then(rpta => rpta.json())
    .then(datos => {

        datos.forEach(pas => {
            pas_json.push({
                dni: pas.dni,
                nombre: pas.nom,
                apellido: pas.ape,
                direccion: pas.dir,
                razon: pas.razon_soc,
                ruc: pas.ruc
            });
        });

        mostrarTabla();
    })
    .catch(error => console.log(error));



document.getElementById('mostrarPas').addEventListener('click', () => {
mostrarTabla();
});



let emp_json = [];

function mostrarTablaEmpleados() {
    const contenedor = document.getElementById('tablaEmp');
    contenedor.innerHTML = '';

    let tabla = document.createElement('table');
    tabla.border = "1";

    tabla.innerHTML = `
    <tr>
        <th>DNI</th>
        <th>Nombres</th>
        <th>Apellidos</th>
    </tr>`;

    emp_json.forEach(emp => {
        let fila = document.createElement('tr');

        fila.innerHTML = `
            <td>${emp.dni}</td>
            <td>${emp.nombres}</td>
            <td>${emp.apellidos}</td>
        `;

        tabla.appendChild(fila);
    });

    contenedor.appendChild(tabla);
}

fetch("empleado.json")
    .then(rpta => rpta.json())
    .then(datos => {

        datos.forEach(emp => {
            emp_json.push({
                dni: emp.dni,
                nombres: emp.nombres,
                apellidos: emp.apellidos
            });
        });

        mostrarTablaEmpleados();
    })
    .catch(error => console.log(error));

    document.getElementById('mostrarEmp').addEventListener('click', () => {
    mostrarTablaEmpleados();
});


let bol_json = [];

function mostrarTablaBoletos() {
    const contenedor = document.getElementById('tablaBol');
    contenedor.innerHTML = '';

    let tabla = document.createElement('table');
    tabla.border = "1";

    tabla.innerHTML = `

<tr>
    <th>N° Boleto</th>
    <th>Fecha Emisión</th>
    <th>Fecha Viaje</th>
    <th>Hora</th>
    <th>Asiento</th>
    <th>Origen</th>
    <th>Destino</th>
    <th>Valor</th>
    <th>DNI Pasajero</th>
    <th>DNI Empleado</th>
</tr>`;

    bol_json.forEach(bol => {

        let fila = document.createElement('tr');

fila.innerHTML = `
    <td>${bol.numero_boleto}</td>
    <td>${bol.fecha_emision}</td>
    <td>${bol.fecha_viaje}</td>
    <td>${bol.hora_viaje}</td>
    <td>${bol.asiento}</td>
    <td>${bol.origen}</td>
    <td>${bol.destino}</td>
    <td>${bol.valor}</td>
    <td>${bol.dni_pasajero}</td>
    <td>${bol.dni_empleado}</td>
`;

        tabla.appendChild(fila);
    });

    contenedor.appendChild(tabla);
}

fetch("boleto.json")
    .then(rpta => rpta.json())
    .then(datos => {

        datos.forEach(bol => {
            bol_json.push({
                numero_boleto: bol.numero_boleto,
                fecha_emision: bol.fecha_emision,
                fecha_viaje: bol.fecha_viaje,
                hora_viaje: bol.hora_viaje,
                asiento: bol.asiento,
                origen: bol.origen,
                destino: bol.destino,
                valor: bol.valor,
                    dni_pasajero: bol.dni_pasajero,
    dni_empleado: bol.dni_empleado
            });
        });

        mostrarTablaBoletos();
    })
    .catch(error => console.log(error));

    document.getElementById('mostrarBol').addEventListener('click', () => {
    mostrarTablaBoletos();
});



    document.getElementById('guarPas').addEventListener('click', () => {

    const pasajero = {
        dni: document.getElementById("dni").value,
        nombre: document.getElementById("nombre").value,
        apellido: document.getElementById("apellido").value,
        direccion: document.getElementById("direccion").value,
        razon: document.getElementById("razon").value,
        ruc: document.getElementById("ruc").value
    };
pas_json.push(pasajero);
});

document.getElementById('guarEmp').addEventListener('click', () => {
        const empleado = {
        dni: document.getElementById("dniEmpleado").value,
        nombres: document.getElementById("nombreEmpleado").value,
        apellidos: document.getElementById("apellidoEmpleado").value,
       

    };
 emp_json.push(empleado);
});

document.getElementById('guarBol').addEventListener('click', () => {
    const boleto = {
    numero_boleto: document.getElementById("numero").value,
    fecha_emision: document.getElementById("emision").value,
    fecha_viaje: document.getElementById("viaje").value,
    hora_viaje: document.getElementById("hora").value,
    asiento: document.getElementById("asiento").value,
    origen: document.getElementById("origen").value,
    destino: document.getElementById("destino").value,
    valor: document.getElementById("valor").value,

    dni_pasajero: document.getElementById("dniPasajeroBol").value,
    dni_empleado: document.getElementById("dniEmpleadoBol").value
};

bol_json.push(boleto);
     
});

/*
fetch('empleado.json')
.then((rpta) => {
    return rpta.json();
})
.then((datos) => {
    let salida = "";
    datos.forEach(emp => {
        salida += `<p>Nombre: ${emp.nombres}</p>`;
    });
    document.getElementById("result_emp").innerHTML = salida;
})
.catch((e) => {
    alert(`Error al leer \n${e}`);
});

fetch('boleto.json')
.then((rpta) => {
    return rpta.json();
})
.then((datos) => {
    let salida = "";
    datos.forEach(bol => {
        salida += `<p>Origen: ${bol.origen} <br> Pasajero: ${bol.pasajero_id}</p>`;
    });
    document.getElementById("result_bol").innerHTML = salida;
})
.catch((e) => {
    alert(`Error al leer \n${e}`);
});
*/