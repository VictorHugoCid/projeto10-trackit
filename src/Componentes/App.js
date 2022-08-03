import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components'
import '../Styles/reset.css'
import GlobalStyle from '../Styles/globalStyle'; 

import LogIn from './LogIn/LogIn'
import SingUp from './SingUp/SingUp.js'
import Habits from './Habits/Habits.js'
import NavBar from './NavBar/NavBar'


export default function App() {

    return (
        <>
            <GlobalStyle />
            {/* <NavBar /> */}
            <BrowserRouter>
                <Routes>
                    {/* <Route path="/" element={<LogIn />} />
                    <Route path="/cadastro" element={<SingUp />} />  */}


                    <Route path="/" element={<Habits />} />

                    {/*<Route path="/hoje" element={<Today />} />
                    <Route path="/historic" element={<Historic />} /> */}
                </Routes>
            </BrowserRouter>

        </>
    );
}