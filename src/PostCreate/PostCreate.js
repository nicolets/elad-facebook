import React, { useState } from 'react';
import './PostCreate.scss';
import { createPost } from '../services/postService';

function PostCreate(props) {

    const [name, setName] = useState('nicole');
    const [postMessage, setPostMessage] = useState('');

    async function submit(e) {
        e.preventDefault();
        const res = await createPost({name, postMessage});
        console.log(res);
        console.log(postMessage)
    }

    return (
        <div>
            <h1 className="PostCreate__title">Create new post</h1>
                <form onSubmit={submit}>
                    <div>
                        <input type='text' value={name} disabled id='name' />
                    </div>
                    <label htmlFor='message'>Message: </label>
                    <input autoComplete='off' value={postMessage} type='text' id='message' placeholder='write your post...' onChange={e => setPostMessage(e.target.value)} />
                    <div>
                        <input type='submit' value='Create post' />
                    </div>
                </form>
        </div>
    );
}

export default PostCreate;