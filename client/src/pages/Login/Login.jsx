import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import './Login.scss';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = {
            email: email,
            password: password
        };
        try {
            const response = await axios.post('http://localhost:5678/api/user/login', user);
            localStorage.setItem('token', response.data.token);
            navigate('/');
        } catch (error) {
            console.error(error);
        }
    };

  return (
    <div className='form'>
        <form>
            <h2 className='login__title'>Connexion Admin</h2>
            <div className='login__input'>
                <label htmlFor='email' className='form__label goudy'>Email</label>
                <input
                    type='email'
                    id='email'
                    placeholder='Email'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className='form__input goudy'
                />
                <label htmlFor='password' className='form__label goudy'>Mot de passe</label>
                <input
                    type='password'
                    id='password'
                    placeholder='Mot de passe'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    className='form__input goudy'
                />
            </div>
            <SubmitButton text="Se connecter" onClick={handleSubmit}/>
        </form>
    </div>
  )
}

export default Login