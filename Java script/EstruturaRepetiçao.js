//************* ESTRUTURA DE REPETIÇÃO *

//===For
// estrutura de repetição for tem a seguinte sintaxe:
//for(inicialização de uma variável; condição de continuação para o loop; expressão final)
// break para a execução do loop
// continue - piulaa a execução do momento
/*
for(let i = 100; i > 10; i--){
   if(i === 50){
    break 
   }
    console.log(i)
}*/

//=== while = usar quando não sabe o momento da parada
/*
let i = 0;
while(i < 10){
    console.log(i)

    i++;
}*/

//== for...of = serve para strings or array
/*
let name = 'alisson'
let names = ['joao', 'paulo', 'pedro']

for( let name of names){
    console.log(name)
}*/

//=== For...in
/*
let person = {
    name: 'john',
    age: 30,
    weight: 88.6
}

for(let property in person){
    console.log(property)
    console.log(person[property])
}*/


