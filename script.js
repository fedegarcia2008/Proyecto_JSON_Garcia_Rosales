fetch('pasajero.json')
.then((rpta) => {
    return rpta.json();
})
.then((datos) => {
    let salida = "";
    datos.forEach(pas => {
        salida += `<p>Nombre: ${pas.nombres}</p>`;
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