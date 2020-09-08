let num = 5;
let numneg = -5;
let numce = 0;


//CONDICIONAL SIMPLE
if (num > 0 ) console.log(`${num} es mayor que cero`);

if (num < 0 ) console.log(`${num} es NO menor que cero`); // esto no se ejecutara al no cumplir la condicion


//CONDICIONAL COMPUESTO
if (numneg > 0){
    console.log(`${numneg} es mayor que cero`)
}else{
    console.log(`${numneg} es menor que cero`)
};


//CONDICIONAL MULTIPLE
if (numce > 0){
    console.log(`${numce} es mayor que cero`)
}else if(numce < 0){
    console.log(`${numce} es menor que cero`)
}else{
    console.log(`${numce} es cero!`)
};


//Operadores LOGICOS
if(num>0 && numneg>0){
    console.log(`${num} y ${numneg} son mayor que cero`)// esto NO se va a ejecutar, ya que AMBOS han de cumplir la condicion
};

if(num>0 || numneg>0){
    console.log(`${num} o ${numneg}, al menos uno es mayor que cero`)//con que UNO CUMPLA se ejecuta
};

if(num > 0){
    if(numneg > 0){}
};