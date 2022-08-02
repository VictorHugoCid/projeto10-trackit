import { Link } from 'react-router-dom'

import './SingUp.css'
import logo from './logo.png'


export default function SingUp() {



    return (
        <div className='singUpBox'>
            <img src={logo} alt='Track-it'></img>
            <input className='singUpInput' type='email' placeholder='email'></input>
            <input className='singUpInput' type='password' placeholder='senha'></input>
            <input className='singUpInput' type='text' placeholder='nome'></input>
            <input className='singUpInput' type='source' placeholder='foto'></input>
            <div className='singUpButton'>Cadastrar</div>
            <Link to={`/`}>
                <p>Já tem uma conta? Faça login!</p>
            </Link>
        </div>
    )
}