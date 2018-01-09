import React from 'react';

const GalleryTile = props => {
  let photo;
  if (props.photo) {
    photo = <img src={props.photo} className="activator"></img>
  }

  return (

    <div className="card categories col s12 m4 l3">
      <div className="card-image waves-effect waves-block waves-light">
        <a href={`/gallery/${props.id}`}>{photo}</a>
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4"><a className="font-cursive large-160 black-text" href={`/gallery/${props.id}`}>{props.name}</a><i className="material-icons right">more_vert</i></span>
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">{props.name}<i className="material-icons right">close</i></span>
        <p>{props.text}</p>
      </div>
    </div>
  )
}

export default GalleryTile
