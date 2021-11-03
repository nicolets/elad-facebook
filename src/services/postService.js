import config from '../config/index';

async function getPosts() {
    const res = await fetch(config.apiUrl + '/posts', {
        method: 'GET',
    })
    return res.json();
}

async function createPost({ name, postMessage }) {
    const res = await fetch(config.apiUrl + '/post', {
        method: 'POST',
        body: JSON.stringify({
            name,
            message: postMessage
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return res.json();
}

async function likePost(postId) {
    const res = await fetch(config.apiUrl + '/like', {
        method: 'POST',
        body: JSON.stringify({
            postId
        }),
        header: {
            'Content-Type': 'application/json'
        }
    })
    return res.json();
}

export { createPost, getPosts, likePost };

