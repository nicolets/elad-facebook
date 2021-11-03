import config from '../config/index';

export default async function register(name) {
    const res = await fetch(config.apiUrl + '/register', {
        method: 'POST',
        body: JSON.stringify(name),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return res.text();
}