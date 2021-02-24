import React from 'react';
import Image from 'next/image';
import GlobalItemsStyles from './GlobalItems.module.scss';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
const GlobalItems = ({ source, name, artist }) => {
  return (
    <div className={GlobalItemsStyles.global_content}>
      <div className={GlobalItemsStyles.global_content_image_wrapper}>
        <Image
          src={`/${source}.jpg`}
          width={128}
          height={128}
          className={GlobalItemsStyles.global_content_image}
        />
        <div className={GlobalItemsStyles.global_content_icon}>
          <PlayArrowIcon />
        </div>
      </div>

      <div className={GlobalItemsStyles.global_content_description}>
        <strong>{name}</strong>
        <p>{artist}</p>
      </div>
    </div>
  );
};

export default GlobalItems;
