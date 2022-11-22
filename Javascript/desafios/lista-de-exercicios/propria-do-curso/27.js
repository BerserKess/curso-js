/**
 * Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.
 */

const crescimentoDeCriança = (altura1,alutra2,taxaCrescimento1,taxaCrescimento2) => {
  
    let ano = 0
    // Condição de serem do mesmo tamanho
    if (altura1 == alutra2){
        console.log('Não existe criança menor')
    } else {
        // Condição da segunda criança ser menor que a primeira
        if(altura1 > alutra2){           
            while (ano <= 12){
                alutra2 += taxaCrescimento2
                altura1 += taxaCrescimento1
                
                ano++
                if(alutra2 > altura1) {
                    console.log(`Existe uma criança menor e ela vai ultrapassar a maior em ${ano} anos`)
                    break
                } 
            }
            if(altura1 > alutra2){
                console.log(`A criança menor não ultrapassou a maior`)
            }
        // Condição da primeira criança ser menor que a segunda
        } else {
            while (ano <= 12){
                alutra2 += taxaCrescimento2
                altura1 += taxaCrescimento1
                ano++
                if(altura1 > alutra2) {
                    console.log(`Existe uma criança menor e ela vai ultrapassar a maior em ${ano} anos`)
                    break
                } 
            }

            if(alutra2 > altura1){
                console.log(`A criança menor não ultrapassou a maior`)
            }
        }
    }
}

crescimentoDeCriança(105, 120, 2, 1)