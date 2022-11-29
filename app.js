// variables //
let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");
let email = prompt("Ingrese un mail");
let contraseña = prompt ("Ingrese una contraseña");
let formaPago = prompt ("defina la forma de pago");


alert(`${nombre} ${apellido} Bienvenido a Bolivar Vip`);
alert(`${nombre} ${apellido} Inicio sesion`);
alert(`Su email es ${email} y su contraseña es ${contraseña}`);

let producto = prompt (`Elija un producto:
1:Respaldo Lumbar
2:Masajeador Lumbar
3:Blanqueador Dental
4:Cepillo biodegradable
`);

switch (producto){
    case "1":
        alert("Su precio es de $1500. Precio con IVA incluido")
        break;
    case "2":
        alert("Su precio es de $5000. Precio con IVA incluido")
        break;
    case "3":
        alert ("Su precio es de $500. Precio con IVA incluido")
        break;
    case "4":
        alert ("SU precio es de $800. Precio con IVA incluido" )
        break;
}

function solicitarMonto() {
    let monto = parseInt(prompt("ingresar cantidad a pagar"));
    console.log("El monto a pagar es = " + monto);
    return monto;
}
function solicitarCuotas() {
    let cuotas = parseInt(prompt("En cuantas cuotas quiere pagar (de 1 a 12)"));
    
    return cuotas;
}
function solicitarCantidadPrestamos() {
    let prestamos = parseInt(
    prompt("Cuantos prestamos desea solicitar (de 1 a 5)")
    );
    return prestamos;
    }
    
    function dividir(monto, cuotas) {
    let resultado = monto / cuotas; 
    return resultado;
    }
    
    let prestamos = solicitarCantidadPrestamos();
    if (!isNaN(prestamos) && 5 >= prestamos && prestamos > 0) {
    let i = 0;
    
    let iterar = true;
    
    while (i < prestamos && iterar) {
    i++;

    alert("Ingrese los datos del prestamo nro " + i + " de " + prestamos);
    let monto = solicitarMonto();
    if (isNaN(monto)) {
        alert("monto invalido");
        iterar = false;
    } else {
        let cuotas = solicitarCuotas();
        if (!isNaN(cuotas) && 12 >= cuotas && cuotas > 0) {
        let continuar = confirm("Desea el prestamo en " + cuotas + " cuotas?");
        if (continuar) {
            let valorCuota = dividir(monto, cuotas);
            alert("Usted debe pagar " + cuotas + " cuotas de " + valorCuota);
        } else {
            alert("Pago cancelado");
            
            iterar = false;
        }
        } else {
        alert("cantidad de cuotas invalidas");
    
        iterar = false;
        }
    }
    }
}
  