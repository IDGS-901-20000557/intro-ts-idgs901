// Este concepto permite acceder a las propiedades de un objeto sin utilizar la jerarquia, es decir
// el nombre del objeto, sus propiedad, etc

//Este seria sin el concepto desestruturacion:
interface Alumno1{
    matricula1:number;
    nombre:string;
    edad:number;
    correo:string;
    grupo:Grupo;
}

interface Grupo{
    grupo:string;
    year:number;
}

const alumno2:Alumno1={
    matricula1:20000557,
    nombre:'Claudio',
    edad: 21,
    correo:'claudioracoon@hotmail.com',
    grupo:{
        grupo:'idgs',
        year:2023
    }
}

//Es necesario la comilla rara para que se muestre el impresion del objeto
console.log(`la matricula es: ${alumno2.matricula1}`);
console.log(`la matricula es: ${alumno2.nombre}`);
console.log(`la matricula es: ${alumno2.grupo.year}`);


//Este seria con el concepto dedesestrucuracion:
const{matricula1, nombre:nom,grupo:xx}=alumno2;
const{grupo,year:anio}=xx

console.log(`la matricula es: ${matricula1}`);
console.log(`el Nombre es: ${nom}`);
console.log(`el grupo es: ${grupo}`);
console.log(`el año del grupo es: ${anio}`);


//Forma normal de referenciar arreglos
const gps:string[]=['IDGS','IEVN','REDES'];
console.log(`grupo 1: ${gps[0]}`);
console.log(`grupo 2: ${gps[1]}`);
console.log(`grupo 3: ${gps[2]}`);

//desestructuracion de arreglos
const [a,,b]=gps;
console.log(`grupo 1:  ${a}`);
console.log(`grupo 2:  ${gps[1]}`);
console.log(`grupo 3:  ${b}`);