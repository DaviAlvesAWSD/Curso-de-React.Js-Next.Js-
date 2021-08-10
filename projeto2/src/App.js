import P from 'prop-types';
import './App.css';
import React, { useState, useEffect, useCallback } from 'react';

//
const Button = React.memo(function Button({ incrementButton }) {
  console.log('filho redenrizou');
  return <button onClick={() => incrementButton(10)}>+</button>;
});

Button.propTypes = {
  incrementButton: P.func,
};

function App() {
  const [counter, SetCounter] = useState(0);

  const incrementCounter = useCallback((num) => {
    SetCounter((c) => c + num);
  }, []);

  console.log('Pai redenrizou');

  return (
    <div className="App">
      <p>Teste 4</p>
      <h1>C1: {counter}</h1>
      <Button incrementButton={incrementCounter} />
    </div>
  );
}

export default App;
