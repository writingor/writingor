
import React, { useState } from 'react';
import css from './Header.module.css';

const Header = () => {

    // const [searchValue, setSearchValue] = useState('');

    // const filterPosts = allPosts.filter(post => {

    // })

    return (
        <header className={css.Header}>
            <div className="wrapper">

                <form className={css.Header__form}>

                    <input type="text" placeholder='Поиск...' className={css.Header__search} />

                    <div className={css.headerlogo}>
                        <div className={css.headerlogo__leftsquare}></div>
                        <div className={css.headerlogo__midsquare}></div>
                        <div className={css.headerlogo__rightsquare}></div>
                    </div>
                    
                </form>

            </div>
        </header>
    );
};

export default Header;
