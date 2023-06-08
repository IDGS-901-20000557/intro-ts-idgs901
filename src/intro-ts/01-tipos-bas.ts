/*
    TypeScript: lenguaje con tipos estaticos que permite detectar
    errores de asignación en tiempo de desarrollo 
*/

var num1 = 23;
let num2 = 'rcr';
const num3 = 34;


let version:number =2.2;
version=3.3;

let nombre:string='Claudio';

let activo:boolean=true;

let matricula:number | string | boolean=1234;
matricula='123abc';
matricula=true;

let vector:number[]=[1,2,3,4,5];
console.log(vector);

