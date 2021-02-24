import React from 'react';
import Image from 'next/image';
import RecentItemsStyles from './RecentItems.module.scss';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import AddBoxRoundedIcon from '@material-ui/icons/AddBoxRounded';
const RecentItems = () => {
  return (
    <div className={RecentItemsStyles.general}>
      <ul>
        <li className={RecentItemsStyles.li_wrapper}>
          <div className="general-list">
            <div className={RecentItemsStyles.general_info}>
              <div className={RecentItemsStyles.general_sq}>
                <p>01</p>
              </div>
              <div className={RecentItemsStyles.general_info_img}>
                <Image
                  className={RecentItemsStyles.general_info_img_item}
                  src="/mote.jpg"
                  width={50}
                  height={50}
                />
              </div>
              <div className={RecentItemsStyles.general_info_description}>
                <div
                  className={RecentItemsStyles.general_info_description_title}
                >
                  <strong>I Miss You</strong>
                </div>
                <div
                  className={RecentItemsStyles.general_info_description_artist}
                >
                  <p>Blink 182</p>
                </div>
              </div>
            </div>
          </div>

          <div className={RecentItemsStyles.general_details}>
            <div className={RecentItemsStyles.general_details_duration}>
              <small>3:45</small>
            </div>
            <div className={RecentItemsStyles.general_details_icon}>
              <PlayArrowIcon />
            </div>
            <div className={RecentItemsStyles.general_details_create}>
              <AddBoxRoundedIcon />
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default RecentItems;
