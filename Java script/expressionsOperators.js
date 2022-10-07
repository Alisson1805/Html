/*
===Expressões e operadores

- Expresssions
- Operators
  Binary
  Unary
  Ternary
*/
/*

let number
Isso é uma expressão, já que estamos declarando uma váriavel, nesse caso com o valor de undefined.

Toda expressão do Javascript pode ou não terminar com ; (ponto e vírgula), o final de uma expressão é facultativa, mas em algumas outras linguagens é obrigatório o uso de ; (ponto e vírgula).

Em alguns casos é necessário o uso de ; (ponto e vírgula), como numa função auto-executável, é um dos poucos casos onde faz falta, e é em um cenário como o seguinte:

let number = 1

(function(){
  console.log('alo')
})()
Caso você tente executar esse código, ele vai tentar atribuir essa função ao valor 1, onde o Javascript vai tentar executar o 1, passar uma função como argumento, e o 1 vai receber uma outra função. Um dos pouquíssimos casos onde o ; (ponto e vírgula) faz falta.

Veremos também sobre operadores, nesse exemplo temos o binário, unário e ternário.

/* unário 
let number = 1

console.log(++number)

 binário 
let number = 1

console.log(number + 1)

 ternário 
console.log(true ? 'alo' : 'nada')
Como você pode observar, temos no unário um elemento, no binário dois elementos e no ternário três elementos.

*/

/*
 new
 *left-hand- espression
 *criar um novo objeto
*/
/*
let name = new String('Alisson')
let age = new Number(23)
console.log(name, age)*/

/*
=== Operadores Unarios
Typeof
delete
*//*
const person = {
  name: 'Alisson',
  age: 25
}
delete person.age
console.log(person)*/

//===Operadores aritiméticos
/*
// multiplicação *
console.log(3 * 5)
// duvisão /
console.log(12 / 2)
// soma +
console.log( 12 + 3 )
// subtração -
console.log(12 - 2)*/

//resto daa divisão % 
//let remainder
//remainder = 11 % 3
//console.log(remainder)

// incremento / ++ adicionar sempre +1
//let increment = 0
//increment ++
///increment ++
//console.log(increment)

// decremento / -- tira 1

//let decrement = 0
//console.log(decrement)

/* exponencial: sinal ** potencia */
//console.log(2 ** 3)

//=== Grouping Operator ()

//let total = 2 + 3 * 5
//com essa precedência, nosso resultado é 17.

//let total = (2 + 3) * 5
//console.log(total)
// o cálculo mudou a precedência, fazendo nosso resultado tornar-se 25.

//==Operadores de comparação

//Ira comparar valores e retornar um Boolean como resoposta á comparação
/*
let one = 1
let two = 2

// == iguaal a
console.log(two == 1)
console.log(one == "1")

// != diferente de
console.log(two != 1)
console.log(one != "1")*/

//=== Operadores de comparação estritamente igual e estritamente diferente


// os 2 primeiros == é valor s o ultimo = é tipo
/*
let one = 1
let two = 2


// == estritamente igual a
console.log(one === 1)
console.log(one === "1")

// estritamente diferente de
console.log(two !== 2)
console.log(two !== "2")*/

//===Operadores de comparação maior e menor (igual)
/*
let one = 1
let two = 2

// maaior que
console.log(one > two)

// maior igual a
console.log(one >= 1)

// menor que 

console.log(one < 1)

//menor igual a

console.log(one <= 1)*/

/*

//=========== Operadores de atribuição

// Operadores de atribuição (Assignment)
let x



// assignment normal:
x = 1

// addition assignment (adição):
x += 2

// subtraction assignment (subtração):
x -= 1

// multiplication assignment (multiplacação):
// x = x * 2
x *= 2
console.log(x)
// division assignment (divisão):
x /= 2

// exponetiation assignment (exponenciação):
x **= 2

// remainder assignment (resto de divisão):
x %= 2 */

//====== Operadores Lógicos (Logical operators)
// - 2 valores boleanos quando verificados resultará em verdadeiro ou falso

//let pao = false
//let queijo = true

// AND &&
//console.log(pao && queijo)

// OR ||
//console.log(pao || queijo)

//not !
//console.log(!pao)

//=====Os operadores ternários, conhecidos como operadores de condição, como o nome sugere, são dependentes de condições e podem entregar valores diferentes com base nelas.

//Funciona da seguinte forma;

///condição ? valor1 : valor2
//Exemplo de uso:

// Café da manhã top
/*
let pao = false
let queijo = false

const niceBreakfast = pao || queijo ? 'Café top' : 'Café ruim'

console.log(niceBreakfast)*/

//====== Operador de tring

//console.log('a' + 'a')
// nesse caso, o retorno da string seria aa.

//===========Falsy e truthy
//O falsy é quando um valor é considerado falso em contextos que onde um booleano é obrigatório (condicionais e loops), exemplo a seguir:

/*//
	Todos os valores abaixo seriam representados como false em um boolean.
		false
    0
    -0
    ""
    null
    undefined
    NaN
*/

//console.log( NaN ? 'verdadeiro' : 'falso' )
//já o truthy é o oposto, quando um valor é considerado verdadeiro (true) em contextos onde um booleano é obrigatório (condicionais e loops), exemplo a seguir:

/* 
	Todos os valores abaixo seriam representados como false em um boolean.
		true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity
*/

//console.log( Infinity ? 'verdadeiro' : 'falso' )

//========Precedência dos operadores

// precedência dos operadores, ou seja, a ordem de importância de cada um deles.

// De cima para baixo, do mais importante ao menos importante.
/*
* grouping                      ( )
* negação e incremento          ! ++ --
* multiplicação e divisão       * /
* adição e subtração            + -
* relacional                    < <= > >=
* igualdade                     == != === !==
* AND                           && 
* OR                            ||
* condicional                   ?:
* assignment (atribuição)       = += -= *= %= */




