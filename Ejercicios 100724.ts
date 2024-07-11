//1. Escribir un programa que muestre por pantalla la cadena ¡Hola Mundo!

console.log("¡Hola Mundo!");

/*2. Escribir un programa que almacene la cadena ¡Hola Mundo! en una variable 
y luego muestre por pantalla el contenido de la variable.*/

let helloWord:string = "¡Hola Mundo!";
console.log(helloWord);

/*3. Escribir un programa que pregunte el nombre del usuario  y después de que el 
usuario lo introduzca muestre por pantalla la cadena ¡Hola !, donde es el nombre q
ue el usuario haya introducido.*/

let nombre = prompt("¿Cuál es tu nombre?");
console.log(`¡Hola, ${nombre}! `);



/*4. Una juguetería tiene mucho éxito en dos de sus productos: payasos y muñecas. 
Suele hacer venta por correo y la empresa de logística les cobra por peso de cada paquete
 así que deben calcular el peso de los payasos y muñecas que saldrán en cada paquete a demanda.
  Cada payaso pesa 112 g y cada muñeca 75 g. Escribir un programa que lea el número de payasos 
  y muñecas vendidos en el último pedido y calcule el peso total del paquete que será enviado.*/

let numPayasos:number = 0;
let numMunecas:number = 0;

numPayasos = parseInt(prompt("Ingrese la cantidad de payasos: ") ?? "0");
numMunecas = parseInt(prompt("Ingrese la cantidad de muñecas: ") ?? "0")

console.log(`El peso del envio total de los productos es el siguiente,
 para ${numPayasos} Payasos: ${numPayasos*112} gramos, para ${numMunecas} Muñecas: ${numMunecas*75} gramos, 
 el total es: ${numPayasos*112+numMunecas*75}`);

//5. Introducir un numero entero de mínimo un digito (1) y máximo 3 (999) y dividir en unidad, decena y centenas, imprimir cuantas unidades tiene, cuantas decenas y cuantas centenas
let numeroEntero = prompt("Ingrese un numero mínimo de (1) digito y máximo 3 (999): ") ?? "0";
if(numeroEntero.length <= 999){


let calculoUnidad = (parseInt(numeroEntero)%10);
let calculoDecenas = ((parseInt(numeroEntero) - calculoUnidad)%100)/10;
let calculoCentena = (parseInt(numeroEntero) - calculoDecenas*10)/100;


console.log(`La cifra "${numeroEntero}" contiene "${calculoCentena}" centenas, "${calculoDecenas}" decenas, y "${calculoUnidad}" unidades`);
}

 /* 6. Escribir un programa que pregunte al usuario por el número de 
horas trabajadas y el coste por hora. Después debe mostrar por pantalla 
la paga que le corresponde. si la cantidad es mayor a 200 debe pagar las 
que van de 201 en adelante con un 20% adicional al precio por hora
*/ 

// Datos ingresados, horas: 110, costo: 20............ horas:230, costos

let horasTrabajadas:number ;
let costoPorHora:number;
let horasExtras: number = 0;
let horasExtrasTotal: number = 0;
let total;
horasTrabajadas = parseFloat(prompt("Ingrese las horas trabajadas: ") ?? "0");
costoPorHora = parseFloat(prompt("Ingrese el costo por hora: ") ?? "0");

if(horasTrabajadas > 200){
horasExtras = ( horasTrabajadas - 200)
horasExtrasTotal = horasExtras * costoPorHora * 1.20;
total = (costoPorHora * horasTrabajadas) + horasExtrasTotal;
console.log(`Has acomulado un ingreso de ${horasExtrasTotal} en horas extras`)
} else{ total = costoPorHora * horasTrabajadas;}


console.log(`El detalle es el siguiente:
Horas trabajadas total: ${horasTrabajadas},
Horas extras trabajadas: ${horasExtras},

Costo por hora: ${costoPorHora},

Ingreso horas normales: ${costoPorHora * horasTrabajadas},
Ingreso horas extras: ${horasExtrasTotal},

Total: ${total}
 `);



