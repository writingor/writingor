import './App.css';
import KeyWordCheckbox from './components/UI/check-box/KeyWordCheckbox';
import React, { useState } from 'react';
import MainButton from './components/UI/button/MainButton';
import PostMenuButton from './components/UI/button/PostMenuButton';
import PostItem from './components/post/PostItem';

function App() {

  const [checked, setChecked] = useState(false);
  const [isActive, setActive] = useState(false);

  const toggleChecked = () => {
    setChecked(!checked);
  };

  const doNothing = (e) => {
    e.preventDefault();
  }

  const togglePostMenuButton = () => {
      setActive(!isActive);
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
      {/* test button END */}

      {/* test post menu button START */}
      {/* don't wor toggle class */}
      <PostMenuButton onClick={togglePostMenuButton}></PostMenuButton>
      <PostMenuButton onClick={togglePostMenuButton}></PostMenuButton>
      {/* test post menu button END */}

      {/* test Post START */}
      <PostItem onClick={doNothing}></PostItem>
      {/* test Post END */}

    </div>
  );
}

export default App;
