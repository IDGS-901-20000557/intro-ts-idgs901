
function sumar(a:number,b:number):void{
    console.log(a+b);
}

let num=sumar(12,3);
console.log(num);


function sumar2(a:number, b:number):number{
    return a+b;
}

function operasBas(n1:number, n2:number, n3:number=2):number{

    let tem = n1*n3;
    return tem;
}

console.log(operasBas(3,0,5));

interface Mascota{
    nombre:string;
    edad:number;
    mostrarEdad:()=>void;
}

function calculaEdad(mascota:Mascota, x:number):void{
    mascota.edad+=x;
    console.log(mascota);
    mascota.mostrarEdad();
}

const nuevaMascota:Mascota={
    nombre: "miau",
    edad: 3,
    mostrarEdad(): void{
        console.log('la edad es: '+this.edad);
    }
}

calculaEdad(nuevaMascota, 2);

const functSumar = function(n1:number, n2:number){
    return n1+n2;
}
console.log(functSumar(4,9));

//Parametros REST en funciones
function calcular2(...valores:number[]){
    let suma=0;
    for(let x=0; x<valores.length; x++){
        suma+=valores[x];
    }
    return suma;
}

console.log(calcular2(10,2,3,4));
console.log(calcular2(1,2));