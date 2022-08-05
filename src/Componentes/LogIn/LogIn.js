import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import logo from './logo.png'
import { useContext, useState } from 'react';
import { logIn } from '../../Services/api'

import GlobalContext from '../../Context/GlobalContext';

export default function LogIn() {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const {token, setToken} = useContext(GlobalContext);


    function sendForm() {
        const body = {
            email,
            password,
        }

        const promise = logIn(body)

        promise
            .then(res => {
                console.log(res.data)
                /* setToken(res.data.token) */
                /* LEMBRAR DE MUDAR ESSA DIXGRAÇA */
                navigate('/habitos')
            })

    }

    return (


        <LoginBox className='loginBox'>
            <img src={logo} alt='Track-it' />
            <InputLogin
                type='email'
                placeholder='email'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            <InputLogin
                type='password'
                placeholder='senha'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
            <LoginButton className='loginButton' onClick={sendForm}>Entrar</LoginButton>
            <Link to={`/cadastro`}>
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </LoginBox>


    )
}


const LoginBox = styled.div`
    width: 100vw;
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
    font-size: 14px;
    color: #52b6ff;

    text-align: center;
    text-decoration: underline;
    }
    img{
        width: 300px;
        height: auto;
        margin-bottom: 50px;
    }

`

const InputLogin = styled.input`

    min-width: 80vw;
    min-height: 45px;

    margin-bottom: 10px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    padding: 5px;
    font-size: 20px;
    outline: none;

`

const LoginButton = styled.div`

    min-width: 80vw;
    min-height: 45px;
    margin-bottom: 10px;

    display: flex;
    justify-content: center;
    align-items: center;

    background: #52b6ff;
    border-radius: 4.63636px;

    font-size: 26px;
    color: #ffffff;

    cursor: pointer;

`