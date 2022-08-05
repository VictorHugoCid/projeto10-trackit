import styled from "styled-components"



export default function TodayHabit({title,isDone, currentSequence, highestSequence}){


    return(
        <Habit>
            <HabitText>
                <h1>{title}</h1>
                <h2>Sequência atual: {currentSequence}</h2>
                <h2>Seu recorde: {highestSequence}</h2>
            </HabitText>

            <HabitCheck>
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

const HabitText =styled.div`

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

background: #EBEBEB;
/* background: #8FC549; */
border: 1px solid #E7E7E7;
border-radius: 5px;

ion-icon{
    width: 60px;
    height: 55px;
    color: #FFFFFF;
}

`