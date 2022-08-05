import { useState } from "react";
import styled from "styled-components";
import DaysList from "../DaysList/DaysList";

export default function NewHabitBox() {
  const weekdays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

  const [selectedDays, setSelectedDays] = useState([])

  function addHabit(){

  }

  return (
    <AddHabits >
      <input 
        type='text' 
        placeholder='nome do hábito'></input>

        <DaysList 
          selectedDays={selectedDays}
          setSelectedDays={setSelectedDays}
          /> 

      <ButtonBoxAdd >
        <Cancel >Cancelar</Cancel>
        <Save onClick={addHabit()}>Salvar</Save>
      </ButtonBoxAdd>
    </AddHabits>
  )
}

const AddHabits = styled.div`
  width: 100%;
  height: 180px;
  margin-bottom: 15px;
  border-radius: 5px;

  padding: 15px;
  background-color: #ffffff;

  input {
  width: 100%;
  height: 40px;
  border: 1px solid #d5d5d5;
  border-radius: 5px;

  padding: 5px;

  font-size: 20px;

  outline: none;

  transition: all linear 3000ms;/* acho q entra uma props aqui ou no display, na real */
}
`


const ButtonBoxAdd = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`

const Cancel = styled.div`
  width: 85px;
  height: 35px;
  font-size: 16px;
  color: #52B6FF;
  margin-right: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`

const Save = styled.div`
  width: 85px;
  height: 35px;
  font-size: 16px;
  color: #FFFFFF;
  background-color: #52B6FF;
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

`
