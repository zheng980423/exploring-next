import React from 'react';
import buttonStyles from './Button.module.scss';

const Button = ({ value }) => {
  return <button className={buttonStyles.btn}>{value}</button>;
};

export default Button;
