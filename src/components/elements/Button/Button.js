import React from 'react';

const Button = (props) => {
  const { className, title, onClick } = props;
  return (
    <button className={['btn', className].join(' ')} onClick={onClick} type="button">{title}</button>
  );
};

export default Button;

Button.defaultProps = {
  className: '',
  onClick: undefined,
  title: 'button'
};
