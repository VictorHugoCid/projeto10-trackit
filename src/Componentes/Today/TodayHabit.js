import { useContext, useState } from "react"
import styled from "styled-components"
import GlobalContext from "../../Context/GlobalContext"

import { checkHabit } from "../../Services/api"
import { unCheckHabit } from "../../Services/api"
import getConfig from "../../Services/getConfig"

export default function TodayHabit({ title, isDone, currentSequence, highestSequence, habitId, auxPercent }) {

    const {token} = useContext(GlobalContext)

    const {percentage, setPercentage} = useContext(GlobalContext)
    const {checkArray, setcheckArray} = useContext(GlobalContext)
    const [check, setCheck] = useState(false)

    const uncheckColor = { color: '#FFFFFF', background: '#d5d5d5' }
    const checkColor = { color: '#FFFFFF', background: '#8FC549' }

    const [colors, setColors] = useState({...uncheckColor})

    function postCheck(){
        console.log('postCheck',habitId)
        const promise = checkHabit(habitId, getConfig(token))
    }

    function postUnCheck(){
        console.log('postUn-Check',habitId)
        const promise = unCheckHabit(habitId, getConfig(token))
    }

    function checked() {

        if (check === false) {
            setColors({...checkColor})
            postCheck()
            setcheckArray([...checkArray, habitId])
            

        } else {
            setColors({...uncheckColor})
            postUnCheck()
            const arrayAux = [...checkArray]
            for (let i = 0; i < checkArray.length; i++) {
                if(checkArray[i] === habitId){
                    arrayAux.splice(i,1)

                    setcheckArray([...arrayAux])
                }
            }
        }

        setCheck(!check)
        
    }
    setPercentage(Number(checkArray.length/auxPercent*100))
    console.log(checkArray, percentage)

    return (
        <Habit>
            <HabitText>
                <h1>{title}</h1>
                <h2>Sequência atual: {currentSequence}</h2>
                <h2>Seu recorde: {highestSequence}</h2>
            </HabitText>

            <HabitCheck
                color={colors.color}
                background={colors.background}
                onClick={checked}>
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
    color: #666666;
}
`
const HabitCheck = styled.div`
width: 70px;
height: 70px;

display: flex;
justify-content: center;
align-items: center;

background: ${props => props.background};
border: 1px solid #E7E7E7;
border-radius: 5px;

cursor: pointer;

ion-icon{
    width: 60px;
    height: 55px;
    color: ${props => props.color};
}
`