let num1 = 5;
let num2 = -8;
let num0 = 0;


///////////////////////////CONDICIONAL SIMPLE
if (num1 > 0 ) console.log(`${num1} es mayor que cero`);

if (num1 < 0 ) console.log(`${num1} es NO menor que cero`); // esto no se ejecutara al no cumplir la condicion


/////////////////////////CONDICIONAL COMPUESTO
if (num2 > 0){
    console.log(`${num2} es mayor que cero`)
}else{
    console.log(`${num2} es menor que cero`)
};


/////////////////////////CONDICIONAL MULTIPLE
if (num0 > 0){
    console.log(`${num0} es mayor que cero`)
}else if(num0 < 0){
    console.log(`${num0} es menor que cero`)
}else{
    console.log(`${num0} es cero!`)
};


//////////////////////////Operadores LOGICOS
if(num1>0 && num2>0){
    console.log(`${num1} y ${num2} son mayor que cero`)// esto NO se va a ejecutar, ya que AMBOS han de cumplir la condicion
};

if(num1>0 || num2>0){
    console.log(`${num1} o ${num2}, al menos uno es mayor que cero`)//con que UNO CUMPLA se ejecuta
};

if(num1 > 0){
    if(num2 > 0){
        console.log(`${num1} y ${num2} son mayores que 0`);
    }else if(num2 < 0){
        console.log(`${num1} es mayor que 0 y ${num2} es menor que 0`);
    }else{
        console.log(`${num1} es mayor que 0 y ${num2} es igual a 0`)
    }
}else if(num1<0){
    if(num2 > 0){
        console.log(`${num1} no es mayor que 0 y ${num2} es mayor que 0`);
    }else if(num2 < 0){
        console.log(`${num1} y ${num2} son menores que 0`);
    }else{
        console.log(`${num1} es menor que 0 y ${num2} es igual a 0`)
    }
}else{
    if(num2 > 0){
        console.log(`${num1} es igual a 0 y ${num2} es mayor que 0`);
    }else if(num2 < 0){
        console.log(`${num1} es igual a 0 ${num2} es menor que 0`);
    }else{
        console.log(`${num1} y ${num2} son igual a 0`)
    }
};

let word = "Hola";

if (word.length>4){
    console.log(`${word} tiene mas de 4 letras`);
}else if(word.length<4){
    console.log(`${word} tiene menos de 4 letras`);
}else{
    console.log(`${word} tiene 4 letras`);
};

let respuesta = true;

//////////////////////DOS FORMAS IGUALES DE COMPROBAR VERDADERO
if(respuesta==true){console.log(`respuesta tiene valor TRUE`);};
if(respuesta){console.log(`respuesta tiene valor TRUE`);};

///////////////////// DOS FORMAS IGUALES COMPROBAR NEGACION
if(respuesta!=true){console.log(`respuesta tiene valor FALSE`);};
if(!respuesta){console.log(`respuesta tiene valor FALSE`);};



//////////////SWITCH

let num = 4;

switch(num){
    case 1: console.log(`${num} tiene el valor 1`);
    break;

    case 2: console.log(`${num} tiene el valor 2`);
    break;
    default: console.log(`${num} no vale ni 1 ni 2`);
};

// solo funcionara si el numero vale 1 2 3 4 5, que son los casos propuestos
switch(num){
    case 1:
    case 3:
    case 5:
    console.log(`${num} es impar`)
    break;
    case 2:
    case 4:
    console.log(`${num} es par`)
};


/////////////OPERADORES TERNARIOS

/*
operador ternario

(condicion) ?
    (primera sentencia,                         primer bloque true
    segunda sentencia)
    :                                           :
    (primera sentencia,                         segundo bloque false
    segunda sentencia)
*/

(num % 2 == 0) ?
        console.log(`${num} es par`)
        :
        console.log(`${num} es impar`);