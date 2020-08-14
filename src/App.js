import React, { Fragment } from 'react';
import Header from './Header';
import Form from './Form';
import CardStack from './CardStack';
import Footer from './Footer';

// All the components are collected and displayed to the page
const App = () => {

  return (
    <Fragment>

      <div className="wrapper">

        <div className="layoutContainer">
          <Header />
          <Form />
        </div>

        <CardStack />

      </div>

      <Footer />

    </Fragment>
  )
}

  
  
export default App;
