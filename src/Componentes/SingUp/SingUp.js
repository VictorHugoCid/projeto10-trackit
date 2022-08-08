import axios from 'axios'
import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { singUp } from '../../Services/api'
import styled from 'styled-components'
import { ThreeDots } from 'react-loader-spinner';
import GlobalContext from '../../Context/GlobalContext';

import logo from './logo.png'

export default function SingUp() {

    const { disable, setDisable } = useContext(GlobalContext)

    const navigate = useNavigate()
    const [form, setForm] = useState({
        email: '',
        name: '',
        image: '',
        password: '',
    });

    function handleForm(event) {
        setForm({
            ...form,
            [event.target.name]: event.target.value,

        });
    }

    function sendForm() {
        setDisable(true)

        const body = {
            ...form,
        }

        const promise = singUp(body)

        promise
            .catch(() => {
                alert("Erro ao se cadastrar")
            })
            .then(res => {
                setTimeout(() => {
                    navigate('/hoje')
                    setDisable(false)
                }, 2000)
            })


    }

    return (
        <SingUpBox>
            <img src={logo} alt='Track-it'></img>
            <InputSingUp
                type='email'
                placeholder='E-mail'
                name='email'
                onChange={handleForm}
                value={form.email}
                disabled={disable}
            />
            <InputSingUp
                type='password'
                placeholder='senha'
                name='password'
                onChange={handleForm}
                value={form.password}
                disabled={disable}
            />
            <InputSingUp
                type='text'
                placeholder='nome'
                name='name'
                onChange={handleForm}
                value={form.name}
                disabled={disable}
            />
            <InputSingUp
                type='source'
                placeholder='foto'
                name='image'
                onChange={handleForm}
                value={form.image}
                disabled={disable}
            />
            <SingUpButton onClick={sendForm}>
                {(disable) ? (
                    <ThreeDots
                        color='#FFFFFF'
                        width={80}
                        timeout={2000}
                    />
                ) : (
                    <>Cadastrar</>
                )}
            </SingUpButton>
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
        width: 300px;
        height: auto;
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
const Spinner = styled.div`

`