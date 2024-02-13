let cond = 9;
while (cond < 180) {
    calcularSaldoVitorias(cond, (cond / 4));
    cond += 10;
}


function calcularSaldoVitorias(quantVitorias, quantDerrodas) {
    let saldo = quantVitorias - quantDerrodas;

    return validarNivelHeroi(saldo);
}

function validarNivelHeroi(saldoVitoria) {
    let nivelHeroi;

    if (saldoVitoria < 10) {
        nivelHeroi = "Ferro";
    } else if (saldoVitoria > 10 && saldoVitoria <= 20) {
        nivelHeroi = "Bronze";
    } else if (saldoVitoria > 20 && saldoVitoria <= 50) {
        nivelHeroi = "Prata";
    } else if (saldoVitoria > 50 && saldoVitoria <= 80) {
        nivelHeroi = "Ouro";
    } else if (saldoVitoria > 80 && saldoVitoria <= 90) {
        nivelHeroi = "Diamante";
    } else if (saldoVitoria > 90 && saldoVitoria <= 100) {
        nivelHeroi = "Lendário";
    } else if (saldoVitoria > 100) {
        nivelHeroi = "Imortal";
    }

    return imprimirNivelHeroi(nivelHeroi, saldoVitoria)
}

function imprimirNivelHeroi(nivel, saldoVitorias) {
    console.log("O Herói tem saldo de " + saldoVitorias + " está no nível de " + nivel);
}