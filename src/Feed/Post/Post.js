import React from 'react';
import './Post.scss';
import PostDate from './PostDate/PostDate';
import { likePost } from '../../services/postService';

function Post({ postId, name, date, message }) {
    console.log(likePost);
    async function like() {
        try {
            await likePost(postId);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="Post">
            <hr />
            <strong>{name}</strong>
            <PostDate date={date} />
            <p>{message}</p>
            <button onClick={like}>Like</button>
        </div>
    );
}

export default Post;