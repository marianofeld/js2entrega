let nombre = prompt("Cual es tu nombre?")

let menu = [{ nombre: "hamburguesa combo A", precio: 1500, vegana: false },
{ nombre: "hamburguesa combo B", precio: 1900, vegana: false },
{ nombre: "hamburguesa veggie", precio: 1850, vegana: true },
{ nombre: "hamburguesa combo C", precio: 2000, vegana: false },
{ nombre: "empanada de pollo", precio: 150, vegana: false },
{ nombre: "empanada de verdura", precio: 150, vegana: true }
]

let pregunta
let opcionVegano
let opcionCarne
let precio = 0


function array(array) {
    for (let index = 0; index < array.length; index++) {
        alert("opcion " + (index + 1) + " " + array[index].nombre + " el precio es " + array[index].precio)
        if (index == array.length - 1) {
            opcionVegano = prompt("Que opcion deseas pedir")
            precio = array[opcionVegano - 1].precio + precio
        }
        console.log(precio)
    }
}

do {
    pregunta = Number(prompt("Indique\nopcion 1\nsi desea productos veganos \nopcion 2\nsi desea productos con carne\nopcion 3 \nfinalizar la compra"))
    let vegano = menu.filter((producto) => (producto.vegana == true))
    let carne = menu.filter((producto) => (producto.vegana == false))
    if (pregunta == 1) {
        array(vegano)
    }
    else if (pregunta == 2) {
        array(carne)
    }

} while (pregunta != 3)

if (pregunta == 3) {
    alert(nombre + " el precio a pagar es " + precio)
}

