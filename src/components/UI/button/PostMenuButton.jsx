
import React from 'react';
import './post-menu-button.css';

const PostMenuButton = ({ active, setActive, postId }) => {

    const openModal = () => {
        setActive(true);
        // console.log(postId);
    }

    return (
        <div className={'post-menu'} onClick={openModal} >
            <div className={ active ? 'post-menu__square post-menu__square_first active' : 'post-menu__square post-menu__square_first' }></div>
            <div className={ active ? 'post-menu__square post-menu__square_second active' : 'post-menu__square post-menu__square_second' }></div>
            <div className={ active ? 'post-menu__square post-menu__square_third active' : 'post-menu__square post-menu__square_third' }></div>
        </div>
    );
};

export default PostMenuButton;