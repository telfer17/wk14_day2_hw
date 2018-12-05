import React from 'react';
import MusicDetail from './MusicDetail';

const MusicList = (props) => {

  const chart = props.songs.map((song, index) => {
    return (
      <MusicDetail
      key={index}
      title={song["im:name"].label}
      artist={song["im:artist"].label}
      artwork={song["im:image"][2].label}
      sample={song.link[1].attributes.href}
      />
    )
  });

  return (
    <div className="chart-list">
        {chart}
    </div>
  )
}

export default MusicList;
