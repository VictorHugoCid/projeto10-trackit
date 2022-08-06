import styled from "styled-components"
import Habit from "./Habit"
import { getHabits } from "../../Services/api"
import getConfig from "../../Services/getConfig"
import GlobalContext from "../../Context/GlobalContext"
import { useContext, useEffect, useState } from "react"

export default function HabitsList() {

const [habitsList, setHabitsList] = useState([])
  const {token, reload, setReload} = useContext(GlobalContext)  

  useEffect(() => {
    console.log('Criando lista de hábitos:')
    const promise = getHabits(getConfig(token))

    promise.then(res => {
      console.log('a promise rolou')
      setHabitsList(res.data)}
    )
  },[reload])


  return (
    <HabitListStyle>
      {habitsList.map((value) => 
        
        (<Habit
          key={value.id}
          id={value.id}
          name={value.name}
          days={value.days}
          setReload={setReload}
        />)

      )}
    </HabitListStyle>

  )
}

const HabitListStyle = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 15px;
  border-radius: 5px;

  font-size: 20px;
  color: #666666;
`