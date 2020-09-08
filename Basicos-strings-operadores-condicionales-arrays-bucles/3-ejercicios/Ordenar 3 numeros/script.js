/*
ordenar 3 numeros de mayor a menor
permutaciones con 3 elementos
HAY 6 posibilidades ------> 3! 3 factorial ( 3 x 2 x 1 = 6)

abc - 123
acb - 132
bac - 213
bca - 231
cab - 312
cba - 321
*/

const numbers = document.getElementById('numbers');
const result = document.getElementById('result');

let a = prompt('Introduce el primer número');
let b = prompt('Introduce el segundo número');
let c = prompt('Introduce el tercero número');

numbers.textContent = `Los números introducidos son ${a}, ${b} y ${c}`;

if(a>=b && a>=c){
    if(b>c){
        result.textContent = `De mayor a menor ${a}, ${b} y ${c}`
    }else{
        result.textContent = `De mayor a menor ${a}, ${c} y ${b}`
    }
}else if(b>=a && b>=c){
        if(a>c){
            result.textContent = `De mayor a menor ${b}, ${a} y ${c}`
        }else{
            result.textContent = `De mayor a menor ${b}, ${c} y ${a}`
        }
    }else if(c>=a && c>=b){
            if(a>b){
                result.textContent = `De mayor a menor ${c}, ${a} y ${b}`
            }else{
                result.textContent = `De mayor a menor ${c}, ${b} y ${a}`
            }
};