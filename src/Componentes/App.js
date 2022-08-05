import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components'
import '../Styles/reset.css'
import GlobalStyle from '../Styles/globalStyle';
import { useState } from 'react';
import GlobalContext from '../Context/GlobalContext';

import LogIn from './LogIn/LogIn'
import SingUp from './SingUp/SingUp.js'
import Habits from './Habits/Habits.js'
import NavBar from './NavBar/NavBar'
import Today from './Today/Today'
import HistoricPage from './HistoricPage/HistoricPage'


export default function App() {
    const [token, setToken] = useState('');
    const [arrayDays, setArrayDays] = useState([])

    return (
        <>
            <GlobalStyle />
            <GlobalContext.Provider value= {{token, setToken, arrayDays, setArrayDays}}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<LogIn />} />
                        <Route path="/cadastro" element={<SingUp />} />
                        <Route path="/habitos" element={<Habits />} />

                        <Route path="/hoje" element={<Today />} />
                        <Route path="/historico" element={<HistoricPage />} />
                    </Routes>
                </BrowserRouter>


            </GlobalContext.Provider>


        </>
    );
}