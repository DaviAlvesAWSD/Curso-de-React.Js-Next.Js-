import { useContext } from 'react';
import { GlobalContext } from '../../contexts/AppContext';

// eslint-disable-next-line
export const Paragrafo = () => {
  const TheContext = useContext(GlobalContext);
  const {
    state: { body, counter },
    setState,
  } = TheContext;
  return <p onClick={() => setState((s) => ({ ...s, counter: s.counter + 1 }))}>{body}</p>;
};
