import { useEffect, useRef, useState } from 'react';
import './App.css';
//import { createContext, useContext, useReducer, useRef } from 'react';
//import P from 'prop-types';
//import { AppContext } from './contexts/AppContext';
//import { Div } from './components/DivComponent';
//import React, { useState, useEffect, useCallback, useMemo } from 'react';

const useMyHook = (cb, delay) => {
  const saveCb = useRef();

  useEffect(() => {
    saveCb.current = cb;
  }, [cb]);

  useEffect(() => {
    const interval = setInterval(() => {
      saveCb.current();
    }, delay);

    return () => clearInterval(interval);
  }, [delay]);
};

//App.jsx
const App = () => {
  const [counter, setCounter] = useState(0);
  const [delay, setDelay] = useState(1000);
  const [incrementor, setIncrementor] = useState(100);

  useMyHook(() => setCounter((c) => c + 1), delay);

  return (
    <div>
      <h1>Contador: {counter}</h1>
      <p>Delay: {delay} </p>
      <button
        onClick={() => {
          setDelay((d) => d + incrementor);
        }}
      >
        +{incrementor}
      </button>
      <button
        onClick={() => {
          setDelay((d) => d - incrementor);
        }}
      >
        -{incrementor}
      </button>
      <input type="number" value={incrementor} onChange={(e) => setIncrementor(Number(e.target.value))} />
    </div>
  );
};

export default App;

/* useContext + useReducer

 // action.js
export const actions = {
  CHANGE_TITLE: 'CHANGE_TITLE',
};

//data.js
export const globalState = {
  title: 'O título do contexto',
  body: 'O body do contexto',
  counter: 0,
};

//AppContext.jsx
export const Context = createContext();
export const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, globalState);

  const changeTitle = (payload) => {
    dispatch({ type: actions.CHANGE_TITLE, payload });
  };

  return <Context.Provider value={{ state, changeTitle }}>{children}</Context.Provider>;
};

AppContext.propTypes = {
  children: P.node,
};

//reducers
export const reducer = (state, action) => {
  switch (action.type) {
    case actions.CHANGE_TITLE: {
      if (action.payload != 0) {
        console.log('mudar titulo');
        return { ...state, title: action.payload };
      } else {
        console.log('não mudar titulo');
        return { ...state };
      }
    }
  }
  return { ...state };
};

// H1/index.jsx
export const H1 = () => {
  const context = useContext(Context);
  const inputRef = useRef();
  const {
    state: { title, counter, body },
    changeTitle,
  } = context;

  const { CHANGE_TITLE } = actions;

  return (
    <>
      <h1 onClick={() => changeTitle(inputRef.current.value)}>{title}</h1>
      <input type="text" ref={inputRef} />
    </>
  );
};

//App.jsx
const App = () => {
  return (
    <AppContext>
      <div>
        <H1 />
      </div>
    </AppContext>
  );
};
 */

/* useReducer
export const globalState = {
  title: 'O título do contexto',
  body: 'O body do contexto',
  counter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'muda': {
      console.log('Chamou muda com ', action.payload);
      return { ...state, title: action.payload };
    }
    case 'inverter': {
      console.log('Chamou inverter');
      const { title } = state;
      return { ...state, title: title.split('').reverse().join('') };
    }
    case 'inicio': {
      console.log('Chamou inicio');
      return { ...state, title: 'O título do contexto' };
    }
  }
  console.log('Nenhuma action encontrada...');
  return { ...state };
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, globalState);
  const { counter, title, body } = state;

  return (
    <div>
      <h1>
        {title} {counter}
      </h1>
      <button
        onClick={() =>
          dispatch({
            type: 'muda',
            payload: new Date().toLocaleString('pt-br'),
          })
        }
      >
        Click
      </button>
      <button onClick={() => dispatch({ type: 'inicio' })}>inicio</button>
      <button onClick={() => dispatch({ type: 'inverter' })}>inverter</button>
      <button onClick={() => dispatch({ type: '' })}>inverter2</button>
    </div>
  );
};

 */

/* useContext
const App = () => {
  return (
    <AppContext>
      <Div />
    </AppContext>
  );
};

*/

/* useRef
const Post = ({ post, handleClick }) => {
  console.log('Post renderizou');
  return (
    <div key={post.id} className="post">
      <h1 onClick={() => handleClick(post.title)}>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};
Post.propTypes = {
  post: P.shape({
    id: P.number,
    title: P.string,
    body: P.string,
  }),
  handleClick: P.func,
};
function App() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');
  const input = useRef(null);
  const contador = useRef(0);
  console.log('Pai renderizou');
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((r) => r.json())
      .then((r) => setPosts(r));
  }, []);
  useEffect(() => {
    input.current.focus();
    console.log(input.current);
  }, [value]);
  useEffect(() => {
    contador.current++;
  });
  const handleClick = (value) => {
    setValue(value);
  };
  return (
    <div className="App">
      <h6>Renderizou: {contador.current}x</h6>
      <p>
        <input ref={input} type="search" value={value} onChange={(e) => setValue(e.target.value)} />
      </p>
      {useMemo(() => {
        {
          return posts.length > 0 && posts.map((post) => <Post key={post.id} post={post} handleClick={handleClick} />);
        }
      }, [posts])}
      {posts.length <= 0 && <p> Ainda não existem posts</p>}
    </div>
  );
}
*/

/* useMemo
const Post = ({ post }) => {
  console.log('Post renderizou');
  return (
    <div key={post.id} className="post">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};
Post.propTypes = {
  post: P.shape({
    id: P.number,
    title: P.string,
    body: P.string,
  }),
};
function App() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');
  console.log('Pai renderizou');
  useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((r) => r.json())
        .then((r) => setPosts(r));
    }, 5000);
  }, []);
  return (
    <div className="App">
      <p>
        <input type="search" value={value} onChange={(e) => setValue(e.target.value)} />
      </p>
      {useMemo(() => {
        {
          return posts.length > 0 && posts.map((post) => <Post key={post.id} post={post} />);
        }
      }, [posts])}
      {posts.length <= 0 && <p> Ainda não existem posts</p>}
    </div>
  );
}
*/

/* use callback
const Button = ({ incrementButton }) => {
  console.log('filho redenrizou');
  return <button onClick={() => incrementButton(10)}>+</button>;
};
Button.propTypes = {
  incrementButton: P.func,
};
function App() {
  const [counter, SetCounter] = useState(0);
  const incrementCounter = useCallback((num) => {
    SetCounter((c) => c + num);
  }, []);
  console.log('Pai redenrizou');
  const btn = useMemo(() => {
    return <Button incrementButton={incrementCounter} />;
  }, [incrementCounter]);
  return (
    <div className="App">
      <p>Um titulo qualquer</p>
      <h1>C1: {counter}</h1>
      {btn}
    </div>
  );
}
*/
