import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import MyButton from './MyButton';

const App = () => {
  const [first, setFirst] = useState({
    text: 'First Button',
    disabled: false,
  });

  const [second, setSecond] = useState({
    text: 'Second Button',
    disabled: false,
  });

  const toggleFirstButton = () => {
    setFirst((prevState) => ({
      ...prevState,
      disabled: !prevState.disabled,
    }));
  };

  const toggleSecondButton = () => {
    setSecond((prevState) => ({
      ...prevState,
      disabled: !prevState.disabled,
    }));
  };

  return (
    <main>
      <MyButton
        text={first.text}
        disabled={first.disabled}
        onClick={toggleFirstButton}
      />
      <MyButton
        text={second.text}
        disabled={second.disabled}
        onClick={toggleSecondButton}
      />
    </main>
  );
};

export default App;
