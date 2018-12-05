import React from 'react';

const MusicDetail = (props) => {

  return (
    <div className="song">
    <img id="artwork" src={props.artwork} alt="artwork"/>
      <h2>{props.title}</h2>
      <h2>{props.artist}</h2>
      <audio src={props.sample} controls="controls"/>
    </div>
  );
}

export default MusicDetail;
