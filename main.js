const listaProductos = [
    {
        id: 1,
        nombre: "Tijera",
        precio: 500
    },
    {
        id: 2,
        nombre: "Boligoma",
        precio: 250
    },
    {
        id: 3,
        nombre: "Regla",
        precio: 550
    },
    {
        id: 4,
        nombre: "Cuaderno",
        precio: 1500
    },
    {
        id: 5,
        nombre: "Lapicera",
        precio: 200
    },
]

// Pido que el usuario ingrese un ID.
let consultaUser = parseInt(prompt("Ingrese un ID del 1 al 5"));
let consultaUser2 = parseInt(prompt("Ingrese un segundo ID del 1 al 5, distinto al anterior"));

// Creo una funcion para sumar ambos precios
function sumaDePrecios (consultaUser, consultaUser2, listaProductos){

    // Creo dos variables vacias, una para guardar el valor de la suma y otro por si el usuario ingresa el mismo ID dos veces.
    let suma = 0;
    let mismoId = 0;

    // Recorro el Array de Objetos con el forEach comparando los id de los productos con los id ingresados por el usuario.
    listaProductos.forEach((producto) => {
        if (producto.id === consultaUser || producto.id === consultaUser2){
            // Si los ID son distintos, creo un contador para ir sumando en la primera y segunda vuelta los precios del producto.
            suma += producto.precio;
            // Creo un acumulador por si ambos ID ingresados son iguales.
            mismoId++; 
        }
        // Si encuentra dos ID iguales, la variable toma valor 1, y comparo además si ese ID es igual a algun id de productos.
        if (mismoId === 1 && producto.id === consultaUser2){
            // Al cumplirse, sumo ese segundo precio del ID 2 a la variable suma, que ya tiene como valor el precio del primer ID ingresado.
            suma += producto.precio;
        }
    });
    return suma;
}

let resultado = sumaDePrecios(consultaUser, consultaUser2, listaProductos);

console.log(`El precio total de los productos con id ${consultaUser} y ${consultaUser2} es de ${resultado} pesos`);