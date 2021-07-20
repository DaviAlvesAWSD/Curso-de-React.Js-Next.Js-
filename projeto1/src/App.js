import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

// component de class sem estado
class App extends Component {
  state = {
    name: 'Davi Alves',
    counter: 0
  };


  handlePClick = () => {
    this.setState({ name: 'alfredo' });
    //  const { name } = this.state;
    //  console.log(`<p>clicado ${name}`);
  }

  handleAClick = (event) => {
    event.preventDefault();
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });

  }


  render() {
    const { name, counter } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={this.handlePClick}>
            {name} {counter}
          </p>
          <a
            onClick={this.handleAClick}
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Este é o link!
          </a>
        </header>
      </div>
    );
  }
}

/*component de função
function App() {
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      );
}
      */
export default App;
