import logo from './logo.svg';
import './App.css';
import KeyWordCheckbox from './components/UI/check-box/KeyWordCheckbox';
import React, { useState } from 'react';
import MainButton from './components/UI/button/MainButton';

function App() {

  const [checked, setChecked] = useState(false);

  const toggleChecked = () => {
    setChecked(!checked);
  };

  const doNothing = (e) => {
    e.preventDefault();
  }

  return (
    <div className="App">

      {/* test checkbox START */}
      <KeyWordCheckbox
        isNameIdFor="react"
        value={checked}
        onChange={toggleChecked}
      >
        React
      </KeyWordCheckbox>

      <KeyWordCheckbox
        isNameIdFor="c-sharp"
        value={checked}
        onChange={toggleChecked}
      >
        C#
      </KeyWordCheckbox>

      <KeyWordCheckbox
        isNameIdFor="js"
        value={checked}
        onChange={toggleChecked}
      >
        JavaScript
      </KeyWordCheckbox>
      {/* test checkbox END */}

      {/* test button START */}
      <MainButton onClick={doNothing}>Найти похожие</MainButton>
      {/* test button START */}

    </div>
  );
}

export default App;
