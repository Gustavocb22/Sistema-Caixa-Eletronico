// TELA PRINCIPAL

const saque = document.querySelector("#botao-1");
const saldoExtrato = document.querySelector("#botao-2");
const depositar = document.querySelector("#botao-3");
const pagarConta = document.querySelector("#botao-4");

document.addEventListener("keydown", (evento) => {

    if(evento.key === "1"){

        setTimeout(() => {

            saque.style.backgroundColor = "rgb(237, 230, 255)";
            window.location.href = '#';

        },300)
  
    }else if(evento.key === "2"){

        setTimeout(() => {

            saldoExtrato.style.backgroundColor = "rgb(237, 230, 255)";
            saldoExtrato = window.location.href = 'https://gustavocb22.github.io/Sistema-Caixa-Eletronico/saque.html';

        },300)


    }else if(evento.key === "3"){

        setTimeout(() => {

            depositar.style.backgroundColor = "rgb(237, 230, 255)";
            depositar = window.location.href = 'https://gustavocb22.github.io/Sistema-Caixa-Eletronico/saque.html';

        },300)

    }else if(evento.key === "4"){

        setTimeout(() => {

            pagarConta.style.backgroundColor = "rgb(237, 230, 255)";
            pagarConta = window.location.href = 'https://gustavocb22.github.io/Sistema-Caixa-Eletronico/saque.html';
 
        },300)
  
    }
    
});

// evento é o parâmetro que verifica se ta recebendo algum número ou letra que está sendo pressionado
// key seria o teclado sendo pressionado