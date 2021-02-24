import React from 'react';
import GlobalStyles from '../Global/Global.module.scss';

const Title = ({ title }) => {
  return (
    <div className={GlobalStyles.global_title}>
      <strong>{title}</strong>
      <button>See all</button>
    </div>
  );
};

export default Title;
