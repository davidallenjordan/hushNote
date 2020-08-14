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

  // Tracks character input and checks state
  handleChange = (event) => {
    this.characterLimiter();

      this.setState({
        userInput: event.target.value
      }) 
    
  }

  // Submits the note if the character requirements are met
  handleClick = (event) => {
    event.preventDefault();

    if (!this.state.inputTooShort || !this.state.inputTooLong) {
      const dbRef = firebase.database().ref();
      dbRef.push(this.state.userInput);

      this.setState({
        userInput: ''
      })
    } 

  }

  // Changes the state for the character count 
  characterLimiter = () => {

    if (this.state.userInput.length > 106) {
      this.setState({
        inputTooLong: true
      })
    } else {
      this.setState({
        inputTooLong: false
      })

    }
    
    if (this.state.userInput.length < 30) {
      this.setState({
        inputTooShort: true
      })
    } else {
      this.setState({
        inputTooShort: false
      })
    }
  }

  
  render() {
    return (

      <section className="formContainer">
  
        <form onChange={this.handleChange} action="submit">
  
          <label className="srOnly" htmlFor="note">Write your note here</label>

          <div className="characterLimitMsg">

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

          </div>
            
            <textarea type="text" name="Note" id="note" aria-label="Write here" 
              value={this.state.userInput} onChange={this.handleChange} placeholder="start writing here...">
            </textarea>

            {
              this.state.inputTooShort || this.state.inputTooLong
              ? <button onClick={ (event) => event.preventDefault() } aria-label="note must be between 30 and 100 characters to submit">Write Note</button>
              : <button onClick={this.handleClick} type="submit">Write Note</button>
            }
  
        </form>
  
      </section>
    
    )
  }


}

export default Form;

