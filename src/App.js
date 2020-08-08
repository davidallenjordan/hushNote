import React, { Component } from 'react';
import Form from './Form';
import Card from './Card';

class App extends Component {

  render() {

    return (
      <div>

        <header>
          <h1>hush note</h1>
          <Form />
        </header>  
        <Card />  
      </div>
    );
  }
}

export default App;
