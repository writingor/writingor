import logo from './logo.svg';
import './App.css';
import KeyWordCheckbox from './components/UI/check-box/KeyWordCheckbox';
import React, { useState } from 'react';
import MainButton from './components/UI/button/MainButton';
import PostMenuButton from './components/UI/button/PostMenuButton';

function App() {

  const [checked, setChecked] = useState(false);
  const [isActive, setIsActive] = useState('');

  const toggleChecked = () => {
    setChecked(!checked);
  };

  const doNothing = (e) => {
    e.preventDefault();
  }

  const togglePostMenuButton = () => {
      isActive === '' ? setIsActive('active'): setIsActive('');
      console.log(isActive);
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

      {/* test post menu button START */}
      <div onClick={togglePostMenuButton} className={isActive}>
        <PostMenuButton id="post-menu-button-1" activeClass={isActive} />
      </div>
      {/* test post menu button START */}

    </div>
  );
}

export default App;
