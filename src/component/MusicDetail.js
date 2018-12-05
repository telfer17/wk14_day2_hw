import React from 'react';

const MusicDetail = (props) => {

  return (
    <div className="song">
      {props.title} - {props.artist}
    </div>
  );
}

export default MusicDetail;
