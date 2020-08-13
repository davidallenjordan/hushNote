import React, { Component } from 'react';
import firebase from './firebase';


class CardStack extends Component {
  constructor() {
    super();

      this.state = {
        submission: []
      }

  }


  deleteNote(key) {
    const dbRef = firebase.database().ref();
    dbRef.child(key).remove();
  }


  render () {
    return (
      <section className="cardStack">
        <ul>

          {this.state.submission.map((submission) => {
            return (
              <li className="cardContainer" key={submission.key}>
                <button onClick={() => this.deleteNote(submission.key)} aria-label="Delete Card"><i className="fas fa-times"></i></button>
                <p>{submission.note}</p>
              </li>
            )
          })}

        </ul>
      </section>
    )
  }


  componentDidMount() {
    const dbRef = firebase.database().ref();

    dbRef.on('value', (response) => {
      const newState = [];

      const data = response.val();

      for (let key in data) {
        newState.push({ key: key, note: data[key] });
      }

      this.setState({
        submission: newState
      });

    })
  }


}

export default CardStack;
