/*
- almacenar varios datos y agruparlos
- se pueden llenar con cualquier tidpo de dato valido de JS, separados por COMAS
- declarados con [], se pueden declarar vacios
- puede añadirse o modificar


 metodo
    Array.isArray(variable a evaluar)

*/


let numbers = [1,2,3,4,5];

let words = ['Hola', 'Agur', 'Con dios!']

console.log(numbers[0]);

console.log(`El string,  "${words[2]}", tiene ${words[2].length}`);



// PROPIEDAD lenght ----- devuelve el numero de posiciones que tiene el array

console.log(`El array tiene ${numbers.length} posiciones`);


/* METODO
        Array.isArray(variable a evaluar) - Devuelve true si la variable es un array
*/

let number = 4;

console.log(Array.isArray(number)); //FALSE no es un array
console.log(Array.isArray(numbers)); // TRUE si es un array

/*
    eliminar elementos del array
        METODO
                shift -  elimina el primer elemento del array y devuelve ese elemento
                .pop elimina el ultimo y devuelve ese elemento
*/

console.log(numbers); // 1, 2, 3, 4, 5
numbers.shift();
numbers.pop();
console.log(numbers); // 2, 3, 4


/*
                METODOS

    añadir elementos al array
            .push - añade uno o mas elementos al FINAL del array
            .unishift -  añade uno o mas elementos al PRINCIPIO del array
*/

console.log(numbers); // 2, 3, 4
numbers.push(5);
numbers.unshift(1);
console.log(numbers); // 1, 2, 3, 4, 5

/*
    .indexOf() - devuelve el primer indice que coincida con la busqueda

    .lastIndexOf() - devuelve el ULTIMO que coincida
*/

console.log(numbers.indexOf(3)); // 2

/*
    .reverse - le da la vuelta al Array
*/

console.log(numbers.reverse());

/*
    .join - devuelve el array como un STRING, separado por lo que le indiquemos
*/

let arrayString = numbers.join(` y luego el `);
console.log(arrayString);

/*
    .splice(a, b, items)
                            si solo a, elmina a partir de a
                            si a y b, elimina desde a hasta b

    desde a hasta b, si se especifica, sino, a partir del que se marque se eliminara.

    .slice(a, b, items) - extrae los elementos desde a hasta b, funciona igual que splice
*/

let arraySplice = numbers.splice(2, 4)
console.log(arraySplice);