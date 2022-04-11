import './App.css';
import React from 'react';
import Header from './components/header/Header';
import PostsList from './components/posts_list/PostsList';

function App() {

  return (
    <div className="App">

      <Header></Header>

      <div className="wrapper">

        <main className='content'>

          {/* test postlist START*/}
          <PostsList></PostsList>
          {/* test postlist END */}
        </main>


       

      </div>

    </div>
  );
}

export default App;
