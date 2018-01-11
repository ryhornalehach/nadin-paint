import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import ShowroomTile from '../components/ShowroomTile'
import Lightbox from 'react-image-lightbox';

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
      this.setState({ isOpen: true, photoIndex: event.target.id })
  }


  render() {
    let artworks, lightbox;
    let images = [];
    if (this.state.artworks) {
      artworks = this.state.artworks.map((artwork, index) => {
        images.push(artwork.photo.url)

        return (
          <ShowroomTile
            key={artwork.id}
            photo={artwork.photo.url}
            text={artwork.text}
            handleImagePush={this.handleImagePush}
            index={index}
          />
        )
      })
    }
    if (this.state.isOpen) {  // displaying the lightbox
      lightbox = <Lightbox
                    mainSrc={images[this.state.photoIndex]}
                    nextSrc={images[(this.state.photoIndex + 1) % images.length]}
                    prevSrc={images[(this.state.photoIndex + images.length - 1) % images.length]}
                    onCloseRequest={() => this.setState({ isOpen: false })}
                    onMovePrevRequest={() =>
                      this.setState({
                        photoIndex: (this.state.photoIndex + images.length - 1) % images.length,
                      })
                    }
                    onMoveNextRequest={() =>
                      this.setState({
                        photoIndex: (this.state.photoIndex + 1) % images.length,
                      })
                    }
                />
    }

    return (
      <div className="row">
        {artworks}
        {lightbox}
      </div>
    )
  }
}

export default Showroom
