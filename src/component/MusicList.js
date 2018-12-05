import React from 'react';
import MusicDetail from './MusicDetail';

const MusicList = (props) => {

  const chart = props.songs.map((song, index) => {
    return (
      <MusicDetail key={index} title={song["im:name"].label} artist={song["im:artist"].label} />
    )
  });

  return (
    <div className="chart-list">
        {chart}
    </div>
  )
}

export default MusicList;
