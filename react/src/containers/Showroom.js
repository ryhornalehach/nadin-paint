import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import ShowroomTile from '../components/ShowroomTile'
import Lightbox from 'react-image-lightbox';

class Showroom extends Component {
  constructor(props){
    super(props)
    this.state = {
      artworks: null
    }
  }

  componentDidMount() {
    let idRegex = /[0-9]+\/{0,1}$/  // regular expression for ID
    let categoryId = this.props.location.pathname.match(idRegex)[0]   // getting the current category id
    fetch(`/api/v1/artworks/${categoryId}`,{      // read the corresponding category artworks from the database
      credentials: "same-origin"
    })
    .then(response => response.json())
    .then(body => {
        this.setState({ artworks: body.artworks })
    })
  }

  render() {
    let artworks;
    if (this.state.artworks) {
      artworks = this.state.artworks.map((artwork) => {
        return (
          <ShowroomTile
            key={artwork.id}
            photo={artwork.photo.url}
            text={artwork.text}
          />
        )
      })
    }

    return (
      <div className="row">
        {artworks}
      </div>
    )
  }
}

export default Showroom
