import React from 'react';

const ShowroomTile = props => {
  let photo;
  if (props.photo) {
    photo = <img src={props.photo} data-caption={props.text}></img>
  }

  return (

    <div className="boxed col s12 m4 l3">
        {photo}
    </div>
  )
}

export default ShowroomTile
