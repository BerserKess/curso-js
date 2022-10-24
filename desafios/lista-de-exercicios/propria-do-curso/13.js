/**
 * Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido
 * dado o número referente ao dia. Considere que domingo
 * é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.
 */

 const getRamdon = (max, min) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const diaDaSemana = (dia) => {
    switch (dia){
        case 7:
        case 1:
            console.log('Fim de Semana')
            break
        case 6: case 5: case 4: case 3: case 2:
            console.log('Dia útil')
            break
        default:
            console.log('dia inválido')
    }
}

diaDaSemana(2)
diaDaSemana(getRamdon(10,1))