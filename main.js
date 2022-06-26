let segundos = 0;
let minutos = 0;
let horas = 0;
let intervalo;

function pausar(){
    clearInterval(intervalo);
}

function zerar(){
    segundos = 0;
    minutos = 0;
    horas = 0;
    document.getElementById('visor').innerHTML = '00:00:00'
}

function iniciar(){
    tempo();
    intervalo = setInterval(tempo,1000);
}

function tempo(){
    segundos++
    if(segundos == 60){
        minutos++
        segundos = 0
    } if(minutos == 60){
        horas++
        minutos = 0
    }
    document.getElementById('visor').innerHTML = doisDigitos(horas) + ':' + doisDigitos(minutos) + ':' + doisDigitos(segundos);
}

function doisDigitos(digito){
    if(digito < 10){
        return('0' + digito);
    }else{
        return(digito);
    }
}
