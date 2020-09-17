let pass = 'hola';

console.log(pass);

/////////////////////// WHILE Y DO WHILE


while(pass != 'hola');{
    pass = prompt('Introduce tu contraseña paspan. PISTA: es "hola"')
};


do{
    pass = prompt('Introduce tu contraseña paspan. PISTA: es "hola"')
}while(pass != 'hola')



console.log('Fin bucle');




///////////////////////// FOR Y FOR IN


let numbers = [132, 243, 321, 465, 555];

for(let i=0; i<=10; i++){
    console.log(i)
};

for( let i=0; i<numbers.length; i++){
    console.log(`i vale ${i} y el valor de esa posicion en el array es ${numbers[i]}`)
}


////////////////// FOR OF Y FOR IN

let names = ['paco', 'amparito', 'nuck chorris', 'maria'];

///////imprime el contenido de cada indice del array
for(let name of names){
    console.log(name)
};

///////imprime el indice donde esta name
for(let name in names){
    console.log(name)
};
