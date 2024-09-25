let turnOnOff = document.getElementById('lampOnOff');
let lampada = document.getElementById('lamp');
let atualizar = document.getElementById('atualizar');

function isBroken(){
    return lampada.src.indexOf('quebrada') > -1; // Essa função faz com que os comandos sejam desabilitados quando a lâmpada for quebrada.
}

function lampOn(){
    if (!isBroken()){
        lampada.src = 'img/ligada.png';
    }
}

function lampOff(){
    if (!isBroken()){
        lampada.src = 'img/desligada.png'
    }
}

function lampBroken(){
    lampada.src = 'img/quebrada.png';
}

function lampOnOff(){
    if (turnOnOff.innerText == 'Ligar'){ // Quando o botão 'Ligar' for acionado, a imagem irá mudar para a lâmpada ligada e o botão irá ser renomeado para 'Desligar'.
        lampOn();
        turnOnOff.innerHTML = 'Desligar';
    }else{ // Quando o botão 'Desligar' for acionado, a imagem irá mudar para a lâmpada desligada e o botão irá ser renomeado para 'Ligar'.
        lampOff();
        turnOnOff.innerText = 'Ligar';
    }
}

function reload(){
    location.reload(); // A página será atualizada.
}

turnOnOff.addEventListener('click', lampOnOff);
lampada.addEventListener('dblclick', lampBroken); 
atualizar.addEventListener('click', reload);