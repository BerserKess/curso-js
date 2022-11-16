/**
 * JSON é um formato textual usado para comunicação de sistemas
 * com tecnologias diferentes
 */

const objeto = {
    a: 1,
    b: 2,
    c: 3,
    soma() {
        return a + b + c;
    },
};
//transforma objeto em um arquivo JSON
console.log(JSON.stringify(objeto));

// transforma JSON em objeto
console.log(
    JSON.parse('{"a":1, "b":2.5,"c":false, "d":"string", "e":{}, "f":[]}'),
);
