import React from 'react';
import Image from 'next/image';
import GlobalStyles from './Global.module.scss';
import PlayCircleOutlineRoundedIcon from '@material-ui/icons/PlayCircleOutlineRounded';
const GlobalItems = ({ source, name, artist }) => {
  return (
    <div className={GlobalStyles.global_content}>
      <div className={GlobalStyles.global_content_image_wrapper}>
        <Image
          src={`/${source}.jpg`}
          width={128}
          height={128}
          className={GlobalStyles.global_content_image}
        />
        <div className={GlobalStyles.global_content_icon}>
          <PlayCircleOutlineRoundedIcon />
        </div>
      </div>

      <div className={GlobalStyles.global_content_description}>
        <strong>{name}</strong>
        <p>{artist}</p>
      </div>
    </div>
  );
};

export default GlobalItems;
