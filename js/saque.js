// TELA SAQUE

// VERIFICAR O CAMPO INPUT DA TELA SAQUE PARA RECEBER SÓ NÚMERO SEM CARACTERES NORMAIS

const removeCaracteres = document.querySelector(".valor-saque");

function checkCaracteres(e){

    const caracteres = String.fromCharCode(e.keyCode);

    const pattern = '[0-9]';

    if(caracteres.match(pattern)){

        return true;
    }
}
removeCaracteres.addEventListener("keydown", (e) => {

    checkCaracteres(e);

    if(!checkCaracteres(e)){

        e.preventDefault();

    }

});

// Quando clica na tecla enter é para prosseguir para a próxima página, se o campo estiver vazio ele não prossegue com o programa

const saqueVazio = document.querySelector("#saques");

document.addEventListener("keydown", (evento) =>{

    if(evento.key === "Enter" || evento.key === "J" || evento.key === "j" ){

        const valor = saqueVazio.value;

        alteraValor = parseInt(valor);

        // Essa propriedade value é responsável por pegar o valor do input para depois fazer as verificações com o valor digitado pelo usuário
        
        if(isNaN(alteraValor)){

            if(evento.key === "Enter" || evento.key === "J" || evento.key === "j" ){

                setTimeout(() => {
        
                    alert("O campo valor não pode receber vazio !!");
                    window.location.href = 'http://127.0.0.1:5500/Sistema%20de%20Caixa%20Eletr%C3%B4nico/saque.html';
                  
                },200)
          
            }

        }else if(alteraValor === 200){

            if(evento.key === "Enter" || evento.key === "J" || evento.key === "j" ){

                setTimeout(() => {
        
                    alert("Erro valor de R$ 200 Reais já disponível no botão lateral, tente novamente !!");
                    document.querySelector('#saques').value='';
                    confirmar.style.backgroundColor = "#9a9ac6";
                    window.location.href = 'http://127.0.0.1:5500/Sistema%20de%20Caixa%20Eletr%C3%B4nico/saque.html';
                  
                },200)
          
            }

        }else if(alteraValor === 400){

            if(evento.key === "Enter" || evento.key === "J" || evento.key === "j" ){

                setTimeout(() => {
        
                    alert("Erro valor de R$ 400 Reais já disponível no botão lateral, tente novamente !!");
                    document.querySelector('#saques').value='';
                    confirmar.style.backgroundColor = "#9a9ac6";
                    window.location.href = 'http://127.0.0.1:5500/Sistema%20de%20Caixa%20Eletr%C3%B4nico/saque.html';
                  
        
                },200)
          
            }

        }else if(alteraValor === 700){

            if(evento.key === "Enter" || evento.key === "J" || evento.key === "j" ){

                setTimeout(() => {
        
                    alert("Erro valor de R$ 700 Reais já disponível no botão lateral, tente novamente !!");
                    document.querySelector('#saques').value='';
                    confirmar.style.backgroundColor = "#9a9ac6";
                    window.location.href = 'http://127.0.0.1:5500/Sistema%20de%20Caixa%20Eletr%C3%B4nico/saque.html';
                  
                },200)
          
            }

        }else if(alteraValor === 900){

            if(evento.key === "Enter" || evento.key === "J" || evento.key === "j" ){

                setTimeout(() => {
        
                    alert("Erro valor de R$ 900 Reais já disponível no botão lateral, tente novamente !!");
                    document.querySelector('#saques').value='';
                    confirmar.style.backgroundColor = "#9a9ac6";
                    window.location.href = 'http://127.0.0.1:5500/Sistema%20de%20Caixa%20Eletr%C3%B4nico/saque.html';
                  
        
                },200)
          
            }

        }else if(alteraValor === 1200){

            if(evento.key === "Enter" || evento.key === "J" || evento.key === "j" ){

                setTimeout(() => {
        
                    alert("Erro valor de R$ 1200 Reais já disponível no botão lateral, tente novamente !!");
                    document.querySelector('#saques').value='';
                    confirmar.style.backgroundColor = "#9a9ac6";
                    window.location.href = 'http://127.0.0.1:5500/Sistema%20de%20Caixa%20Eletr%C3%B4nico/saque.html';
                  
                },200)
          
            }

        }else if(alteraValor === 1400){

            if(evento.key === "Enter" || evento.key === "J" || evento.key === "j" ){

                setTimeout(() => {
        
                    alert("Erro valor de R$ 1400 Reais já disponível no botão lateral, tente novamente !!");
                    document.querySelector('#saques').value='';
                    confirmar.style.backgroundColor = "#9a9ac6";
                    window.location.href = 'http://127.0.0.1:5500/Sistema%20de%20Caixa%20Eletr%C3%B4nico/saque.html';
                  
                },200)
          
            }

        }else if(alteraValor === 1700){

            if(evento.key === "Enter" || evento.key === "J" || evento.key === "j" ){

                setTimeout(() => {
        
                    alert("Erro valor de R$ 1700 Reais já disponível no botão lateral, tente novamente !!");
                    document.querySelector('#saques').value='';
                    confirmar.style.backgroundColor = "#9a9ac6";
                    window.location.href = 'http://127.0.0.1:5500/Sistema%20de%20Caixa%20Eletr%C3%B4nico/saque.html';
                  
                },200)
          
            }

        }else if(alteraValor === 1900){

            if(evento.key === "Enter" || evento.key === "J" || evento.key === "j" ){

                setTimeout(() => {
        
                    alert("Erro valor de R$ 1900 Reais já disponível no botão lateral, tente novamente !!");
                    document.querySelector('#saques').value='';
                    confirmar.style.backgroundColor = "#9a9ac6";
                    window.location.href = 'http://127.0.0.1:5500/Sistema%20de%20Caixa%20Eletr%C3%B4nico/saque.html';
                  
                },200)
          
            }
        }else{

            document.querySelector('#saques').value='';
            confirmar.style.backgroundColor = "#9a9ac6";
            window.location.href = 'http://127.0.0.1:5500/Sistema%20de%20Caixa%20Eletr%C3%B4nico/senha_saque.html';
            
              
        }
 

        // isNaN é responsável por verificar se o valor inserido pelo usuário é um número válido(nesse caso se o número é do tipo int e não string), caso for ele pode executar as duas condições, caso não não vai acontecer nada

    }

});

// BOTÕES DOS VALORES ESPECIFICOS PARA SAQUE

const saque200 = document.querySelector("#botao_saque_1");
const saque400 = document.querySelector("#botao_saque_2");
const saque700 = document.querySelector("#botao_saque_3");
const saque900 = document.querySelector("#botao_saque_4");
const saque1200 = document.querySelector("#botao_saque_5");
const saque1400 = document.querySelector("#botao_saque_6");
const saque1700 = document.querySelector("#botao_saque_7");
const saque1900 = document.querySelector("#botao_saque_8");
const voltar = document.querySelector("#botao-retornar");
const confirmar = document.querySelector("#botao-confirmar");

document.addEventListener("keydown", (evento) => {

    if(evento.key === "A" || evento.key === "a" ){

        setTimeout(() => {

            saque200.style.backgroundColor = "#9a9ac6";
            window.location.href = 'http://127.0.0.1:5500/Sistema%20de%20Caixa%20Eletr%C3%B4nico/senha_saque.html';
         
        },300)
  
    }else if(evento.key === "B" || evento.key === "b" ){

        setTimeout(() => {

            saque400.style.backgroundColor = "#9a9ac6";
            window.location.href = 'http://127.0.0.1:5500/Sistema%20de%20Caixa%20Eletr%C3%B4nico/senha_saque.html';

        },300)
  
    }else if(evento.key === "C" || evento.key === "c"){

        setTimeout(() => {

            saque700.style.backgroundColor = "#9a9ac6";
            window.location.href = 'http://127.0.0.1:5500/Sistema%20de%20Caixa%20Eletr%C3%B4nico/senha_saque.html';

        },300)
  
    }else if(evento.key === "D" || evento.key === "d" ){

        setTimeout(() => {

            saque900.style.backgroundColor = "#9a9ac6";
            window.location.href = 'http://127.0.0.1:5500/Sistema%20de%20Caixa%20Eletr%C3%B4nico/senha_saque.html';

        },300)
  
    }else if(evento.key === "E" || evento.key === "e" ){

        setTimeout(() => {

            saque1200.style.backgroundColor = "#9a9ac6";
            window.location.href = 'http://127.0.0.1:5500/Sistema%20de%20Caixa%20Eletr%C3%B4nico/senha_saque.html';

        },300)
  
    }else if(evento.key === "F" || evento.key === "f" ){

        setTimeout(() => {

            saque1400.style.backgroundColor = "#9a9ac6";
            window.location.href = 'http://127.0.0.1:5500/Sistema%20de%20Caixa%20Eletr%C3%B4nico/senha_saque.html';

        },300)
  
    }else if(evento.key === "G" || evento.key === "g" ){

        setTimeout(() => {

            saque1700.style.backgroundColor = "#9a9ac6";
            window.location.href = 'http://127.0.0.1:5500/Sistema%20de%20Caixa%20Eletr%C3%B4nico/senha_saque.html';

        },300)
  
    }else if(evento.key === "H" || evento.key === "h" ){

        setTimeout(() => {

            saque1900.style.backgroundColor = "#9a9ac6";
            window.location.href = 'http://127.0.0.1:5500/Sistema%20de%20Caixa%20Eletr%C3%B4nico/senha_saque.html';

        },300)
  
    }else if(evento.key === "I" || evento.key === "i" ){

        setTimeout(() => {

            voltar.style.backgroundColor = "#9a9ac6";
            window.location.href = 'http://127.0.0.1:5500/Sistema%20de%20Caixa%20Eletr%C3%B4nico/index.html';

        },300)
  
    }
    
});


// // // BOTÃO VOLTAR
// Esconder os botões das opções laterias quando eu começar a digitar no input
// mudar o texto do lado do teclado assim que o usuário digitar alguma coisa

document.addEventListener("keydown", (evento) => {

    if(evento.key >= "1" && evento.key <= "9"){

        document.querySelector("#botao_saque_1").style.display = "none";
        document.querySelector("#botao_saque_2").style.display = "none";
        document.querySelector("#botao_saque_3").style.display = "none";
        document.querySelector("#botao_saque_4").style.display = "none";
        document.querySelector("#botao_saque_5").style.display = "none";
        document.querySelector("#botao_saque_6").style.display = "none";
        document.querySelector("#botao_saque_7").style.display = "none";
        document.querySelector("#botao_saque_8").style.display = "none";
        document.querySelector("#botao-confirmar").style.display = "block";
        document.querySelector("#texto-1").style.display = "none";
        document.querySelector("#texto-2").style.display = "block";
    }

});