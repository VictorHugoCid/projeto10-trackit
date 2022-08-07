import React, { useEffect } from "react";
import styled from "styled-components";

import NavBar from '../commons/navbar/NavBar'
import Footer from "../commons/footer/Footer";
import { getHistoricHabits } from "../../Services/api";
import getConfig from "../../Services/getConfig";
import { useContext } from "react";
import GlobalContext from "../../Context/GlobalContext";


export default function HistoricPage(){

    const {token} = useContext(GlobalContext)
    useEffect(()=>{
        const promise = getHistoricHabits(getConfig(token))

        promise
            .then((res) => {
                /* console.log(res.data) */
            })
    },[])


    return(
        <HistoricMain>
            <NavBar/>
            <HistoricTitle>
                <h1>Histórico</h1>
                <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>

            </HistoricTitle>

            <Footer/>
        </HistoricMain>

    )
}

const HistoricMain = styled.div`

  height: 100vh;
  margin-top: 70px;
  background-color: #f2f2f2;
  padding: 0 20px;

`

const HistoricTitle = styled.div`
  width: 100%;
  min-height: 90px;

  display: flex;
  flex-direction: column;
  justify-content: center;
 

  h1 {
  font-size: 23px;
  color: #126ba5;
  margin-bottom: 5px;
}
p{
    font-size: 18px;
    color: #666666;
}

`