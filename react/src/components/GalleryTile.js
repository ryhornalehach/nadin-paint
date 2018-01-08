import React from 'react';

const GalleryTile = props => {
  let photo;
  if (props.photo) {
    photo = <img src={props.photo}></img>
  }

  return (
    <li>
        {photo}
        <div className="caption center-align black-text">
          <h1>{props.name}</h1>
          <h2>{props.text}</h2>
        </div>
    </li>
  )
}

export default GalleryTile
