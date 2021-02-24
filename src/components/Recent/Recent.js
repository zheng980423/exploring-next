import React from 'react';
import Title from '../Title/Title';
import RecentStyles from './Recent.module.scss';
const Recent = () => {
  return (
    <div className={RecentStyles.recent_wrapper}>
      <Title title={'Recent Played'} />
    </div>
  );
};

export default Recent;
