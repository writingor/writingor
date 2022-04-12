
import React, { useState } from 'react';
import css from './PostItem.module.css';
import PostMenuButton from '../UI/button/PostMenuButton';
import PostModal from '../UI/modal/PostModal';

const PostItem = ({ postItem, ...props }) => {

    const [postModalActive, setPostModalActive] = useState(false);

    return (
        <div {...props} className={css.PostItem}>

            <PostMenuButton active={postModalActive} setActive={setPostModalActive} postId={postItem.id} />

            <h2 className={css.PostItem__title}>{postItem.title}</h2>

            <p className={css.PostItem__text}>{postItem.content.text}</p>

            <PostModal active={postModalActive} setActive={setPostModalActive} postItem={postItem} >

            </PostModal>

        </div>
    );
};

export default PostItem;
