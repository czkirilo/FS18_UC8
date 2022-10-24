//Atividade do Encontro Remoto 2

/*
OK - Percorrer de Zero até o número de alunos 

OK - Se o número for par, escreva ‘par’ e o número correspondente 

OK - Se o número for ímpar, escreva ‘ímpar’ e o número correspondente  

OK - Se o número for zero, escreva ‘zero’ e o número correspondente 
*/
 
let numeroDeAlunos = 10
// contador++ eh a mesma coisa que contador = contador + 1 / exemplo: x = 3, x = 3 + 1

let contador = 0
while (contador <= numeroDeAlunos){
    //console.log(contador)

    if (contador == 0){
        console.log("o numero atual eh zero")
    }else if (contador % 2 != 0){
        console.log("O numero "+ contador + " eh IMPAR")
    }else{
        console.log(`O numero ${contador} é PAR`)
    }

    contador++
}

//|||||||||||||||||||||||||||||||||||||||||||


let nomeDeAlunos = ["Caique", "Thiago", "Jessica", "Odirlei"]
for (let nome of nomeDeAlunos){
    console.log(`Esta pessoa se chama ${nome}`)
}

//||||||||||||||||||||||||||||||||||||||||||||||||||

let acompanhado = true
let idade = 28
let ingresso = true // atribuindo o valor true a variavel ingresso 

if(ingresso == true && idade <= 18 || acompanhado == true){ // comparando se o valor dentro da variavel ingresso eh realmente true
    console.log("bem vindo a festa!!")
}else{
    console.log("Você não tem permissão para entrar")
}