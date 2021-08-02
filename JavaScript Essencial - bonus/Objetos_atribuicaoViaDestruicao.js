const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
  endereco: { rua: 'Av Brazil', numero: 320 }
};

//Atriuição via Desestruturação
//const { nome, sobrenome, endereco: { rua: r = '', numero } } = pessoa;
//console.log(nome, sobrenome);
const { nome, ...resto } = pessoa;
console.log(nome, resto);