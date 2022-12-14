import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { getTodayHabits } from "../../Services/api";
import getConfig from "../../Services/getConfig";
import GlobalContext from "../../Context/GlobalContext";

import dayjs from "dayjs";
import updateLocale from "dayjs/plugin/updateLocale";
import "dayjs/locale/pt-br";

import NavBar from '../commons/navbar/NavBar'
import Footer from "../commons/footer/Footer";
import TodayHabit from '../Today/TodayHabit'


export default function Today() {

    dayjs.locale("pt-br");
    dayjs.extend(updateLocale);
    dayjs.updateLocale("pt-br", {
        weekdays: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
    });


    const {
        token,
        percentage,
        setPercentage,
        reload} = useContext(GlobalContext)


    const [todayHabits, setTodayHabits] = useState([])
    const [auxPercent, setAuxPercent] = useState()
    const [arrayDone, setArrayDone] = useState([])

    useEffect(() => {
        const promise = getTodayHabits(getConfig(token))

        promise.then((res) => {
            setTodayHabits(res.data)
            setAuxPercent(res.data.length)
            setArrayDone(res.data.filter((value)=>(value.done === true)))
        })
    }, [reload])


    setPercentage(Math.round(arrayDone.length / todayHabits.length * 100))

    return (
        <>

            {(todayHabits.length === 0) ? (null

            ) : (
                <TodayMain>
                    <NavBar />
                    <TodayTitle>
                        <h1>{dayjs().format('dddd, DD/MM')}</h1>
                        <>
                            {(percentage) ? (<h3>{`${percentage}% dos hábitos concluídos`}</h3>) : (<h2>Nenhum hábito concluído ainda</h2>)}
                        </>
                    </TodayTitle>
                    {todayHabits.map((value) => (
                        <TodayHabit
                            key={value.id}
                            title={value.name}
                            currentSequence={value.currentSequence}
                            highestSequence={value.highestSequence}
                            habitId={value.id}
                            isDone={value.done}
                        />
                    ))}
                    <Footer />
                </TodayMain>

            )}
        </>


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

  h3{
    font: 18px;
    color: #8FC549;

  }
`

