function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg != 'string') {
      reject(new Error(msg + ' não é uma string'));
      return;
    }



    setTimeout(() => {
      resolve(msg.toUpperCase() + ' - Passei na promisse');
      return;
    }, tempo);
  });
}

// Promise.all Promise.race Promise.resolve Promise.reject
const promises = [
  //'Primeira valor',
  esperaAi('Promise 1', rand(1, 5)),
  esperaAi('Promise 2', rand(1, 5)),
  esperaAi('Promise 3', rand(1, 5)),
  // esperaAi(1000, 1000),
  //'Outro valor'
];

// Promise.all
Promise.all(promises)
  .then(function (valor) {
    console.log(valor);
  })
  .catch(function (erro) {
    console.log(erro);
  });


//Promise.race
Promise.race(promises)
  .then(function (valor) {
    console.log(valor);
    console.log('---------------')
  })
  .catch(function (erro) {
    console.log(erro);
  });


function baixaPagina() {
  const emCache = true;

  if (emCache) {
    return Promise.resolve('Página em cache');
  } else {
    return esperaAi('Baixei a página', rand(1, 3));
  }
}

baixaPagina()
  .then(dadosPagina => {
    console.log(dadosPagina);
  })
  .catch(e => console.log('ERRO', e));