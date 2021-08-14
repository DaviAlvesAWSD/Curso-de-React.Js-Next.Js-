import './App.css';
import { AppContext } from './contexts/AppContext';
import { Div } from './components/DivComponent';
//import React, { useState, useEffect, useCallback, useMemo } from 'react';

const App = () => {
  return (
    <AppContext>
      <Div />
    </AppContext>
  );
};

export default App;





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

