import React from 'react';
import Title from '../Title/Title';
import RecentStyles from './Recent.module.scss';
import RecentItems from './RecentItems';
const Recent = ({ songs }) => {
  return (
    <div className={RecentStyles.recent_wrapper}>
      <Title title={'Recent Played'} />
      <div className={RecentStyles.recent_content_wrapper}>
        <RecentItems />
      </div>
    </div>
  );
};

export default Recent;
