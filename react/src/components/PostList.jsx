import React from "react";
import PostItem from "./PostItem";

const PostList = ({posts, title, remove}) => {

    //условная отрисовка
    if (!posts.length) {
        return (
            <h1 style ={{textAlign: 'center'}}>
                Фильмы не найдены
            </h1>
        )
    }

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1>
            <div className="postWrapper">
            {posts.map((post, index) =>
                      <PostItem remove={remove} number={index + 1} post={post} key={post.filmId}/>
                  )}
            </div>      
        </div>
    )
    
}

export default PostList;