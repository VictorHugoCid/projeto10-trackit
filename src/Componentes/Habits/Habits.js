
import Footer from "../Footer/Footer"
import NavBar from "../NavBar/NavBar"
import HabitsList from "../HabitsList/HabitsList"
import NewHabitBox from "../NewHabitBox/NewHabitBox"

import { useState } from "react"
import styled from 'styled-components'


/*     TEM Q IMPORTAR ISSO AQUI
@import url("https://fonts.googleapis.com/css2?family=Lexend:wght@100&display=swap"); */


export default function Habits() {
  const weekdays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

  const [add, setAdd] = useState(false) /* abrir e fechar a box de adição */

  const numHabits = 1 /* LEMBRAR DE TIRAR ISSO AQUI */
  return (

    <>
      <NavBar />
      <HabitsMain >
        <HabitsTitle >
          <h1>Meus hábitos</h1>
          <div onClick={() => setAdd(!add)}>
            <ion-icon name="add"></ion-icon>
          </div>

        </HabitsTitle>

        <BoxHabits >
          {(add) ? (
            <NewHabitBox /* weekdays={weekdays} */ />

          ) : (
            null
          )}

          {(numHabits) ? (

            <HabitsList weekdays={weekdays} />

          ) : (
            <h1>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h1>
          )}
        </BoxHabits>
      </HabitsMain>

      <Footer />
    </>


  )
}



const HabitsMain = styled.div`

  height: 100vh;
  margin-top: 70px;
  background-color: #f2f2f2;
  padding: 0 20px;

`

const HabitsTitle = styled.div`
  width: 100%;
  min-height: 90px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
  font-size: 23px;
  color: #126ba5;
}
  ion-icon{
    width: 35px;
  height: 35px;
  color: #FFFFFF;

  background: #52b6ff;
  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  }
`
const BoxHabits = styled.div`
    width: 100%;
    h1 {
    text-align: center;
    }

`
