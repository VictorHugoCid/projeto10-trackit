
import Footer from "../Footer/Footer"
import NavBar from "../NavBar/NavBar"
import styled from 'styled-components'
import { useState } from "react"

/*     TEM Q IMPORTAR ISSO AQUI
@import url("https://fonts.googleapis.com/css2?family=Lexend:wght@100&display=swap"); */


export default function Habits() {
  const weekdays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

  const [colors, setColors] = useState({})

  const busy = { color: '#FFFFFF', backgroundColor: '#CFCFCF' }
  const free = { color: '#d5d5d5', backgroundColor: '#red' }

  const [selectedDay, setSelectedDay] = useState(false)
  const [add, setAdd] = useState(false) /* abrir e fechar a box de adição */

  function selectDay() {
    console.log(selectedDay)

    if (selectedDay === false) {
      setColors({ ...busy })
    } else {
      setColors({ ...free })
    }

  }

  const numHabits = 0 /* LEMBRAR DE TIRAR ISSO AQUI */

  return (


    <>
      {colors ? (
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
                <AddHabits habilita={add}>
                  <input className='habitsInputAdd' type='text' placeholder='nome do hábito'></input>

                  <BoxWeekdays >
                    {weekdays.map((value, index) =>
                      <Day
                        key={index}
                        className='day'
                        onClick={(
                          selectDay,
                          setSelectedDay)
                        }
                        color={colors.color}
                        backgroundColor={colors.backgroundColor}

                      >{value}</Day>)}
                  </BoxWeekdays>

                  <ButtonBoxAdd >
                    <Cancel >Cancelar</Cancel>
                    <Save >Salvar</Save>
                  </ButtonBoxAdd>
                </AddHabits>
              ) : (
                null
              )}

              {/*  */}

              {(numHabits) ? (
                <Habit>
                  <DivAlt>
                    <p>ver narutinho</p>
                    <ion-icon name="trash-outline"></ion-icon>
                  </DivAlt>

                  <BoxWeekdays >
                    {weekdays.map((value, index) => <Day key={index} className='day'>{value}</Day>)}
                  </BoxWeekdays>
                </Habit>
              ) : (
                <h1>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h1>
              )}
            </BoxHabits>
          </HabitsMain>

          <Footer />
        </>
      ) : null}
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

const AddHabits = styled.div`
  display: ${props => props.habilita ? 'inherits' : 'none'};

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

const BoxWeekdays = styled.div`
  margin-top: 10px;
  display: flex;
`

const BoxHabits = styled.div`
    width: 100%;
    h1 {
    text-align: center;
    }

`

const Day = styled.li`
  width: 30px;
  height: 30px;
  background: ${(props) => props.backgroundColor};
  /* background-color: #CFCFCF; */
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  margin-right: 8px;
  margin-bottom: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 20px;
  color: ${(props) => props.color};
  /* color: #FFFFFF; */

  cursor: pointer;
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

/* SINGLE_HABIT */

const Habit = styled.div`
  width: 100%;
  height: 90px;
  margin-bottom: 15px;
  border-radius: 5px;

  padding: 15px;
  background-color: #ffffff;

  font-size: 20px;
  color: #666666;
`

const DivAlt = styled.div`
  display: flex;
  justify-content: space-between;
    
`