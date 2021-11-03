import config from '../config/index';

async function getPosts() {
    const res = await fetch(config.apiUrl + '/posts', {
        method: 'GET',
    })
    return res.json();
}

async function createPost({ name, message }) {
    const res = await fetch(config.apiUrl + '/create', {
        method: 'POST',
        body: {
            name,
            message
        }
    })
    return res.json();
}

module.exports = {
    createPost,
    getPosts
}