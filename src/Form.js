import React, { Component } from 'react';
import firebase from './firebase';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      userInput: '',
      inputTooShort: true,
      inputTooLong: false
    }



  }


  handleChange = (event) => {
    if (this.state.inputTooShort) {
      this.characterLimit();
    }
      this.setState({
        userInput: event.target.value
      }) 
    
  }

  handleClick = (event) => {
    event.preventDefault();

    this.characterLimit();

    const dbRef = firebase.database().ref();
    dbRef.push(this.state.userInput);


    this.setState({
      userInput: ''
    })
  }



  characterLimit = () => {

    if (this.state.userInput.length > 120) {
      this.setState({
        inputTooLong: true
      })
    }
    
    if (this.state.userInput.length < 40) {
      this.setState({
        inputTooShort: true
      })
    }
  }

  
  render() {
    return (

      <section className="formContainer">
  
        <form onChange={this.handleChange} action="submit">
  
          <label className="srOnly" htmlFor="note">Write your note here</label>

          {
            this.state.inputTooShort 
            ? <p>The note is too short, please type more</p>
            : null
          }
          {
            this.state.inputTooLong
            ? <p>The note is too long, please type less</p>
            : null
          }

            
            <textarea type="text" name="Note" id="note" aria-label="Write here"
              value={this.state.userInput}
              onChange={this.handleChange} placeholder="start writing..."></textarea>
  
          <button onClick={this.handleClick} type="submit">Write Note</button>
  
        </form>
  
      </section>
    
    )
  }


}

export default Form;

