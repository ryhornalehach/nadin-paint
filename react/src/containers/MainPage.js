import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

class MainPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      categories: null
    }
  }

  componentDidMount() {
  }

  render() {

    return (
      <div className="row">
          Hi from react
      </div>
    )
  }
}

export default MainPage
