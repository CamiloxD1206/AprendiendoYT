// //funcion tipo flecha
// let nombre=prompt(`Inserta tu nombre en este espacio`);
// let apellido=prompt(`Inserta tu apellido en este espacio`);
// let flecha = (nomnbre,apellido)=>{
//     console.log(`Esta es una funcion de tipo flecha mi estimado ${nombre} ${apellido}`);
// }
// flecha(nombre,apellido);
//funcion reservada---------------------------------------------------------------------------------
let nombre= prompt('Cual es tu nombre')
let Funcion2=function Nombre(){
console.log(`Otro tipo de funcion(anonima-no hoisting) mi estimado ${nombre}`)
};
Funcion2(nombre);