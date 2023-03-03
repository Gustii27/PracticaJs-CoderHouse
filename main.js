// EJERCITACIÓN 1: SUMA DE PRODUCTOS INGRESADOS POR EL USUARIO

/*const listaProductos = [
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

console.log(`El precio total de los productos con id ${consultaUser} y ${consultaUser2} es de ${resultado} pesos`);*/

// EJERCITACIÓN 2: INGRESO A UN ARRAY DE NUEVOS CLIENTES

// Creo un array de objetos vacio para que se complete con una función a medida que el usuario ingresa datos.
/*const nuevosUsuarios = [{
}];

// Solicito al usuario cargar la información solicitada.
let userName = prompt("Ingrese su nombre");
let userApellido = prompt("ingrese su apellido");
let userEmail = prompt("Ingrese su correo electrónico");
let userMsg = parseInt(prompt("Ingrese su mensaje"));


// A traves de una función hago que al momento de encontrar un id genere un incremento automático.
function idUser(id){
    nuevosUsuarios.some(encontrado =>{
        encontrado.id === 1;
    return id++;    
    })
}*/

// Creo una variable global para que me sume solo los id.
/*let idCount = 0;

// Solicito al usuario cargar la información solicitada.
let userName = (prompt("Ingrese su nombre"));
let userApellido = (prompt("ingrese su apellido"));
let userMail = (prompt("Ingrese su correo electrónico"));
let userMsg = (prompt("Ingrese su mensaje"));

// Creo una clase constructora para que me vaya creando el registro de usuarios ingresados.
class Usuario {
    constructor(nombre, apellido, mail, msg) {
        this.id = ++idCount;
        this.nombre = nombre;
        this.apellido = apellido;
        this.mail = mail;
        this.msg = msg;
    }
}

// Asigno los valores ingresados por el usuario en un objeto para almacenar.
const usuario1 = new Usuario(userName, userApellido, userMail, userMsg, idCount)

console.log(usuario1);*/

// ALTERNATIVA UTILIZANDO ARRAY 

// Crear un array vacio para almacenar los usuarios
let usuarios = [];

// Variable global para llevar la cuenta del ultimo ID utilizado
let ultimoId = 0;

// Defino la clase Usuario
class Usuario {
    constructor(nombre, apellido, mail, msg, id) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.mail = mail;
        this.msg = msg;
        this.id = id;
    }
}

// Solicitar al usuario cargar la informacion solicitada.
let userName = (prompt("Ingrese su nombre"));
let userApellido = (prompt("Ingrese su apellido"));
let userMail = (prompt("Ingrese su correo electrónico"));
let userMsg = (prompt("Ingrese su mensaje"));

// Crear una instancia del objeto Usuario y asignarle un ID único
const usuario1 = new Usuario(userName, userApellido, userMail, userMsg, ++ultimoId);

// Agregar el nuevo usuario al array usuarios
usuarios.push(usuario1);

console.log(usuarios);
