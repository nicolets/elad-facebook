import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import register from '../services/userService';

function Register() {
    const history = useHistory();
    const [name, setName] = useState('');

    async function submit(e) {
        e.preventDefault();
        try {
            await register({name});
            history.push('/feed');
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <form onSubmit={submit}>
            <label htmlFor="name">Name:</label>
            <input type="text" value={name} id="name" onChange={e => setName(e.target.value)} autoComplete="off" />
            <input type="submit" value="Sign Up" />
        </form>
    );
}

export default Register;