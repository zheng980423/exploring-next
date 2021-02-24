import React from 'react';
import GlobalItems from './GlobalItems';
import GlobalStyles from './Global.module.scss';
import Title from '../Title/Title';
const Global = ({ title }) => {
  return (
    <div className={GlobalStyles.global}>
      {/* <div className={GlobalStyles.global_title}>
        <strong>Global Top 50</strong>
        <button>See all</button>
      </div> */}
      <Title title={title} />
      <div className={GlobalStyles.global_content_wrapper}>
        <GlobalItems source="en" name="嗯" artist="李荣浩" />
        <GlobalItems source="erduo" name="嗯" artist="李荣浩" />
        <GlobalItems source="maque" name="嗯" artist="李荣浩" />
      </div>
    </div>
  );
};
export default Global;
