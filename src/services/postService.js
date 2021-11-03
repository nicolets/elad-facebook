import config from '../config/index';

async function getPosts() {
    const res = await fetch(config.apiUrl + '/posts', {
        method: 'GET',
    })
    return res.json();
}

async function createPost({ name, postMessage }) {
    console.log(name, postMessage)
    const res = await fetch(config.apiUrl + '/post', {
        method: 'POST',
        body: {
            message: postMessage
        },
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return res.json();
}

export { createPost, getPosts };

