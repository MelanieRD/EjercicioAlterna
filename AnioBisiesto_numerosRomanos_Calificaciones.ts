/**
 * Un año bisiesto es un año que tiene un día adicional,
 *  el 29 de febrero, para mantener nuestros calendarios en línea con el tiempo astronómico. 

Realizar un programa que determine si un año es bisiesto o no, de acuerdo a los siguientes criterios:
Si el año es divisible por 4, entonces es un año bisiesto, 
excepto:Si el año es divisible por 100, entonces no es un año bisiesto, 
a menos que:El año también sea divisible por 400, en cuyo caso sí es un año bisiesto.

Si un año es divisible por 4 pero no por 100, es bisiesto.
 Si un año es divisible por 100 pero también por 400, es bisiesto. En todos los demás casos, el año no es bisiesto.

Por ejemplo:
El año 2000 fue bisiesto porque es divisible entre 4, 100 y 400.
El año 1900 no fue bisiesto porque, aunque es divisible entre 4 y 100, no es divisible entre 400.
El año 2020 fue bisiesto porque es divisible entre 4 pero no entre 100.
Nota: Para identificar si un número es divisible por otro, se utiliza el operador de módulo (%).
 * 

let anio:number = parseInt(prompt("Ingrese el anio a verificar ") ?? "0");
if(anio%4 === 0 && anio%100 != 0){ console.log(`El ${anio},es bisiesto`);} 
else if(anio%4 === 0 && anio%100 === 0 && anio%400 === 0){console.log(`El ${anio},es bisiesto`);}
else if(anio%100 === 0 && anio%400 === 0){console.log(`El ${anio},es bisiesto`);} else{console.log(`El ${anio}. NO es bisiesto`);
}
 */



/*
scriba un programa que reciba un número entre 0  y 100 e imprima en la consola el equivalente en letras de esa calificación.

La escala que utilizamos es la siguiente:
> 90 -> A
80-89 -> B
70-79 -> C
60-69 -> D
< 60 -> F

Ejemplo: 
Si la calificación es un 95, el programa debe imprimir "La calificación en letras es una A"
Si la calificación es un 75, el programa debe imprimir "La calificación en letras es una C"
Si la calificación es un 50, el programa debe imprimir "La calificación en letras es una F"


let calif:number = parseInt(prompt("Ingrese un numero desde 0 hasta 100") ?? "0");

if(calif >= 0 && calif <= 100){

if(calif>=90){ console.log("A")} 
else if(calif>= 80 && calif<90){console.log("B")}
else if(calif>= 70 && calif<80){console.log("C")}
else if(calif>= 60 && calif<70){console.log("D")}
else if(calif<60){console.log("F")}
} else{console.log("Ingrese una calificación valida, Solo numeros dede 0 al 100");}

*/


/* Realizar un programa en TypeScript que convierta de Decimal a Romano.

Ejemplo:

Input: 1945
Output: "El numero en romano es MCMXLV" */

let numeroConvertir:number = parseInt(prompt("Ingrese el numero en decimal del (1 al 3999) a convertir rn Romano")?? "0");
const numeroOb = numeroConvertir;
let unidad = numeroConvertir%10;
let decena = (numeroConvertir-unidad) %100;
let centena = numeroConvertir - unidad - decena;
let numeroRomanoCompleto:Array<string> = [];


if(numeroConvertir <= 3999 && numeroConvertir>= 1){
while (numeroConvertir > 0) {

if( centena > 0){ convertirCentena(centena);}
else if(decena > 0){ convertirDecena(decena);}
else if(unidad > 0){convertirUnidad(unidad);}

} 

console.log(`El numero ${numeroOb} en romano es: ${numeroRomanoCompleto.join("")}`)

} else{console.log("El numero ${numeroConvertir} no cumple con el rango establecido");}



function convertirCentena(centen:number){
if(centena < 400){
  centena = centen - 100;
  numeroConvertir = numeroConvertir - 100;
  numeroRomanoCompleto.push("C");
 } else if ( centen === 400){
  centena = centen - 400;
  numeroConvertir = numeroConvertir - 400;
  numeroRomanoCompleto.push("CD");
 } else if(centen === 500 || centen>500 && centen<900){
    centena = centen - 500;
      numeroConvertir = numeroConvertir - 500;
  numeroRomanoCompleto.push("D");
 }  else if(centen === 900){
    centena = centen - 900;
      numeroConvertir = numeroConvertir - 900;
  numeroRomanoCompleto.push("CM");
 } else if(centen>= 1000){
    centena = centen - 1000;
      numeroConvertir = numeroConvertir - 1000;
  numeroRomanoCompleto.push("M");
 }

}


function convertirDecena(decen:number){
  if(decen <= 30){
      decena = decen - 10;
        numeroConvertir = numeroConvertir - 10;
      numeroRomanoCompleto.push("X");
 } else if(decen === 40){ 
    numeroConvertir = numeroConvertir - 40;
  decena = decen - 40;
   numeroRomanoCompleto.push("XL");

 } else if(decen >= 50){
    decena = decen - 50;
      numeroConvertir = numeroConvertir - 50;
   numeroRomanoCompleto.push("L");
 } else if(decen === 90){
    numeroConvertir = numeroConvertir - 90;
    decena = decen - 90;
   numeroRomanoCompleto.push("XC");
 }

  }

  function convertirUnidad(unida:number){
      if(unida >= 1 && unida < 4){
        unidad = unida - 1;
            numeroConvertir--;

        numeroRomanoCompleto.push("I");
        
      } else if(unida === 4){
         unidad = unida - 4;
             numeroConvertir = numeroConvertir - 4;

        numeroRomanoCompleto.push("IV");

      } else if(unida >= 5 && unida < 9){
         unidad = unida - 5;
             numeroConvertir = numeroConvertir - 5;

        numeroRomanoCompleto.push("V");

      } else if(unida === 9){
         unidad = unida - 9;
             numeroConvertir = numeroConvertir - 9;

        numeroRomanoCompleto.push("IX");

      }

  
}

