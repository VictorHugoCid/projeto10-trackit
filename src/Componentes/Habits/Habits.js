import './Habits.css'
import NavBar from "../NavBar/NavBar"


export default function Habits() {
    const weekdays = ['D','S','T','Q','Q','S','S']

    function selectDay(){

    }

    return (
        <div className="habitsMain">
            <div className="habitsTitle">
                <h1>Meus hábitos</h1>
                <div className='addButton'>
                    <ion-icon name="add"></ion-icon>
                </div>
            </div>
            <div className='habitsBox'>
                <div className='habitsAddBox'>

                    <input className='habitsInputAdd' type='text' placeholder='nome do hábito'></input>

                    <div className='boxWeekdays'>
                        {weekdays.map((value) => <li className='day' onClick={selectDay} >{value}</li>)}
                    </div>

                    <div className='habitsAddButtons'>
                    <div className='cancel'>Cancelar</div>
                    <div className='save'>Salvar</div>
                    </div>
                </div>

                <h1>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h1>

            </div>


            <NavBar />
        </div>
    )
}