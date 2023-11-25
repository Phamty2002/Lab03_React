import React from 'react';

const MyButton = ({ text, disabled, onClick }) => {
  return (
    <button disabled={disabled} onClick={onClick}>
      {text}
    </button>
  );
};

MyButton.defaultProps = {
  text: 'My Button',
};

export default MyButton;
