import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import logo from './logo.png'

export default function SingUp() {

    const navigate = useNavigate()
    const [form, setForm] = useState({
        email:'',
        name:'',
        image:'',
        password:'',
    });

    function handleForm(event){
        console.log(event.target.name, event.target.value);
        setForm({
            ...form,
            [event.target.name]: event.target.value,

        });
    }

    function sendForm(){
        console.log(form);

/*         const body ={
            email:form.email,
            name:form.name,
            image:form.image,
            password:form.password,
        } *//*  OU SE UMA FORMA MAIS ELEGANTE: */

        const body ={
            ...form,
        }

        
        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up',body);

        promise.then(res => {
            navigate('/');
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
            />
            <InputSingUp 
                type='password' 
                placeholder='senha'
                name='password'
                onChange={handleForm}
                value={form.password}
            />
            <InputSingUp 
                type='text' 
                placeholder='nome'
                name='name'
                onChange={handleForm}
                value={form.name}
            />
            <InputSingUp 
                type='source' 
                placeholder='foto'
                name='image'
                onChange={handleForm}
                value={form.image}
            />
            <SingUpButton onClick={sendForm}>Cadastrar</SingUpButton>
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