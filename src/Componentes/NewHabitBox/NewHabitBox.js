import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import GlobalContext from "../../Context/GlobalContext";
import { createHabit } from "../../Services/api";
import getConfig from "../../Services/getConfig";
import { ThreeDots } from 'react-loader-spinner';

export default function NewHabitBox({ add, setAdd }) {
  const weekdays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

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

  function addHabit(e) {
    e.preventDefault()
    setDisable(!disable)

    const promise = createHabit(body, getConfig(token))

    promise.then(res => {
      setReload(!reload)
    })

    setDisable(false)
    setName('')
    
    setArrayDays([])
    setTimeout(() => {
      setAdd(!add)
    }, 2000);
  }

  function cancel() {
    setAdd(!add)
  }

  function selectDay(index){

    if(!arrayDays.includes(index)){
      setArrayDays([...arrayDays, index])
    }else{
      setArrayDays( arrayDays.filter((value) => value !== index))
    }
  }


  return (
    <AddHabits add={add}>
      <form onSubmit={addHabit}>
        <input
          type='text'
          placeholder='nome do hábito'
          onChange={(e) => setName(e.target.value)}
          value={name}
        ></input>

        <DaysListStyle >
          {weekdays.map((weekday,index) =>
            <DayStyle
              key={index}
              onClick={() => {selectDay(index)}}
              clicked={arrayDays.includes(index)}
            >
              {weekday}
            </DayStyle>


          )}
        </DaysListStyle>

        <ButtonBoxAdd >
          <Cancel onClick={cancel}>Cancelar</Cancel>
          <Save >
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
      </form>
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

const Save = styled.button`
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
const DaysListStyle = styled.div`
  margin-top: 10px;
  display: flex;
`
const DayStyle = styled.div`
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

  background-color: ${(props) => (props.clicked ? "#CFCFCF" : "#fff")};
  color: ${(props) => (props.clicked ? "#FFF" : "#CFCFCF")};

  cursor: pointer;
`