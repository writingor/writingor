
import React from 'react';
import css from './PostItem.module.css';

const PostItem = ({ children, ...props }) => {

    return (
        <div {...props} className={css.PostItem}>
 
            <div {...props} className={css.PostItem__postmenu + ' ' + css.postmenu}>
            <div className={css.postmenu__square + ' ' + css.postmenu__square_first}></div>
            <div className={css.postmenu__square + ' ' + css.postmenu__square_second}></div>
            <div className={css.postmenu__square + ' ' + css.postmenu__square_third}></div>
        </div>

            <h2 className={css.PostItem__title}>HTTP - заголовки и т.д.</h2>

            <p className={css.PostItem__text}>
                Это заголовки. Бла-бла-бла. Солнце греет, но пятки мёрзнут. Что делать с этим
                знают только камыши. Стоят ночами и днями они в тёплой грязи. Мне же ногу греет
                мотор. Он закреплен под седлом, пьёт бензин... Бла-бла-бла-бла-бла
                -бла-бла-бла-бла-бла-бла-бла-бла-бла-бла-бла-бла-бла-бла-бла-бла-бла-бла-бла-бла
                -бла-бла-бла-бла-бла-бла...
            </p>

        </div>
    );
};

export default PostItem;
