import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import GlobalContext from "../../Context/GlobalContext"

import { checkHabit } from "../../Services/api"
import { unCheckHabit } from "../../Services/api"
import getConfig from "../../Services/getConfig"

export default function TodayHabit({ title, currentSequence, highestSequence, habitId, isDone }) {

    const {
        token,
        checkArray,
        setcheckArray,
        setReload} = useContext(GlobalContext)

    const [record, setRecord] = useState(false)

    function postCheck() {
        const promise = checkHabit(habitId, getConfig(token))

        promise.then(() => {
            setReload(true)
        })
    }

    function postUnCheck() {
        const promise = unCheckHabit(habitId, getConfig(token))

        promise.then(() => {
            setReload(true)
        })
    }

    function checked() {
        if (isDone === false) {
            postCheck()
        } else {
            postUnCheck()
        }
        setReload(false)
    }

    useEffect(() => {
        if (currentSequence > 0 && currentSequence >= highestSequence) {
            setRecord(true)
        } else {
            setRecord(false)
        }

    }, [checked])

    return (
        <Habit>
            <HabitText
                record={record}>
                <h1>{title}</h1>
                <h2>Sequência atual: {currentSequence}</h2>
                <h3>Seu recorde: {highestSequence}</h3>
            </HabitText>

            <HabitCheck
                isDone={isDone}
                onClick={() => checked()}>
                <ion-icon name="checkmark-outline"></ion-icon>
            </HabitCheck>
        </Habit>
    )
}

const Habit = styled.div`
  width: 100%;
  height: 90px;
  margin-bottom: 15px;
  border-radius: 5px;

  padding: 15px;
  background-color: #ffffff;

  font-size: 20px;
  color: #666666;

  display: flex;
  justify-content: space-between;
  align-items: center;

`

const HabitText = styled.div`

h1{
    font-size: 20px;
    color: #666666;
}

h2{
    font-size: 13px;
    color: ${props => props.record ? '#8FC549' : '#666666'};
}
h3{
    font-size: 13px;
    color: #666666; 
}
`
const HabitCheck = styled.div`
width: 70px;
height: 70px;

display: flex;
justify-content: center;
align-items: center;

background-color: ${(props) => (props.isDone ? "#8FC549" : "#d5d5d5")};

border: 1px solid #E7E7E7;
border-radius: 5px;

cursor: pointer;

ion-icon{
    width: 60px;
    height: 55px;
    color: #FFF;
}
`
