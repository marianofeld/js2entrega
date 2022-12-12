// let nombre = prompt("Cual es tu nombre?")

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


do {
    let pregunta = Number(prompt("Indique\nopcion 1\nsi desea productos veganos \nopcion 2\nsi desea productos con carne\nopcion 3 \nfinalizar la compra"))
    let vegano = menu.filter((producto) => (producto.vegana == true))
    let carne = menu.filter((producto) => (producto.vegana == false))
    if (pregunta == 1) {
        vegano.forEach(alimento => {
            console.log(alimento.nombre + alimento.precio)
        });
        for (let index = 0; index <= vegano.length; index++) {
            alert("opcion " + (index + 1) + " " + vegano[index].nombre + " el precio es " + vegano[index].precio)
            if (index == vegano.length - 1) {
                let opcionVegano = prompt("Que opcion deseas pedir")
                precio = vegano[opcionVegano-1].precio + precio
            }

            // aca termina de pedir vegano

        }
        
    }else if (pregunta == 2) { 
            carne.forEach(alimento => {
                console.log(alimento.nombre + alimento.precio)
            });
            for (let index = 0; index <= carne.length; index++) {
                console.log("opcion " + (index + 1) + " " + carne[index].nombre + " el precio es " + carne[index].precio)
                if (index == carne.length - 1) {
                    let opcionCarne = prompt("Que opcion deseas pedir")
                    precio = carne[opcionCarne-1].precio + precio
                }
         }
        
         console.log(precio)
    }
            // aca termina de pedir carne
 } while (pregunta != 3)
 if (pregunta == 3 ) {
    alert("el precio a pagar es "+precio)
 }







// poner un alert el menu y que con 0 pidan una y asi y para agregar y al finalizar qeu sume el total