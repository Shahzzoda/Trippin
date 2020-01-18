import React from 'react';

function ModalMedia(props) {
  return (
    <div className="col-4">
        <img className="img-thumbnail img-responsive" src={props.src} alt="sally's icon"/>
        <h3>{props.name}</h3>
        <p>{props.desc}</p>
    </div>
  );
}

export default ModalMedia;