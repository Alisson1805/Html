/*
//Funcões dentro de variaveis

//function anonymous, function expression

const sum = function (number1, number2){ 
total = number1 + number2 //nao criar variavel sem nome
return total
}

//sum(2, 3)// arguments

let number1 = 34
let number2 = 45

console.log(`o numero 1 é ${number1}`)
console.log(`o numero 2 é ${number2}`)
console.log(`a soma é ${number1, number2}`)*/


/*/ função é um liquidificador

function fazerSuco(fruta1, fruta2) {
    return fruta1 + fruta2
}

const copo = fazerSuco('banana', 'maçã')

console.log(copo)*/

//function scope

/*let subject = 'create video'
function createThink (subject) {
    subject = 'study'
    return subject
}

console.log(subject)
console.log(createThink (subject)) */

// function hoisting // JS joga para cima e reorganiza

/*sayMyName()

function sayMyName(){
    console.log('alisson')
}*/

//arrow function

/*const sayMyName = () => {

}

console.log('alisson')

sayMyName()*/

// callback function

/*function sayMyName(name){ //função
    console.log(name)
}

sayMyName (     
    () => {
        console.log('estou em uma callback')
    }

)*/

// function () constructor

/*function Person(name) {
	this.name = name
	this.walk() = function() {
		return (this.name + "está andando")
	}
}
const mayk = new Person("Mayk")
const joao = new Person("João")*/