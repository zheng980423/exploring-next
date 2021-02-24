import React, { useState } from 'react';
import GlobalItems from './GlobalItems';
import GlobalStyles from './Global.module.scss';
import Title from '../Title/Title';
const Global = ({ title, songs }) => {
  return (
    <div className={GlobalStyles.global}>
      {/* <div className={GlobalStyles.global_title}>
        <strong>Global Top 50</strong>
        <button>See all</button>
      </div> */}
      <Title title={title} />
      <div className={GlobalStyles.global_content_wrapper}>
        {songs.map(song => (
          <GlobalItems
            source={song.source}
            name={song.name}
            artist={song.artist}
            key={song.id}
          />
        ))}
      </div>
    </div>
  );
};
export default Global;
