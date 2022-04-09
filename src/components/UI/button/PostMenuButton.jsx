
import React from 'react';
import classes from './PostMenuButton.module.css';

const PostMenuButton = (activeClass) => {

    return (
        <div className={classes.PostMenuButton}>
            <div className={classes.PostMenuButton__square + ' ' + classes.PostMenuButton__square_first + ' ' + activeClass}></div>
            <div className={classes.PostMenuButton__square + ' ' + classes.PostMenuButton__square_second}></div>
            <div className={classes.PostMenuButton__square + ' ' + classes.PostMenuButton__square_third}></div>
        </div>
    );
};

export default PostMenuButton;