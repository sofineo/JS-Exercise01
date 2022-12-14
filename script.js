// Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

// - [ ]  A soma dos dois números;
// - [ ]  A subtração dos dois números;
// - [ ]  A multiplicação dos dois números;
// - [ ]  A divisão dos dois números;
// - [ ]  O resto da divisão dos dois números;

// Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

// - [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
// - [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.
// Lembre-se de sempre mostrar na tela o resultado de cada uma dessas operações!
// O resultado final desse desafio deve ser algo em torno de:

let input1 = Number(prompt(`Type a number:`))
let input2 = Number(prompt(`Type another number:`))

function sum(number1, number2) {
  return number1 + number2
}

function sub(number1, number2) {
  return number1 - number2
}

function multi(number1, number2) {
  return number1 * number2
}

function div(number1, number2) {
  return number1 / number2
}

function remainer(number1, number2) {
  return number1 % number2
}

alert (
`The sum is ${sum(input1,input2)} 
The substration is ${sub(input1,input2)}
The multiplication is ${multi(input1,input2)}
The division is ${(div(input1,input2)).toFixed(2)}
THe remainer is ${remainer(input1,input2)}`)


function verify(sumResult) {
  return sumResult%2
}

if (verify(sum(input1,input2))==0) {
  alert(`The sum of the number is even`)
} else {
  alert(`The sum of the number is odd`)
}

if (input1 == input2) {
  alert(`The numbers typed are the same`)
} else {
  alert(`The numbers typed are different`)
}
