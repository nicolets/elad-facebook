import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import register from '../services/userService';
import './Register.scss';

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
        <form onSubmit={submit} className='Register'>
            <label htmlFor="name" className='registerInput'>Name: </label>
            <input type="text" value={name} id="name" className='registerInput' onChange={e => setName(e.target.value)} autoComplete="off" />
            <input type="submit" value="Sign Up" className='registerInput' />
        </form>
    );
}

export default Register;