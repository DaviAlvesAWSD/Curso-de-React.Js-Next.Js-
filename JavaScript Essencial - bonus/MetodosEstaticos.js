class ControleRemoto {
  constructor(tv) {
    this.tv = tv
    this.volume = 0;
  }

  aumentarVolume() {
    this.volume += 2;
  }
  diminuirVolume() {
    this.volume -= 2;
  }
  // metodo estatico
  static soma(x, y) {
    return x + y;
  }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
console.log(controle1);

const controle2 = new ControleRemoto('Teste');
controle2.aumentarVolume();
console.log(controle2);

console.log(ControleRemoto.soma(2, 4));