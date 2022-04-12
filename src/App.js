import './App.css';
import React, { useState } from 'react';
import Header from './components/header/Header';
import PostsList from './components/posts_list/PostsList';
import usePosts from './components/hooks/usePosts';
import postsArray from './db/db_posts';

function App() {

  const [posts, setPosts] = useState(postsArray);
  const [filter, setFilter] = useState('');
  const searchedAndSortedPosts = usePosts(posts, filter);

  

  return (
    <div className="App">
      <Header filter={filter} setFilter={setFilter} />
      <div className="wrapper">

        <main className='content'>
          <PostsList posts={searchedAndSortedPosts} />
        </main>

      </div>
    </div>
  );
}

export default App;
