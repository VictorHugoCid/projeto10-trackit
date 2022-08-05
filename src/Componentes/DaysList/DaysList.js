import styled from 'styled-components'
import Day from './Day'

export default function DaysList({ selectedDays, setSelectedDays, id, name, days }) {
    const weekdays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

    function colorDay(index) {
        if (days.includes(index)) {
        }
    }

    /* function selected */
    return (

        <DaysListStyle >
            {weekdays.map((weekday, index) =>
                
                <Day
                    key={index}
                    index={index}
                    weekday={weekday}
                    selectedDays={selectedDays}
                    setSelectedDays={setSelectedDays}
                    id={id}
                    name={name}
                    days={days}
                />)}
        </DaysListStyle>

    )
}

const DaysListStyle = styled.div`
  margin-top: 10px;
  display: flex;
`

