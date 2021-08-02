// Declaração de função (Function hoisting)
function falaOi() {
  console.log('oi');
}
falaOi();


// First-class Objects (Objetos de primeira classe)
// Function expression
const SouUmDado = function () {
  console.log('Sou um dado');
};

function executaFuncao(UmaFuncao) {
  //  console.log('Vou executar sua função a baixo: ');
  UmaFuncao();
}
executaFuncao(SouUmDado);

// Arrow function
const funcaoArrow = () => {
  console.log('Sou uma arrow function');
};
funcaoArrow();

// Dentro de um objeto
const obj = {
  falar() {
    console.log('Estou falando...');
  }
}
obj.falar();
