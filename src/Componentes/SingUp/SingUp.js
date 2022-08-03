import { Link } from 'react-router-dom'
import styled from 'styled-components'

import logo from './logo.png'

export default function SingUp() {



    return (
        <SingUpBox>
            <img src={logo} alt='Track-it'></img>
            <InputSingUp type='email' placeholder='email'></InputSingUp>
            <InputSingUp type='password' placeholder='senha'></InputSingUp>
            <InputSingUp type='text' placeholder='nome'></InputSingUp>
            <InputSingUp type='source' placeholder='foto'></InputSingUp>
            <SingUpButton >Cadastrar</SingUpButton>
            <Link to={`/`}>
                <p>Já tem uma conta? Faça login!</p>
            </Link>
        </SingUpBox>
    )
}

const SingUpBox = styled.div`
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
        width: 48vw;
        height: 46vw;
        margin-bottom: 50px;
    }
`

const InputSingUp = styled.input`

    width: 80vw;
    height: 45px;

    margin-bottom: 10px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    padding: 5px;
    font-size: 20px;
    outline: none;

`

const SingUpButton = styled.div`

    width: 80vw;
    height: 45px;
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