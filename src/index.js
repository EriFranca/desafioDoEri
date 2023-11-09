const input = require('readline-sync');//Para entrada de dados

let nomeHeroi = "";
let xpHeroi = 0;
let nivel = "";

//repetição
while (true){
    //Operador de atribuição via teclado
    nomeHeroi = input.question("O seu nome? ");
    xp = input.questionInt("Qual sua experiência? ");

    if (xp < 1000) {
        nivel = "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
        nivel = "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
        nivel = "Prata";
    } else if (xp >= 5001 && xp <= 7000) {
        nivel = "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
        nivel = "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
        nivel = "Imortal";
    } else if (xp >= 10001) {
        nivel = "Radiante";
    }

    //possiveis saidas
    if (nomeHeroi !== "" && xp !== 0)
        console.log(`O Herói: ${nomeHeroi}, está no nível: ${nivel}.`);
    else
        console.log(`Você precisa informar o nome do herói e seu xp para verificar o nível.`);


    let verificarOutroNivel = input.question("Deseja verificar o nivel de mais algum heroi [s/n]: ");

    // Sai do loop quando o usuário digitar n
    if (verificarOutroNivel.toLowerCase() === 'n')
        break;
}