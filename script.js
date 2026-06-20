fetch('pasajero.json')
.then((rpta) => {
    return rpta.json();
})
.then((datos) => {
    let salida = "";
    datos.forEach(pas => {
        salida += `
                    <p>DNI: ${pas.P1.dni}</p>
                    <p>Nombre: ${pas.P1.nom}</p>
                    <p>Apellido: ${pas.P1.ape}</p>`;
    });
    document.getElementById("result_pas").innerHTML = salida;
})
.catch((e) => {
    alert(`Error al leer \n${e}`);
});

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