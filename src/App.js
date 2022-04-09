import logo from './logo.svg';
import './App.css';
import KeyWordCheckbox from './components/UI/check-box/KeyWordCheckbox';
import React, { useState } from 'react';

function App() {

  const [checked, setChecked] = useState(false);

  const toggleChecked = () => {
    setChecked(!checked);
  };

  return (
    <div className="App">
      <KeyWordCheckbox
        isNameIdFor="react"
        value={checked}
        onChange={toggleChecked}
      >
        React
      </KeyWordCheckbox>
    </div>
  );
}

export default App;
