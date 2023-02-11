// for in
/*const nomes = {
    nome:'Celito',
    sobrenome: 'Kraemer',
    idade: 33
};
*/

//For classico - Geralmente com iteráveis(array ou string)
// For in  - Retorna o indice ou chave (string, array ou objetos)
//For of  -  Retorna o valor em si (iteráveis, arrays ou strings)


const nomes = ['celito' , 'luis', 'Kraemer'];


for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}


for (let chave in nomes) {
    console.log(chave, nomes[chave]);
}

// for off
for (let valor of nomes) {
    console.log(valor);
}


nomes.forEach(function(valor, indice, array) {
    console.log(valor, indice, array);
})