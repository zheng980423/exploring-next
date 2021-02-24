import React from 'react';
import Button from '../Button/Button';
import TitleStyles from './Title.module.scss';

const Title = ({ title }) => {
  return (
    <div className={TitleStyles.global_title}>
      <strong>{title}</strong>
      <Button value={`See all`} />
    </div>
  );
};

export default Title;
