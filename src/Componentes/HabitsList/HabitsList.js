import styled from "styled-components"
import Habit from "../Habit/Habit"

export default function HabitsList() {

  const listaHabitos = [
    {
      id: 1,
      name: "Nome do hábito",
      days: [1, 3, 5]
    },
    {
      id: 2,
      name: "Nome do hábito 2",
      days: [1, 3, 4, 6]
    },
    {
      id: 3,
      name: "Nome do hábito 3",
      days: [1, 3, 5, 6]
    }
  ]
  
  /* recebe um objeto */

  return (
    <HabitListStyle>
      {listaHabitos.map((value) => 
        
        (<Habit
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