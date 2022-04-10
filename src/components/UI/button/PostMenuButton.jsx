
import React, { useEffect } from 'react';
import css from './PostMenuButton.module.css';

const PostMenuButton = ({ children, isActive, ...props }) => {
    
    return (
        <div {...props} className={css.PostMenuButton}>
            <div className={css.PostMenuButton__square + ' ' + css.PostMenuButton__square_first}></div>
            <div className={css.PostMenuButton__square + ' ' + css.PostMenuButton__square_second}></div>
            <div className={css.PostMenuButton__square + ' ' + css.PostMenuButton__square_third}></div>
        </div>
    );
};

export default PostMenuButton;