class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
  falar() {
    console.log(`${this.nome} esta falando`);
  }


}

const p1 = new Pessoa('Luiz', 'Miranda');
const p2 = new Pessoa('Luiz', 'Miranda');
const p3 = new Pessoa('Luiz', 'Miranda');
const p4 = new Pessoa('Luiz', 'Miranda');

console.log(p1);
console.log(p2);
console.log(p3);
console.log(p4);
