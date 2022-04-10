
import React from 'react';
import css from './Header.module.css';

const Header = () => {

    return (
        <header className={css.Header}>
            <div className="wrapper">

                <div className={css.Header__body}>

                    <input type="text" placeholder='Поиск...' className={css.Header__search} />

                    <div className={css.headerlogo}>
                        <div className={css.headerlogo__leftsquare}></div>
                        <div className={css.headerlogo__midsquare}></div>
                        <div className={css.headerlogo__rightsquare}></div>
                    </div>
                    
                </div>

            </div>
        </header>
    );
};

export default Header;
