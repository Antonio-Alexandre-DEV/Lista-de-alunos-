//COMO CRIAR UMA LISTA DE ALUNOS COM NOTAS, MEDIA E SITUAÇÃO//

//O que preciso de entrada?// 

let nomes = ["Pedro", "João", "Tiago"];
let notasA = [7.0, 6.5, 9.5];
let notasB = [8.0, 7.0, 8.5];

function media ( n1, n2){

    return (n1 + n2) /2;
}

function passou (media) {

    if (media > 7){
        return "Aprovado";
    }else{ 
        return "Reprovado";
    }

}

//O que precisa sair?//

for (let index in nomes) {

//para simplificar a leitura foram criadas essas variaveis abaixo//

let nota1 = notasA[index];
let nota2 = notasB[index];

let m = media(nota1, nota2);

console.log (nomes[index] + " - " + nota1 + " - " + 
                                    nota2 + " - " +
                                    media(nota1,nota2) +
                                    " - " + m + " - " + passou(m))


} // ja estamos com nomes, notas e medias prontas //

// Agora falta colocar a situação "Aprovado e reprovado", pra isso vamos criar uma "function passou (media)" com "if e else" //Ainda vou precisar criar a "Variavel m" em for e acrescentar em console.log as alteraçoes//





