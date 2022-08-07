import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from '../Styles/globalStyle';
import { useState } from 'react';
import GlobalContext from '../Context/GlobalContext';

import LogIn from './LogIn/LogIn'
import SingUp from './SingUp/SingUp.js'
import Habits from './Pages/HabitsPage.js'
import Today from './Pages/TodayPage'
import HistoricPage from './Pages/HistoricPage'


export default function App() {
    /* const [token, setToken] = useState(''); */
    /* LEMBRAR DE MUDAR ESSA DIXGRAÇA */

    const [percentage, setPercentage] = useState(0)
    const [disable, setDisable] = useState(false)
    const [reload, setReload] = useState(false)
    const [image, setImage] = useState('')
    const [selectedDays, setSelectedDays] = useState([])

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NDY3NSwiaWF0IjoxNjU5NzM4NTk3fQ.y3K7shd9OTwQmN7AxNdr77wPqsYQt522ttGl6_ZGbkE'

    /* LEMBRAR DE MUDAR ESSA DIXGRAÇA */

    const [checkArray, setcheckArray] = useState([])

    const [arrayDays, setArrayDays] = useState([])

    return (
        <>
            <GlobalStyle />
            <GlobalContext.Provider value={
                { token/* , setToken */, 
                arrayDays, 
                setArrayDays, 
                checkArray, 
                setcheckArray, 
                percentage, 
                setPercentage,
                disable,
                setDisable,
                reload, 
                setReload,
                image,
                setImage,
                selectedDays,
                setSelectedDays }}>
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