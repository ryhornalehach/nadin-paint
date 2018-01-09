import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import GalleryTile from '../components/GalleryTile'

class Gallery extends Component {
  constructor(props){
    super(props)
    this.state = {
      categories: null
    }
  }

  componentDidMount() {
    // read the categories from the database
    fetch('/api/v1/categories',{
      credentials: "same-origin"
    })
    .then(response => response.json())
    .then(body => {
        this.setState({ categories: body.categories })
    })
  }

  render() {
    let categories;
    if (this.state.categories) {
      categories = this.state.categories.map((category) => {
        return (
          <GalleryTile
            key={category.id}
            id={category.id}
            photo={category.photo.url}
            name={category.name}
            text={category.text}
          />
        )
      })
    }

    return (
      <div className="row">
        {categories}
      </div>
    )
  }
}

export default Gallery
