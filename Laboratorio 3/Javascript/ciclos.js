// while

let contador = 0;
while(contador < 10){
    console.log(contador);
    contador++;
}
console.log("Fin del ciclo while");

// Do while

 let conteo = 0;

 do{
    console.log(conteo);
    conteo++;
 }while (conteo < 3);
 console.log("Fin del ciclo  do while");

 //for

 for(let contando = 0;contando <= 10 ;contando++){
    console.log(contando)
 }
 console.log("Fin del ciclo de For");

 // Palabra reservada breka

 for(let i = 0 ; i <= 10; i++){
    if(i != 8){
        console.log(i);
    }else{
        console.log("Break")
        break;
    }
 }

 // Palabra reservada Continue

 for(let i = 0 ; i <= 10; i++){
    if(i != 8){
        console.log(i);
    }else{
        continue; // Saltea la siguiente interaccion
        console.log("Break")
        break;
    }
 }
 console.log("  º")

 // Etiquetas Labels