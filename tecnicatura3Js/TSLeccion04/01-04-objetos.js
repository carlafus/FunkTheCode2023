let x = 10; //variable de tipo primitiva
console.log(x.length);
console.log("tipos primitivos");
//objeto
let persona = {
    nombre: 'carlos',
    apellido: 'gil',
    email: 'cgil@gmail.com',
    edad: 30,
    nombreCompleto: function(){ // metodo a funcion en JavaScript
        return this.nombre+' '+this.apellido;
    }
}

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.email);
console.log(persona.edad);
console.log(persona);
console.log(persona.nombreCompleto());

console.log("ejecutando con un objeto");
let persona2 = new Object(); // debe crear un nuevo objeto en memoria
persona2.nombre = 'juan';
persona2.direccion = 'salada 13';
persona2.telefono = '549248756'
console.log(persona2.telefono);

console.log("creamos un nuevo objeto");
console.log(persona['apellido']); // accedemos como si fuera un arreglo 

console.log("usamos el ciclo for in")
//for in y accedemos al objeto como si fuera un arreglo
for(propiedad in persona){
    console.log(propiedad)
    console.log(persona[propiedad]);
}

console.log("cambiamos y eliminamos un error");
persona.apellida = 'Betancud'; //cambiamos dinamicamente el valor de un objeto
delete persona.apellida; // eliminamos el error
console.log(persona);

//distintas formas de imprimir un objeto
//numero 1: la mas sencilla: concatenar cada valor de cada propiedad
console.log("distintas formas de imprimir un objeto: forma 1")
console.log(persona.nombre+', '+persona.apellido);

//numero 2: a travez del ciclo for in
console.log("distintas formas de imprimir un objeto: forma 2")
for(nombrePropiedad in persona){
    console.log(persona[nombrePropiedad])
}

//numero 3: la funcion object.values()
console.log("distintas formas de imprimir un objeto: forma 3")
let personaArray = Object.values(persona);
console.log(personaArray);

//numero 4: tilizaremos el metodo JSON.stringify
console.log("distintas formas de imprimir un objeto: forma 4")
let personaString = JSON.stringify(persona);
console.log(personaString);
