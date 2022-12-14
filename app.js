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
let opcion;
let opcion1;
let pel;
let menuSalas = "" ;
let pelist = "";
let cartelera;

let pelicula = "";

const peliculas = [
    {},
    {id: 1, nombre : "Advenger", clasificacion: "ATP", duracion : "120min", tipo : "3D"}, 
    {id: 2 ,nombre : "Avatar", clasificacion: "ATP", duracion : "90min", tipo : "4D"},
    {id: 3 ,nombre : "Tiburon", clasificacion: "mayores 12", duracion : "90min", tipo : "2D"},
    {id: 4 ,nombre : "Freddy", clasificacion: "mayores 16", duracion : "120min", tipo : "2D"},
    {id: 5, nombre : "Jurasic Park", clasificacion: "mayores 12", duracion : "160 min", tipo : "3D"},
]

// con esto podemos ver que hay en el array de peliculas, pero toda la info completa
for(let i=0; i<=4; i++ ){
    console.log(peliculas[i]);
}



// aca hacemos un listado del nombre de las peliculas
function Carteleras(){
    let namelist = [];
    let name = "";
    cartelera = confirm("Â¿Quiere saber que peliculas tenemos?");
    if (cartelera == true){
        for (const cartelera of peliculas) {
                console.log(cartelera.nombre);
                name = cartelera.nombre;
                namelist.push(name);
                pelist = namelist; // lo usamos para mas adelante en el alert si es true

        }
}else{
    alert("Muchas gracias!");
    
    }
    
}
Carteleras();


if(cartelera == true ){
    alert( "Las peliculas disponibles son: " + pelist);
}


// aca preguntamos una y otra vez en que sala se proyecta hasta que ingrese 6 (salir)

while (menuSalas!=6){


// con esto nos muestra el index en donde se encuentra el dato que elegimos.
menuSalas = prompt(`Elija una opcion para saber en que sala se proyecta
1:Advenger
2:Avatar
3:Tiburon
4:Freddy
5:Jurasic Park
6:Salir `);




if(menuSalas===1){
    pel = "Advenger";
}else if(menuSalas===2){
    pel = "Avatar";
}else if(menuSalas===3){
    pel = "Tiburon";
}else if(menuSalas===4){
    pel = "Freddy";
}else if(menuSalas===5){
    pel = "Jurasic Park";
}




let objeto = peliculas.findIndex(property => {
    return property.nombre === pel ;
});
console.log(objeto);
}









// solo funciona la opcion 1 del filtro 

function menuInicio() {
    let menu = "FILTRO DE PELICULAS. Ingrese una opcion:\n1. Clasificacion\n2. Duracion\n3. Tipo\n4. Salir\n";
    opcion = prompt(menu);
    menu2(opcion)
}

menuInicio();


function menu3() {
    menu2(opcion)
}


console.log(opcion)
function menu2 (opcion) {
let pelicula = ""
switch (opcion) { // solo funciona la opcion 1, 4 y 5
    case "1":
        let menu2 = "Ingrese una opcion\n1. ATP\n2. Mayores de 12\n3. Mayores de 16\n4. Menu anterior\n5. Salir\n";
        opcion1 = prompt(menu2);
        switch (opcion1) {
            case "1":
                filtro_clas = "ATP";
                pelicula = peliculas.filter(pelicula => pelicula.clasificacion === filtro_clas);
                console.log(pelicula);
                break;
            case "2":
                filtro_clas = "mayores 12";
                pelicula = peliculas.filter(pelicula => pelicula.clasificacion === filtro_clas);
                console.log(pelicula);
                break;
            case "3":
                filtro_clas = "mayores 16";
                pelicula = peliculas.filter(pelicula => pelicula.clasificacion === filtro_clas);
                console.log(pelicula);
                break;
            case "4":
                menuInicio(); //vuelve al menu anterior
                break;
            case "5": 
            break;
            default:
                    alert("No es una opcion valida");
                    menu3(); //al ser una opcion no valida, vuelve a preguntar todo de nuevo
                    
        }
        
}
}