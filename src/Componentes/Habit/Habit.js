import { useState } from "react";
import styled from "styled-components";

import DaysList from "../DaysList/DaysList";

export default function Habit({selectedDays, setSelectedDays,id, name, days}) {    

    return (
        <HabitStyle>
            <DivAlt>
                <p>Nome do projeto</p>
                <ion-icon name="trash-outline"></ion-icon>
            </DivAlt>
            <DaysList 
                selectedDays={selectedDays}
                setSelectedDays={setSelectedDays}
                id={id}
                name={name}
                days={days}
            />
        </HabitStyle>
    )
}


const DivAlt = styled.div`
  display: flex;
  justify-content: space-between;
    
`

const HabitStyle = styled.div`
  width: 100%;
  height: 90px;
  margin-bottom: 15px;
  border-radius: 5px;

  padding: 15px;
  background-color: #ffffff;

  font-size: 20px;
  color: #666666;
`