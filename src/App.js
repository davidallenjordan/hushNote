import React from 'react';
import Header from './Header';
import Form from './Form';
import CardStack from './CardStack';

const App = () => {

    return (
      // <div className="backgroundContainer">

      <div className="wrapper">

        {/* <div className="flexContainer"> */}

          <div className="layoutContainer">
            <Header />
            <Form />
          </div>

          <CardStack />

        </div>

      // </div>

      // </div>
    )
}

  
  
export default App;
