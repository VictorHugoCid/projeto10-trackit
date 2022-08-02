import { BrowserRouter, Routes, Route } from 'react-router-dom';
/* import styled from 'styled-components' */
import '../Styles/reset.css'
/* import GlobalStyle from '../Styles/globalStyle'; */

import LogIn from './LogIn/LogIn'
import SingUp from './SingUp/SingUp.js'

export default function App() {

    return (
        <>
            {/* <GlobalStyle /> */}
            {/* <Navbar />  TERÁ Q SER CHAMADA NOS COMPONENTES */}
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LogIn />} />
                    <Route path="/cadastro" element={<SingUp />} /> 

                    {/*<Route path="/habito" element={<Habits />} />
                    <Route path="/hoje" element={<Today />} />
                    <Route path="/historic" element={<Historic />} /> */}
                </Routes>
            </BrowserRouter>

        </>
    );
}