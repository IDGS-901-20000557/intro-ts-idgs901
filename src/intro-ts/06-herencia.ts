class Persona5{
    protected nombre:string;
    protected edad:number;
    constructor(nombre:string,edad:number){
        this.nombre=nombre;
        this.edad=edad;
    }
    imprimir(){
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Nombre: ${this.edad}`);
    }
}
class Empleado extends Persona5{
    private sueldo:number;
    constructor(nom:string, edad:number, sueldo:number){
        super(nom,edad);
        this.sueldo=sueldo;
    }
    imprimir(){
        super.imprimir();
        console.log(`Sueldo: ${this.sueldo}`);
    }
}
const persona6=new Persona5('Claudio',21);
persona6.imprimir();
const empleado=new Empleado('Claudio2',22,2000);
empleado.imprimir();