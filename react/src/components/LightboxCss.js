import React from 'react';

const LightboxCss = props => {

  return (

    <div className="background">
        <span className="close cursor" onClick={props.onCloseRequest}>&times;</span>
        <div className="lightbox-content">

            <div className="mySlides">
                <div className="numbertext">{props.photoIndex} / {props.totalPhotos}</div>
                <img src={props.photoUrl} ></img>
            </div>


            <a className="prev" onClick={props.onMovePrevRequest}>&#10094;</a>
            <a className="next" onClick={props.onMoveNextRequest}>&#10095;</a>

            <div className="caption-container">
                <p>{props.text}</p>
            </div>


        </div>
    </div>
  )
}

export default LightboxCss
