import { useContext } from 'react';
import { GlobalContext } from '../../contexts/AppContext';

// eslint-disable-next-line
export const H1 = () => {
  const TheContext = useContext(GlobalContext);
  const {
    state: { title, counter },
  } = TheContext;
  return (
    <h1>
      {title}
      <br />
      {counter}
    </h1>
  );
};
