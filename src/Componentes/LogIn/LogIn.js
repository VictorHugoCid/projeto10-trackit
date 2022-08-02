/* import styled from 'styled-components'; */
import { Link } from 'react-router-dom'
import './Login.css'
import logo from './logo.png'

export default function SingIn() {


    return (
        <div className='loginBox'>
            <img src={logo} alt='Track-it'></img>
            <input className='loginInput' type='email' placeholder='email'></input>
            <input className='loginInput' type='password' placeholder='senha'></input>
            <div className='loginButton'>Entrar</div>
            <Link to ={`/cadastro`}>
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </div>

    )
}


/* const imgLogin = styled.img`


`

const inputLogin = styled.input`

` */