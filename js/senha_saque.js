

// VERIFICAR O CAMPO INPUT DA TELA SENHA SAQUE PARA RECEBER SÓ NÚMERO SEM CARACTERES NORMAIS

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


// BOTÃO CONFIRMAR
// Quando clica na tecla enter é para prosseguir para a próxima página, se o campo estiver vazio ele não prossegue com o programa, e recarrega a página e caso tiver algum dado(valor) ele limpa o campo mudar a cor do botão e linka para a outra página


const confirmar =  document.querySelector("#botao-confirmar");
const voltar = document.querySelector("#botao-retornar");
const saqueVazio = document.querySelector("#saques");



document.addEventListener("keydown", (evento) =>{

    if(evento.key === "Enter" || evento.key === "J" || evento.key === "j" ){

        const valor = saqueVazio.value;

        const alteraValor = parseInt(valor);

        // Essa propriedade value é responsável por pegar o valor do input para depois fazer as verificações com o valor digitado pelo usuário
        
        if(isNaN(alteraValor) && evento.key === "Enter" ||  evento.key === "J" || evento.key === "j" ){

            setTimeout(() => {
        
                alert("O campo senha saque não pode receber vazio !!");
                  
            },200)
          
        }else{

            setTimeout(() => {

              document.querySelector('#saques').value='';
              confirmar.style.backgroundColor = "#9a9ac6";
              window.location.href = 'https://gustavocb22.github.io/Sistema-Caixa-Eletronico/senha_saque.html';
            
            },200)
          
        }
 
        // isNaN é responsável por verificar se o valor inserido pelo usuário é um número válido(nesse caso se o número é do tipo int e não string), caso for ele pode executar as duas condições, caso não não vai acontecer nada
    }

   

});

// VOLTAR PARA A TELA SAQUE



document.addEventListener("keydown", (evento) => {

    if(evento.key === "C" || evento.key === "c" ){

        setTimeout(() => {

            voltar.style.backgroundColor = "#9a9ac6";
            window.location.href = 'https://gustavocb22.github.io/Sistema-Caixa-Eletronico/saque.html';

        },300)
  
    }
    
});

// BOTÕES DA SENHA

const senhaSaque1 = document.querySelector("#senha_saque_1")
const senhaSaque2 = document.querySelector("#senha_saque_2")
const senhaSaque3 = document.querySelector("#senha_saque_3")
const senhaSaque4 = document.querySelector("#senha_saque_4")
const senhaSaque5 = document.querySelector("#senha_saque_5")

document.addEventListener("keydown", (evento) =>{

   
    if(evento.key === "5" || evento.key === "2"){

        setTimeout(() =>{

            senhaSaque1.style.backgroundColor = "#9a9ac6"

        },100)

    }else if(evento.key === "8" || evento.key === "0"){

        setTimeout(() =>{

            senhaSaque2.style.backgroundColor = "#9a9ac6"

        },100)

    }else if(evento.key === "3" || evento.key === "4"){

        setTimeout(() =>{

            senhaSaque3.style.backgroundColor = "#9a9ac6"

        },100)


    }else if(evento.key === "9" || evento.key === "1"){

        setTimeout(() =>{

            senhaSaque4.style.backgroundColor = "#9a9ac6"

        },100)

    }else if(evento.key === "6" || evento.key === "7"){

        setTimeout(() =>{

            senhaSaque5.style.backgroundColor = "#9a9ac6"

        },100)

    }

});
