import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

class MainPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      selected: null
    }
  }

  render() {

    return (
      <div className='row'>
          Hi there
      </div>
    )
  }
}

export default MainPage
