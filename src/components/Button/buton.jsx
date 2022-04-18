import React from 'react';
import './button.css'

function Button({
  buttonOnClick,
  children,
  typebutton

}) {
  return (
    <button onClick={buttonOnClick} className='btn-global' type={typebutton}>{children}</button>
  );
}

export default Button;