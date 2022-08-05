import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { getTodayHabits } from "../../Services/api";
import getConfig from "../../Services/getConfig";
import GlobalContext from "../../Context/GlobalContext";


import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import TodayHabit from './TodayHabit'


export default function Today() {

    const [todayHabits, setTodayHabits] = useState([])
    const { token } = useContext(GlobalContext)

    useEffect(() => {
        const promise = getTodayHabits(getConfig(token))

        promise.then((res) => {
            console.log(res.data)
            setTodayHabits(res.data)
        })
    }, [])



    const habitosFeitos = 0

    return (
        <TodayMain>
            <NavBar />

            <TodayTitle>
                <h1>Segunda-Feira 17/05</h1>
                <>
                    {(habitosFeitos) ? (null) : (<h2>Nenhum hábito concluído ainda</h2>)}
                </>
            </TodayTitle>
            {todayHabits.map((value) => (
                <TodayHabit 
                    key={value.id}
                    title={value.name}
                    isDone={value.done}
                    currentSequence = {value.currentSequence}
                    highestSequence = {value.highestSequence}

                />
            ))}
            


            <Footer />
        </TodayMain>

    )
}


const TodayMain = styled.div`

  height: 100vh;
  margin-top: 70px;
  background-color: #f2f2f2;
  padding: 0 20px;

`

const TodayTitle = styled.div`
  width: 100%;
  min-height: 90px;

  display: flex;
  flex-direction: column;
  justify-content: center;


  h1 {
  font-size: 23px;
  color: #126BA5;
  margin-bottom: 5px;
  }

  h2{
    font: 18px;
    color: #BABABA;
  }
`

