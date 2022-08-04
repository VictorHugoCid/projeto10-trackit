import { useState } from "react"
import styled from "styled-components"



export default function Day({ weekday }) {

    const [colors, setColors] = useState({})
    const [selectedDay, setSelectedDay] = useState(false)
  
    const busy = { color: '#FFFFFF', background: '#d5d5d5' }
    const free = { color: '#d5d5d5', background: '#FFFFFF' }
  
    function selectDay() {
      setSelectedDay(!selectedDay)
      console.log(selectedDay)
  
      if (selectedDay === false) {
        setColors({ ...busy })
      } else {
        setColors({ ...free })
      }
    } 

    return (

        <DayStyle
            onClick={selectDay}
            color={colors.color}
            background={colors.background}>
            {weekday}
        </DayStyle>

    )
}

const DayStyle = styled.li`
  width: 30px;
  height: 30px;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  margin-right: 8px;
  margin-bottom: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 20px;

  color: #d5d5d5;
  color:${(props) => props.color} ;
  background: ${(props) => props.background};

 
  cursor: pointer;
`