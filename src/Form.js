import React, { Component } from 'react';
import App from './App';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      note: '',
      tag: ''
    }

  }
  render() {
    return (
      <form>

        <label htmlFor="note">Write your note here</label>
        <textarea name="Note" id="note" placeholder="note" value={this.state.note}></textarea>

        <label htmlFor="tag">Write one word to describe your note</label>
        <input type="text" id="tag" placeholder="Tag" value={this.state.tag}/>

      </form>
    )
  }
}

export default Form;

