import styled from "styled-components"

export default function HabitsList({weekdays}) {

    return (
        <>
        <Habit>
            <DivAlt>
                <p>ver narutinho</p>
                <ion-icon name="trash-outline"></ion-icon>
            </DivAlt>

            <BoxWeekdays >
                {weekdays.map((value, index) => <Day key={index}>{value}</Day>)}
            </BoxWeekdays>
        </Habit>

        <Habit>
            <DivAlt>
                <p>ver narutinho</p>
                <ion-icon name="trash-outline"></ion-icon>
            </DivAlt>

            <BoxWeekdays >
                {weekdays.map((value, index) => <Day key={index}>{value}</Day>)}
            </BoxWeekdays>
        </Habit>
        </>
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
`

const BoxWeekdays = styled.div`
  margin-top: 10px;
  display: flex;
`


const DivAlt = styled.div`
  display: flex;
  justify-content: space-between;
    
`

const Day = styled.li`
  width: 30px;
  height: 30px;
  background: #FFFFFF/* ${(props) => props.backgroundColor} */;
  /* background-color: #CFCFCF; */
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  margin-right: 8px;
  margin-bottom: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 20px;
  color: #d5d5d5/* ${(props) => props.color} */;
  /* color: #FFFFFF; */

  cursor: pointer;
`