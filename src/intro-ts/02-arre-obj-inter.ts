
let vector1:Array<number>=[9876];
vector1.push(10);
vector1[1]=22;
for(let tem of vector1){
    console.log(tem);
}


let tem:(number|string)[]=[];
tem.push('mario',10);
for(let i of tem){
    console.log(i);
}

interface Alumno{
    matricula?:number;
    nombre:string;
    edad:number;
    email:string
}

const alumno:Alumno={
    nombre: 'Claudio',
    edad: 22,
    email:'claudioracoon@hotmail.com'
}

console.table(alumno);