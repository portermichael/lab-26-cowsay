import './style/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import cowsay from 'cowsay-browser';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cowsay: `${faker.company.bsBuzz()} up the team!!!`,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => {
      return {
        cowsay: `${faker.company.bsBuzz()} up the team!!!`,
      }
    });
  }
  render() {
    return (
      <div>
        <h1>Generate Cowsay Lorem</h1>
        <button onClick={this.handleClick}>Click Me!</button>
        <pre>{cowsay.say({text: this.state.cowsay})}</pre>
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'));
