fetch('pasajero.json')
.then((rpta) => {
    return rpta.json();
})
.then((datos) => {
    let salida = "";
    datos.forEach(pas => {
        salida += `<p>Nombre: ${pas.nombres}</p>`;
    });
    document.getElementById("resultado").innerHTML = salida;
})
.catch((e) => {
    alert(`Error al leer \n${e}`);
});