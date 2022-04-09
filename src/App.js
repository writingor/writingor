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

      {/* test checkbox start */}
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
      {/* test checkbox end */}

    </div>
  );
}

export default App;
