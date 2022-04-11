import './App.css';
import KeyWordCheckbox from './components/UI/check-box/KeyWordCheckbox';
import React, { useState } from 'react';
import MainButton from './components/UI/button/MainButton';
import PostItem from './components/post/PostItem';
import Header from './components/header/Header';
import PostModal from './components/UI/modal/PostModal';
import PostMenuButton from './components/UI/button/PostMenuButton';

function App() {

  const [checked, setChecked] = useState(false);
  const [postModalActive, setPostModalActive] = useState(false);

  const toggleChecked = () => {
    setChecked(!checked);
  };

  const doNothing = (e) => {
    e.preventDefault();
  }



  return (
    <div className="App">

      <Header></Header>

      <div className="wrapper">

        <main className='content'>
          {/* test Post START */}
          <PostItem onClick={doNothing}>
            <PostMenuButton active={postModalActive} setActive={setPostModalActive} />
          </PostItem>

          <PostItem onClick={doNothing}>
            <PostMenuButton active={postModalActive} setActive={setPostModalActive} />
          </PostItem>
          {/* test Post END */}
        </main>

        {/* test modal START */}


        <PostModal active={postModalActive} setActive={setPostModalActive} >
          {/* children here */}
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
          <MainButton>Найти похожие</MainButton>
        </PostModal>
        {/* test modal END */}

      </div>

    </div>
  );
}

export default App;
