var acertos = 0;
const certoText = document.querySelectorAll('.certo'); /* 0 a 9 */
const erradoText = document.querySelectorAll('.errado'); /* 0 a 9 */
const alt = document.querySelectorAll('.perguntas > button') /* 0 a 49 */
const main = document.querySelector('main');
const estaPronto = document.querySelector('#estaPronto');
let pontos = document.querySelector('#pontos');
pontos.innerText = acertos + " de 10!";


function certo(n){ 
    certoText[n].style.display = 'block';
    for(let i = 0; i < 5; i++){
        alt[i+(n*5)].disabled = true;
    }
    acertos++;
    pontos.innerText = acertos + " de 10!";
}

function errado(n){ 
    erradoText[n].style.display = 'block';
    pontos.innerText = acertos + " de 10!";
    for(let i = 0; i < 5; i++){
        alt[i+(n*5)].disabled = true;
    }
}

function sim(){
    main.style.display = 'block';
    estaPronto.style.display = 'none';
    /* alterar o header*/
    const bemVindo = document.querySelector('#bemVindo > h1');
    bemVindo.style.color = '#C89B3C';
    bemVindo.style.textAlign = 'center';
    bemVindo.innerText = 'Quiz';
    bemVindo.style.padding = '15px 0 15px 0';
    /* league logo */
    const lol = document.querySelectorAll('.lol');
    lol[0].src = 'fotos/lolLogoSmall.png';
    lol[0].style.height = '50%';
    lol[0].style.width = '50%';
    /* decorator */
    lol[1].style.margin = '15px auto 15px auto';
    lol[1].style.height = '100%';
    lol[1].style.width = '100%';

    /*deleta o "wanna plkay league?"*/
    const league = document.getElementById('league');
    if(league){
        league.remove();
    }
}

function nao(){
    const league = document.createElement('img');
    league.id = 'league';
    league.src = 'https://media.tenor.com/RpHqLGKIHvIAAAAd/league-lol.gif';
    document.body.appendChild(league);
}

function simReset(){
    location.reload();
}

function naoReset(){
    const league = document.createElement('img');
    league.id = 'league';
    league.src = 'https://tenor.com/view/league-of-legends-patrick-bateman-lol-gif-26192310';
    document.body.appendChild(league);
}
