import React from "react";
import styled from "styled-components";

import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

export default function Today(){

    const habitosFeitos = 0

    return(
        <TodayMain>
            <NavBar/>

        <TodayTitle>
            <h1>Segunda-Feira 17/05</h1>
            <>
                {(habitosFeitos) ? (null) : (<h2>Nenhum hábito concluído ainda</h2>)}
            </>
        </TodayTitle>

        <Habit>
            {/* VAI ROLAR UM MAP AQUI (NO HABIT) */}
            <HabitText>
                <h1>Ler 1 capítulo do livro</h1>
                <h2>Sequência atual: 3dias</h2>
                <h2>Seu recorde: 5 dias</h2>
            </HabitText>

            <HabitCheck>
                    <ion-icon name="checkmark-outline"></ion-icon>
            </HabitCheck>
        </Habit>


        <Footer/>
        </TodayMain>

    )
}


const TodayMain = styled.div`

  height: 100vh;
  margin-top: 70px;
  background-color: #f2f2f2;
  padding: 0 20px;

`

const TodayTitle = styled.div`
  width: 100%;
  min-height: 90px;

  display: flex;
  flex-direction: column;
  justify-content: center;


  h1 {
  font-size: 23px;
  color: #126BA5;
  margin-bottom: 5px;
  }

  h2{
    font: 18px;
    color: #BABABA;
  }
`

const Habit = styled.div`
  width: 100%;
  height: 90px;
  margin-bottom: 15px;
  border-radius: 5px;

  padding: 15px;
  background-color: #ffffff;

  font-size: 20px;
  color: #666666;

  display: flex;
  justify-content: space-between;
  align-items: center;

`

const HabitText =styled.div`

h1{
    font-size: 20px;
    color: #666666;
}

h2{
    font-size: 13px;
    color: #666666;
}

`
const HabitCheck = styled.div`
width: 70px;
height: 70px;

display: flex;
justify-content: center;
align-items: center;

background: #EBEBEB;
/* background: #8FC549; */
border: 1px solid #E7E7E7;
border-radius: 5px;

ion-icon{
    width: 60px;
    height: 55px;
    color: #FFFFFF;
}

`