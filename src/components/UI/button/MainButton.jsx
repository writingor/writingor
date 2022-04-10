
import React from 'react';
import css from './MainButton.module.css';

const MainButton = ({children, ...props}) => {

    return (
        <button {...props} className={css.MainButton}>
            {children}
        </button>
    );
};

export default MainButton;