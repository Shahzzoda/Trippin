import React from 'react';
function ImageCard(props) {
  // import photo from String(".." + props.coverPhoto);
  return (
    <div className="col-4" onClick={props.onClick}>
        <img className="img-thumbnail img-responsive" src={props.src} alt="sally's icon"/>
    </div>
  );
}

export default ImageCard;