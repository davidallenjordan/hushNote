import React from 'react';
import Header from './Header';
import Form from './Form';
import CardStack from './CardStack';

const App = () => {

    return (

      <div className="wrapper">

        <div className="layoutContainer">
          <Header />
          <Form />
        </div>

        <CardStack />

      </div>

    )
}

  
  
export default App;
