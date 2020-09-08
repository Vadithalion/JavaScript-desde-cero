let numero = 5.3;

let palabra = 'Hola Mundo';

let respuesta = false;

//las constantes se inician y declaran en la misma linea
const PI = 3.14;


console.log(numero);
console.log(PI);
console.log(respuesta);





///////////////////////////////OPERADORES

let a = 5;
let b = 2;
usuario = 'pankeke'

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

console.log("hola " + usuario);




////////////////////////////////incrementos decrementos

console.log(a);    //=5
console.log(++a);  //=6
console.log(a);    //=6
console.log(a++);  //=6 aunque despues vale 7, que que primero ha mostrado y posteriormente ha sumado
console.log(a);    //=7




////////////////////////////operadores de asignacion

a += 5;
console.log(a);





////////////////////////// STRINGS

let cadena = "Hey mundo!";
let cadena2 = "         Estamos trabajando."

console.log(cadena);
console.log("La longitud de la cadena de caracteres es " + cadena.length);
console.log(cadena.toUpperCase());

// indexOf nos devuelve una cadena nueva, la cadena original no sera modificada
console.log(cadena.indexOf('e')); //devuelve la primera coincidencia, en este caso un 1, por la posicion en la cadena 0, 1, 2 ...

console.log(cadena.includes('y', 3));//esto es lo mismo, pero no devuelve indices, devuelve true/false si coincide o esta incluido

console.log(cadena.replace('mundo', 'pankeke'));//reemplaza la 1º por la 2º

console.log(cadena.substring(3));
console.log(cadena.substring(3,8));

console.log(cadena.slice(-3));
console.log(cadena.slice(3,-5));

console.log(cadena2.trim()); //elimina espacios al principio y al final

console.log(cadena.startsWith('H'));// comprueba que empiece con H, y devuelve true/false

console.log(cadena.startsWith('H', 5));// comprueba que empiece con H, y devuelve true/false A PARTIR DEL INCIDE 5

console.log(`${cadena} y que sepais que ${cadena2}`)// con esas comillas podemos poner asi las variables y no hace falta concatenar con el +




//////////////////////////////////// OBJETO MATH

console.log(Math.E);
console.log(Math.PI);

let num = 5.9;

console.log(Math.abs(num));//devuelve VALOR ABSOLUTO
console.log(Math.ceil(num));//devuelve EL SIGUIENTE ENTERO HACIA ARRIBA  6
console.log(Math.floor(num));// devuelve EL SIGUIENTE ENTERO HACIA ABAJO  5
console.log(Math.pow(num, 2));//devuelve POTENCIA (BASE, EXPONENTE)
console.log(Math.round(Math.random()*100));// con esta formula generamos numeros "redondos" entre 0 y 100
console.log(Math.random() * (100-0)+ 0);// formula para generar numeros ALEATORIOS >>>>>>>>>>>>>>>   console.log(Math.random() * (max - min) + min);
console.log(Math.sign(num));//devuelve -1, 0, 1    para numeros negativos el cero y positivos
console.log(Math.sqrt(num));// devuelve raiz cuadrada


/////////////////////////// CONDICIONALES