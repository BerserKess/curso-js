/**
 * Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
   ou false.
 */

   const divisivelPor3 = (numero) => {
    if (numero % 3 == 0) {
        console.log(true)
    } else {
        console.log(false)
    }
   }

   divisivelPor3(5)