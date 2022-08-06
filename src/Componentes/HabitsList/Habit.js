import { useContext, useEffect, useState } from "react";
import styled from "styled-components";

import DaysList from "../DaysList/DaysList";
import { deleteHabit } from "../../Services/api";
import GlobalContext from "../../Context/GlobalContext";
import getConfig from "../../Services/getConfig";


export default function Habit({ selectedDays, setSelectedDays, id, name, days }) {

  const { token,
    reload,
    setReload } = useContext(GlobalContext)

  function eraseHabit() {
    let confirm = window.confirm('Rock Lee desistiria?')
    if (confirm) {
      const promise = deleteHabit(id, getConfig(token))

      promise.then((res) => {
        console.log(res.data)

        setReload(!reload)
      })
    }
  }

  return (
    <HabitStyle>
      <DivAlt>
        <p>{name}</p>
        <ion-icon
          name="trash-outline"
          onClick={eraseHabit}
        ></ion-icon>
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

  ion-icon{
    cursor: pointer;
  }
`