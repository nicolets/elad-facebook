import React, { useEffect, useState } from 'react';
import './Feed.scss';
import { getPosts } from '../services/postService';
import { Link } from 'react-router-dom'
import Post from './Post/Post';

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
            <Link to='/post/create'>
                Create a new post
            </Link>
            <div className="Feed__posts_wrapper">
            {posts.map((post) => (
                <Post key={post.id} date={post.time} name={post.name} message={post.message} />
            ))}
            </div>
        </div>
    );
}

export default Feed;