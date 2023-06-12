import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

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
            navigate('/main');
            console.log(response.data.token);
        } catch (error) {
            console.error(error);
        }
    };

  return (
    <div className='form'>
        <button className='back__btn goudy' onClick={() => navigate('/main')}>
            <FontAwesomeIcon icon={faChevronLeft} className='btn__icon' />
        Retour</button>
        <form>
            <h2 className='login__title'>Salut Estreliah !</h2>
            <p className='login__text'>Connecte-toi pour accéder à ton espace personnel</p>
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
            <div className="center">
            <SubmitButton text="Se connecter" onClick={handleSubmit}/>
            </div>
        </form>
    </div>
  )
}

export default Login