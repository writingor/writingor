import React from "react";
import PostItem from "../post/PostItem";

const PostsList = (posts) => {

    if (!posts.posts.length) {
        return (

            <div>{console.log(posts)}No posts...</div>
        );
    }

    return (
        <div>
            {/* {console.log(Array.isArray(posts))}
            {console.log(console.log(posts))} */}
            {posts.posts.map((post) => <PostItem key={post.id} postItem={post} />)}
        </div>
    );
};

export default PostsList;
