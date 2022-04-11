import React from "react";
import postsArray from "../../db/db_posts";
import PostItem from "../post/PostItem";

const PostsList = () => {
  
    // const doNothing = (e) => {
    //   e.preventDefault();
    // }

    const postsMap = postsArray.map((postItem, pos) => {
        return (
            <PostItem key={postItem.id} postItem={postItem} pos={pos} />
        );
    });

    return (
        <div>

            {postsMap}

        </div>
    );
};

export default PostsList;
