import React, { useEffect, useState } from 'react';
import './Feed.scss';
import { getPosts } from '../services/postService';

function Feed() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getThePosts = async () => {
            try {
                const posts = await getPosts();
                setPosts(posts);
            } catch(e) {
            console.log(e);
            }
        }
        getThePosts();
    }, []);

    return (
        <div className="Feed">
            {posts.map((post) => {
                return post 
            })}
        </div>
    );
}

export default Feed;