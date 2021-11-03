import React from 'react';
import './Post.scss';
import PostDate from './PostDate/PostDate';

function Post({ name, date, message }) {
    return (
        <div>
            <strong>{name}</strong>
            <PostDate date={date} />
            <p>{message}</p>
        </div>
    );
}

export default Post;