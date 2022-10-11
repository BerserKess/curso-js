function soBoaNote (nota){
    if (nota >= 7){
        console.log("Parabens, foi aprovado com " + nota)
    }
}

soBoaNote(8.1)

function seForVerdadeEuMostro (valor){
    if (valor) {
        console.log('É verdade...' + valor)
    }
}

seForVerdadeEuMostro();
seForVerdadeEuMostro(null);
seForVerdadeEuMostro(undefined);
seForVerdadeEuMostro('');
seForVerdadeEuMostro(0);
seForVerdadeEuMostro(-1);
seForVerdadeEuMostro(' ');
seForVerdadeEuMostro('?');
seForVerdadeEuMostro([]);
seForVerdadeEuMostro({});
seForVerdadeEuMostro(NaN);