import React, { useState } from "react";
import postsArray from "../../db/db_posts";
import PostItem from "../post/PostItem";
import MainButton from "../UI/button/MainButton";
import PostMenuButton from "../UI/button/PostMenuButton";
import KeyWordCheckbox from "../UI/check-box/KeyWordCheckbox";
import PostModal from "../UI/modal/PostModal";

const PostsList = () => {

    const [postModalActive, setPostModalActive] = useState(false);
    const [checked, setChecked] = useState(false);

    const toggleChecked = () => {
      setChecked(!checked);
    };
  
    // const doNothing = (e) => {
    //   e.preventDefault();
    // }

    const postsMap = postsArray.map((postItem) => {
        return (

            <PostItem key={postItem.id} postItem={postItem}>
                <PostMenuButton active={postModalActive} setActive={setPostModalActive} />
            </PostItem>

        );
    });

    return (
        <div>
            <PostModal active={postModalActive} setActive={setPostModalActive} >
                {/* test checkbox START */}
                <KeyWordCheckbox isNameIdFor="react" value={checked} onChange={toggleChecked} >
                    React
                </KeyWordCheckbox>

                <KeyWordCheckbox isNameIdFor="c-sharp" value={checked} onChange={toggleChecked} >
                    C#
                </KeyWordCheckbox>

                <KeyWordCheckbox isNameIdFor="js" value={checked} onChange={toggleChecked} >
                    JavaScript
                </KeyWordCheckbox>
                {/* test checkbox END */}
                <MainButton>Найти похожие</MainButton>
            </PostModal>

            {postsMap}

        </div>
    );
};

export default PostsList;
