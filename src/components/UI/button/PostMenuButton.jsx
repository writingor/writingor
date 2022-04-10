
import React from 'react';
import './post-menu-button.css';

const PostMenuButton = ({ children, ...props }) => {

    return (
        <div {...props} className={'post-menu'}>
            <div className={'post-menu__square post-menu__square_first'}></div>
            <div className={'post-menu__square post-menu__square_second'}></div>
            <div className={'post-menu__square post-menu__square_third'}></div>
        </div>
    );
};

export default PostMenuButton;