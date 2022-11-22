/**
 * concat concatena arrays e gera um novo array com os valores
 */

const nomes1 = ['Grão', 'Lorde'];
const nomes2 = ['Bolvar', 'Fordragon'];
const nome = nomes1.concat(nomes2);
console.log(nome);

const nums1 = [1, 2, 3, 4, 5, 8, 6];
const nums2 = [5, 46, 8, 6, 8, 4];
console.log([].concat(nums1, nums2));
