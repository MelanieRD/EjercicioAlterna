const energiaConsumidaEnKiloWatts: number = Number.parseInt(prompt('Introduce los kilowatts') ?? '0');
const hasta200 = 200;
const valor100 = 100;

const precio200 = 6.05;
const precio300 = 8.59;
const precio400 = 12.89;
const precio401oMas = 13.09;

let totalAPagar = 0;

// Desestructurando el número de la energia consumida en centenas y decenas. 

let decenas = energiaConsumidaEnKiloWatts%100;
let centenas = (energiaConsumidaEnKiloWatts - decenas)/100; 

console.log( `utilizando las centenas: ${centenas} y decenas con unidades: ${decenas} del numero de energia consumida`);


if( centenas > 2){

   // calcula los primero 200
    totalAPagar = hasta200* precio200;
    centenas -= 2;
      console.log("Precio de los primeros 200 es: " + totalAPagar );
    
    // si todavia centena es mayor 1 es porque la cantidad de watts ronda entre 300;
    if(centenas >= 1){

            totalAPagar += valor100*precio300;
            centenas--;
            console.log(`Precio de los 100watts despues de los 200 es: ${valor100*precio300}`)
            console.log(`total del excedente mas el calculo de los 200: ${totalAPagar}`)

                        if(centenas === 0){ 
                        
                        // le summo las decenas al total ya que no hay mas centenas, no pasa los 300 watts;   
                         totalAPagar += decenas*precio300; 
                         console.log(`precio de los  ${decenas} watts restantes es ${decenas*precio300} en total es: ${totalAPagar}`)            
                         }}

   
            // si todavia centena es mayor 1 es porque la cantidad de watts ronda entre 400;  
            if(centenas >= 1){
               totalAPagar += valor100*precio400;
               centenas--;
                console.log(`Precio de los 100 despues de los 400 es: ${valor100*precio400}`)
                console.log(`total del excedente de 200 y 300 mas el excedente 400: ${totalAPagar}`)

                        if(centenas === 0){ 
                        // le summo las decenas al total ya que no hay mas centenas, no sobre pasa los 500 watts;
                         totalAPagar += decenas*precio400; 
                         console.log(`precio de los  ${decenas} watts restantes es ${decenas*precio400} en total es: ${totalAPagar}`)
                         }}


            if(centenas >= 1){
            
            console.log(`-----------el numero de consumo pasa de 500------------`)
             totalAPagar += (100*centenas + decenas)*precio401oMas;

            //aqui no resto la centena porque ya solo hay que calcular todo desde aqui con el mismo valor
            //multiplico las centenas por 100, porque necesito el valor total y asi saber el restante completo
            console.log(`El restante excedente de 500 es: ${centenas*100 + decenas} el costo es: ${(100*centenas + decenas)*precio401oMas}`)
            console.log(`TOTAL del excedente de 200, 300, 400 mas el excedente faltante despues de 500: ${totalAPagar}`)

              }
             console.log(totalAPagar);

} else if(energiaConsumidaEnKiloWatts < 200){ totalAPagar = energiaConsumidaEnKiloWatts * precio200;
 console.log(`Total a pagar de ${energiaConsumidaEnKiloWatts} watts: ${totalAPagar}`);
}


