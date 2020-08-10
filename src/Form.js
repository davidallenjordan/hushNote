import React, { Component } from 'react';
import firebase from './firebase';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      submission: [],
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

  deleteNote(key) {
    const dbRef = firebase.database().ref();
    dbRef.child(key).remove();
  }

  
  
  render() {
    return (
      <div className="wrapper">
        <main>

          <form onChange={this.handleChange} action="submit">

            <label htmlFor="note">Write your note here</label>
            <input type="text" name="Note" id="note" value={this.state.userInput} onChange={this.handleChange} required></input>

            <button onClick={this.handleClick} type="submit">Write Note</button>

          </form>

          <ul>

          {this.state.submission.map((submission) => {
              return (
                <li key={submission.key}>
                  <button onClick={() => this.deleteNote(submission.key)}>X</button>
                  <p>{submission.note}</p>
                </li>
              )
            })}

          </ul>

        </main>
      </div>
    )
  }

  componentDidMount() {
    const dbRef = firebase.database().ref();

    dbRef.on('value', (response) => {
      const newState = [];

      const data = response.val();

      for (let key in data) {
        newState.push({key: key, note: data[key]});
      }

      this.setState({
        submission: newState
      });

    })
  }
}

export default Form;

