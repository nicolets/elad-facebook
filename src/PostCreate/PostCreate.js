import React, { useState } from 'react';
import './PostCreate.scss';

function PostCreate(props) {

    const [postMessage, setPostMessage] = useState('');

    return (
        <div>
            <h1 className="PostCreate__title">Create new post</h1>
                <form>
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