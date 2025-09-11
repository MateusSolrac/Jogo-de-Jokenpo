function jogar_pedra() {
    let resposta_user = 1; // usuário escolheu pedra
    let jogo = Math.floor(Math.random() * 3) + 1; // gera 1, 2 ou 3

    // Mostrar a escolha do robo em texto
    let escolha_robo;
    
    if (jogo === 1) escolha_robo = "pedra";
    else if (jogo === 2) escolha_robo = "papel";
    else escolha_robo = "tesoura";
    if (resposta_user === jogo) {
        alert("Empate! O robo escolheu: " + escolha_robo);
    } else if (
        (resposta_user === 1 && jogo === 3) || // pedra ganha de tesoura
        (resposta_user === 2 && jogo === 1) || // papel ganha de pedra
        (resposta_user === 3 && jogo === 2)    // tesoura ganha de papel
    ) {
        alert("Você ganhou! O robo escolheu: " + escolha_robo);
    } else {
        alert("Você perdeu! O robo escolheu: " + escolha_robo);
    }
}


function jogar_papel() {
    let resposta_user = 2; // usuário escolheu pedra
    let jogo = Math.floor(Math.random() * 3) + 1; // gera 1, 2 ou 3

    // Mostrar a escolha do robo em texto
    let escolha_robo;
    
    if (jogo === 1) escolha_robo = "pedra";
    else if (jogo === 2) escolha_robo = "papel";
    else escolha_robo = "tesoura";
    if (resposta_user === jogo) {
        alert("Empate! O robo escolheu: " + escolha_robo);
    } else if (
        (resposta_user === 1 && jogo === 3) || // pedra ganha de tesoura
        (resposta_user === 2 && jogo === 1) || // papel ganha de pedra
        (resposta_user === 3 && jogo === 2)    // tesoura ganha de papel
    ) {
        alert("Você ganhou! O robo escolheu: " + escolha_robo);
    } else {
        alert("Você perdeu! O robo escolheu: " + escolha_robo);
    }
}


function jogar_tesoura() {
    let resposta_user = 3; // usuário escolheu pedra
    let jogo = Math.floor(Math.random() * 3) + 1; // gera 1, 2 ou 3

    // Mostrar a escolha do robo em texto
    let escolha_robo;
    
    if (jogo === 1) escolha_robo = "pedra";
        else if (jogo === 2) escolha_robo = "papel";
        else escolha_robo = "tesoura";


    if (resposta_user === jogo) {
        alert("Empate! O robo escolheu: " + escolha_robo);
    } else if (
        (resposta_user === 1 && jogo === 3) || // pedra ganha de tesoura
        (resposta_user === 2 && jogo === 1) || // papel ganha de pedra
        (resposta_user === 3 && jogo === 2)    // tesoura ganha de papel
    ) {
        alert("Você ganhou! O robo escolheu: " + escolha_robo);
    } else {
        alert("Você perdeu! O robo escolheu: " + escolha_robo);
    }
}



      