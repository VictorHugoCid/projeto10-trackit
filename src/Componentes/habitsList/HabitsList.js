import styled from "styled-components"
import Habit from "./Habit"
import { getHabits } from "../../Services/api"
import getConfig from "../../Services/getConfig"
import GlobalContext from "../../Context/GlobalContext"
import { useContext, useEffect, useState } from "react"

export default function HabitsList() {

  const {
    token,
    reload } = useContext(GlobalContext)

  const [habitsListGet, setHabitsListGet] = useState([])

  useEffect(() => {
    const promise = getHabits(getConfig(token))

    promise.then(res => {
      setHabitsListGet(res.data)
    }
    )
  }, [reload])

  return (
    <HabitListStyle>
      {habitsListGet.map((value) =>
        <Habit
          key={value.id}
          id={value.id}
          name={value.name}
          selectedDays={value.days}
        />

      )}
    </HabitListStyle>

  )
}

const HabitListStyle = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 100px;
  border-radius: 5px;

  font-size: 20px;
  color: #666666;


`