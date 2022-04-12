
import { useMemo } from "react";

const usePosts = (posts, query) => {

    const searchedAndSortedPosts = useMemo(() => {
        return posts.filter(post => post.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
    }, [query]);

    return searchedAndSortedPosts;
}

export default usePosts;
