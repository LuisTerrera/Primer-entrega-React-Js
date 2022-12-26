

let carrito = []
let resumen = []
const producto1 =  {id: 1, nombre : "Respaldo Lumbar", precio: 1500};
const producto2 =  {id: 2, nombre : "Masajeador Cervical", precio: 5000};
const producto3 =  {id: 3, nombre : "Blanqueador Dental", precio: 500};
const producto4 =  {id: 4, nombre : "Cepillo Biodegradable", precio: 800};



let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");
let email = prompt("Ingrese un mail");
let contraseña = prompt ("Ingrese una contraseña");
alert(`${nombre} ${apellido} Bienvenido a Bolivar Vip`);
alert(`${nombre} ${apellido} Inicio sesion`);
alert(`Su email es ${email} y su contraseña es ${contraseña}`);

function elegirProducto(){
    do { 
            let elegir = prompt(`Elija un producto:
            1: ${producto1.nombre}
            2: ${producto2.nombre}
            3: ${producto3.nombre}
            4: ${producto4.nombre}
            `);
            if (elegir ==""){
                alert("No eligió ningun producto")
            }else if (elegir === "1") {
                alert(`Eligió  ${producto1.nombre}. Su precio es $${producto1.precio}`)
                resumen.push  (`
                ${producto1.nombre}. Precio: $ ${producto1.precio}`)
                carrito.push(producto1)
            } else if (elegir === "2") {
                alert(`Eligió ${producto2.nombre}. Su precio es $${producto2.precio}`)
                resumen.push  (`
                ${producto2.nombre}. Precio: $ ${producto2.precio}`)
                carrito.push(producto2)
            } else if (elegir === "3") {
                alert(`Eligió ${producto3.nombre}. Su precio es $${producto3.precio}`)
                resumen.push  (`
                ${producto3.nombre}. Precio: $ ${producto3.precio}`)
                carrito.push(producto3)
            } else if (elegir === "4") {
                alert(`Eligió ${producto4.nombre}. Su precio es $${producto4.precio}`)
                resumen.push  (`
                ${producto4.nombre}. Precio: $ ${producto4.precio}`)
                carrito.push(producto4)
            }
            seguir = prompt ("Desea elegir otro producto si/no?")
        }while(seguir === "si")
    }

    function resumenCarrito(){
        alert (`Los Productos elegidos son:
        ${resumen}`)
    }

    function totalCarrito(){
        let resultado = carrito.reduce ((acum,p)=>{
            return acum + p.precio
        },0)
        alert (`Total a pagar es: $${resultado}`)

    }
    elegirProducto()
    resumenCarrito()
    totalCarrito()