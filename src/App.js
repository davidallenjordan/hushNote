import React, { Component, Fragment} from 'react';
import Header from './Header';
import Form from './Form';

// import Header from './Header';
// import Card from './Card';

class App extends Component {
  render() {
    return (
      <div className="backgroundContainer">
        <div className="layoutContainer">
        <Header />
        <Form />
        </div>
      </div>
    )
  }
}

  
  
export default App;
