const escola = 'Cod3r';

 console.log(escola.charAt(4)); // retorna o caractere na posicao inidica
 console.log(escola.charAt(5)); // não retorna nada por não havar indice na palavra indicada
 console.log(escola.charCodeAt(3)); // retorna o valor do indice na tabela ark
 console.log(escola.indexOf('3')); // retorna o valor do indice indicado
 console.log(escola.substring(1)); // retorna a string sem o indice indicado
 console.log(escola.substring(0 , 3)); // retorna a string com o indice indicado mas sem o indice final indicado
 console.log('Escola '.concat(escola).concat('!')) // vai concatenar
 console.log(escola.replace(3, 'e')); // coloca outro valor no indice indicado

 console.log('Ana, Maria, Snow'. split(',')); // quebra um string e forma um array