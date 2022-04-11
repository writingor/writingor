
import React from 'react';
import css from './PostItem.module.css';
import exampleImage from '../../assets/img/cat1.jpg';

const PostItem = ({ postItem, children, image, ...props }) => {

    return (
        <div {...props} className={css.PostItem}>

            {children}

            <h2 className={css.PostItem__title}>{postItem.title}</h2>

            <p className={css.PostItem__text}>{postItem.content.text}</p>

            {/* <div className={css.PostItem__imagebox}>
                <div className={css.PostItem__image}>
                    <img src={exampleImage} alt="cat" />
                </div>
            </div> */}

            {/* <div className={css.PostItem__codeblock}>
                <pre className={css.codeblock__code}>

                    &#123;<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;test code;<br />
                    &#125;

                </pre>
            </div> */}

        </div>
    );
};

export default PostItem;
