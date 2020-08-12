import React, { Component } from 'react';
import firebase from './firebase';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      userInput: ''
    }

  }


  handleChange = (event) => {
    this.setState({
      userInput: event.target.value
    })
  }

  handleClick = (event) => {
    event.preventDefault();

    const dbRef = firebase.database().ref();
    dbRef.push(this.state.userInput);

    this.setState({
      userInput: ''
    })
  }

  
  render() {
    return (

      <section className="formContainer">
  
        <form onChange={this.handleChange} action="submit">
  
          <label htmlFor="note">Write your note here</label>
          <textarea type="text" name="Note" id="note" value={this.state.userInput} onChange={this.handleChange} required></textarea>
  
          <button onClick={this.handleClick} type="submit">Write Note</button>
  
        </form>
  
      </section>
    
    )
  }


}

export default Form;

