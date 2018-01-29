import React from 'react';

const ShowroomTile = props => {
  let photo;
  if (props.photo) {
    photo = <img src={props.photo} data-caption={props.text} onClick={props.handleImagePush} id={props.index}></img>
  }

  return (

    <div className="no-padding col s12 m4 l3">
        <div className="boxed">
            {photo}
        </div>
    </div>
  )
}

export default ShowroomTile
