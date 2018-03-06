import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import ShowroomTile from '../components/ShowroomTile'
import LightboxCss from '../components/LightboxCss'

class Showroom extends Component {
  constructor(props){
    super(props)
    this.state = {
      artworks: null,
      photoIndex: 0,
      isOpen: false
    }
    this.handleImagePush = this.handleImagePush.bind(this);
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

  handleImagePush(event) {
    // setting the state to 'open' and the index of the photo needs to be parsed from the id of the element
      this.setState({ isOpen: true, photoIndex: parseInt(event.target.id) })
  }


  render() {
    let artworks, lightboxCSS;
    if (this.state.artworks) {
      // mapping the artworks and creating the array of 'ShowroomTiles'
      artworks = this.state.artworks.map((artwork, index) => {
        return (
          <ShowroomTile
              key={artwork.id}
              photo={artwork.photo.thumb.url}
              text={artwork.text}
              handleImagePush={this.handleImagePush}
              index={index}
          />
        )
      })
    }
    if (this.state.isOpen) {  // displaying the lightbox
      lightboxCSS = <LightboxCss
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                          this.setState({ photoIndex: (this.state.photoIndex + this.state.artworks.length - 1) % this.state.artworks.length })
                        }
                        onMoveNextRequest={() =>
                          this.setState({ photoIndex: (this.state.photoIndex + 1) % this.state.artworks.length })
                        }
                        photoUrl={this.state.artworks[this.state.photoIndex].photo.url}
                        totalPhotos={this.state.artworks.length}
                        photoIndex={parseInt(this.state.photoIndex) + 1}
                        text={this.state.artworks[this.state.photoIndex].text}
                    />
    }

    return (
      <div className="row">
        {artworks}
        {lightboxCSS}
      </div>
    )
  }
}

export default Showroom
