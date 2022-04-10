
import React from 'react';
import css from './PostItem.module.css';
import exampleImage from '../../assets/img/cat1.jpg';

const PostItem = ({ children, image, ...props }) => {

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

            <div className={css.PostItem__imagebox}>
                <div className={css.PostItem__image}>
                    <img src={exampleImage} alt="cat" />
                </div>
            </div>

            <p className={css.PostItem__text}>
                Это заголовки. Бла-бла-бла. Солнце греет, но пятки мёрзнут. Что делать с этим
                знают только камыши. Стоят ночами и днями они в тёплой грязи. Мне же ногу греет
                мотор. Он закреплен под седлом, пьёт бензин...<br /><br />
                Бла-бла-бла-бла-бла
                -бла-бла-бла-бла-бла-бла-бла-бла-бла-бла-бла-бла-бла-бла-бла-бла-бла-бла-бла-бла
                -бла-бла-бла-бла-бла-бла...
            </p>

            <div className={css.PostItem__codeblock}>
                <pre className={css.codeblock__code}>

                    &#123;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;test code;<br />
                    &#125;

                </pre>
            </div>

            <div className={css.PostItem__imagebox}>
                <div className={css.PostItem__image}>
                    <img src={exampleImage} alt="cat" />
                </div>
                <div className={css.PostItem__image}>
                    <img src={exampleImage} alt="cat" />
                </div>
                <div className={css.PostItem__image}>
                    <img src={exampleImage} alt="cat" />
                </div>
                <div className={css.PostItem__image}>
                    <img src={exampleImage} alt="cat" />
                </div>
                <div className={css.PostItem__image}>
                    <img src={exampleImage} alt="cat" />
                </div>
            </div>

            <div className={css.PostItem__codeblock}>
                <pre className={css.codeblock__code}>

                    &#123;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;test code;<br />
                    &#125;

                </pre>
            </div>

            <p className={css.PostItem__text}>
                Это заголовки. Бла-бла-бла. Солнце греет, но пятки мёрзнут. Что делать с этим
                знают только камыши. Стоят ночами и днями они в тёплой грязи. Мне же ногу греет
                мотор. Он закреплен под седлом, пьёт бензин... <br />
                Бла-бла-бла-бла-бла
                -бла-бла-бла-бла-бла-бла-бла-бла-бла-бла-бла-бла-бла-бла-бла-бла-бла-бла-бла-бла
                -бла-бла-бла-бла-бла-бла...
            </p>

        </div>
    );
};

export default PostItem;
