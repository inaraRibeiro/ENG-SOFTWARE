function smi() {
    let buttons = document.querySelectorAll('div.itens > button');

    buttons.forEach((item, index) => {
        item.onclick = function () {
            if (index == 0) {
                let mT = prompt('Informe o valor do MT: ');
            }
            if (index == 1) {
                let fC = prompt('Informe o valor do MT: ');
            }
            if (index == 2) {
                let fA = prompt('Informe o valor do MT: ');
            }
            if (index == 3) {
                let fD = prompt('Informe o valor do MT: ');
            }

        }
    });

    let smi

    smi = ((mT - (fA + fC + fD)) / mt)
    return parseFloat(smi)
}

function integridade(seg, ameaca) {

    let integridade
    integridade = (1 - (ameaca * (1 - seg)))
    return parseFloat(integridade)
}

function volume1(n1, n2, NUM2) {
    let vlProg
    vlProg = ((NUM2 * Math.log(2)) * (n1 + n2))


    return parseFloat(vlProg)
}





