import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import DaysList from "../DaysList/DaysList";
import GlobalContext from "../../Context/GlobalContext";
import { createHabit } from "../../Services/api";
import getConfig from "../../Services/getConfig";
import { ThreeDots } from 'react-loader-spinner';

export default function NewHabitBox({ add, setAdd }) {
  const weekdays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

  const [selectedDays, setSelectedDays] = useState([])
  const {
    token,
    arrayDays,
    setArrayDays,
    disable,
    setDisable,
    reload,
    setReload } = useContext(GlobalContext)


  const [name, setName] = useState('')

  const body = {
    name: name,
    days: arrayDays,
  }

  function addHabit() {
    setDisable(true)
    console.log('Habito criado')

      const promise = createHabit(body, getConfig(token))

      promise.then(res => {
        console.log("resp api", res.data)
        setReload(!reload)
      })

    /* setDisable(false) */
    setAdd(!add)
    
  }

  function cancel() {
    setArrayDays([])
    setName('')
    setAdd(!add)
    /*  falta mudar o placeholder */
    /* e tirar as marcações */
  }


  return (
    <AddHabits add ={add}>
      <input
        type='text'
        placeholder='nome do hábito'
        onChange={(e) => setName(e.target.value)}
      ></input>

      <DaysList
        selectedDays={selectedDays}
        setSelectedDays={setSelectedDays}
      />

      <ButtonBoxAdd >
        <Cancel onClick={cancel}>Cancelar</Cancel>
        <Save onClick={addHabit}>
          {(disable) ? (
            <ThreeDots
              color='#FFFFFF'
              width={50}
              timeout={2000}
            />
          ) : (
            <>Salvar</>
          )}
        </Save>
      </ButtonBoxAdd>
    </AddHabits>
  )
}

const AddHabits = styled.div`
  display: ${props => props.add ? 'inherit' : 'none'};
  display: inh;
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
