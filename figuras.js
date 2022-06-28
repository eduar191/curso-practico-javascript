// Código del cuadrado
console.group("Cuadrado");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado){
    return lado * 4;
}
//console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado){
    return lado * lado;
}
//console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();

// Código del triangulo
console.group("Triangulos")

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log(
//     "Los lados del Triangulo miden: " 
//     + ladoTriangulo1 
//     + "cm,"  
//     + ladoTriangulo2 
//     + "cm," 
//     + baseTriangulo 
//     + "cm"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1,lado2,base) {
    return lado1 + lado2 + base;
} 
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base,altura) {
    return (base * altura) / 2;
} 
// console.log("El área del triángulo es: " + areaTriangulo + "cm^2");


console.groupEnd();


// Código del círculo
console.group("Circulos")

// Radio
// const radioCirculo = 4;
// console.log("El radio del circulo es: " + radioCirculo + "cm");

// Diametro
function diametroCirculo(radio) {
    return radio * 2;
}

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
} 

// Área
function areaCirculo(radio) {
    return (radio * radio ) * PI;
} 


console.groupEnd();