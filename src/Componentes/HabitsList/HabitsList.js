import styled from "styled-components"
import Habit from "../Habit/Habit"
import { getHabits } from "../../Services/api"
import getConfig from "../../Services/getConfig"
import GlobalContext from "../../Context/GlobalContext"
import { useContext, useEffect, useState } from "react"

export default function HabitsList() {

const [habitsList, setHabitsList] = useState([])
  const {token} = useContext(GlobalContext)  

  useEffect(() => {
    const promise = getHabits(getConfig(token))

    promise.then(res => {
      console.log(res.data)
      setHabitsList(res.data)}
    )

  },[])

  return (
    <HabitListStyle>
      {habitsList.map((value) => 
        
        (<Habit
          key={value.id}
          id={value.id}
          name={value.name}
          days={value.days}
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