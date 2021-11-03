import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import register from '../services/userService';


function Register() {
    const history = useHistory();
    const [name, setName] = useState('');

    async function submit(e) {
        e.preventDefault();
        await register(name)
            .then(() => history.push('/'))
            .catch(() => alert('Sorry! We faced an error while registering. Please try again'))
    }

    return (
        <form onSubmit={submit}>
            <label htmlFor="name">Name:</label>
            <input type="text" value={name} id="name" onChange={e => setName(e.target.value)} />
        </form>
    );
}

export default Register;