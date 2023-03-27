// CALCULADORA DE GASTOS DE COMPRA, CON POSIBILIDAD DE INGRESAR EL MONTO A GASTAR Y CON DEVOLUCION DE COMPROBANTE DE COMPRAS, DETALLANDO PRODUCTOS Y/O SERVICIOS Y TOTAL GASTADO.


// Entrada de datos

let valor_maximo = parseFloat(prompt("INGRESE EL LIMITE MAXIMO DE DINERO QUE DESEA GASTAR DE SU TARJETA"));
while (valor_maximo <=0){
    valor_maximo = parseFloat(prompt("MONTO INVALIDO! EL MISMO DEBE SER MAYOR A 0"))
}

let salida = "";
let gastos = 0;
let detalle = "";
let valor;

// Proceso de datos

while (gastos <= valor_maximo) {
    detalle = prompt("INGRESE EL NOMBRE DEL PRODUCTO O SERVICIO: O PRESIONE 'ESC' PARA SALIR");
    
    if (detalle.toUpperCase() == "ESC"){
        break;
    }

    valor = parseFloat(prompt("INGRESE EL VALOR DEL PRODUCTO O SERVICIO"));
    while (valor <=0){
        valor = parseFloat(prompt("CANTIDAD INVALIDA, VUELVA A INGRESARLA"))
    }
    salida += detalle + " $ " + valor + "\n";
    gastos += valor;
}

// Salida de datos

alert("DETALLE DE LA TARJETA: \n\n" + salida + "\nTOTAL: $ " + gastos);
alert("Total: " + gastos);