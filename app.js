let jogadores = [];
let palavras = [];
let palavraParaJogadores = [];

const endpointDaAPI = 'https://danielbonfim23.github.io/EuSouUmaBanana/dicionario.json';
getBuscarPalavras ();

async function getBuscarPalavras() {
    const res = await fetch(endpointDaAPI);
    palavras = await res.json();
   
}


function inserir() {
    let nomeJogador = document.querySelector('input').value;
    
    let divPai = document.querySelector('.jogadores');
    let divFilho = document.createElement('p');
    divFilho.classList.add('filhos')
    divFilho.innerHTML = `<p>${nomeJogador}</p><button onclick="excluir(this)" value="${nomeJogador}">Excluir</button><button onclick="mostrar(this)" value="${nomeJogador}">Mostrar</button>`
    divPai.appendChild(divFilho);
    jogadores.push(nomeJogador);
    // console.log(jogadores)
}

function excluir(element) {
    let nomeJogador = element.value;
    let divPai = document.querySelector('.jogadores');
    divPai.removeChild(element.parentElement);
    let index = jogadores.findIndex((element) => element === nomeJogador);
    if (index !== -1) {
        jogadores.splice(index, 1);
    }
    
}

function jogar() {
    if (jogadores.length > 0) {
        jogadores.forEach(element => {
            let numero = Math.floor(Math.random() * (palavras.length - 0 + 1) + 0);
            palavraParaJogadores.push(palavras[numero]);
    }
)}
}

function mostrar(element) {

    
    let nomeJogador = element.value;
    let index = jogadores.findIndex((element) => element === nomeJogador);

    let palavraNaTela = document.querySelector('h2');
    if (palavraNaTela.textContent == '') {
        palavraNaTela.innerHTML = palavraParaJogadores[index].palavra;

    } else {
        palavraNaTela.innerHTML = '';
    }
    
}
