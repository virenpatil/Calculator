import React from 'react';
import './Button.css';
export default ({ onButtonClick, buttonKey}) => {
  let handleClick = (e) => { onButtonClick(e.target.textContent) }
    return (
    <button
      name={buttonKey}
      onClick={handleClick}
    >
      { buttonKey }
    </button>
  );
}