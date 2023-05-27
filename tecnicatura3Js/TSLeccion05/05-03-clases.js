//let persona3 = new Persona("carla", "ponce"); esto no se debe hacer

class Persona{ // calse padre
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre(){
        return this._nombre
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

    nombreCompleto(){
        return this._nombre+" "+this._apellido;
    }
    //SOBREESCRIBIENDO EL METODO DE LA CLASE PADRE(OBJETC)
    toString(){ // REGRESA UN STRING
        //SE APLICA EL POLIMORFISMO QUE SIGNIFICA = MULTIPLES FORMAS EN TIEMPO EJECUCION
        //EL METODO QUE SE EJECUTA DEPENDE SI ES UNA REFERENCIA DE TIPO PADRE O HIJA
        return this.nombreCompleto();
    }
}

class Empleado extends Persona{ // clase hija
constructor(nombre, apellido, departamento){
    super(nombre, apellido);
    this._departamento = departamento;
}

    get departamento(){
        return this._departamento;
    }
    
    set departamento(departamento){
        this._departamento = departamento;
    }

    //sobreescritura 
    nombreCompleto(){
        return super.nombreCompleto()+", "+this._departamento;
    }
}

let persona1 = new Persona("Martin","Perez" );
console.log(persona1.nombre);
persona1.nombre = "juan Carlos";
console.log(persona1.nombre);
//console.log(persona1)

let persona2 = new Persona("Carlos","Lara" );
console.log(persona2.nombre);
persona2.nombre = "Maria Laura";
console.log(persona2.nombre);
//console.log(persona2)

let Empleado1 =  new Empleado("Maria", "Gimenez", "sistemas");
console.log(Empleado1);
console.log(Empleado1.nombreCompleto());

console.log(Empleado1.toString());
console.log(persona1.toString());



