import styled from 'styled-components'
import Day from './Day'

export default function DaysList() {
    const weekdays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']




    return (

        <DaysListStyle >
            {weekdays.map((weekday, index) =>
                <Day
                    key={index}
                    weekday={weekday}
                />)}
        </DaysListStyle>

    )
}

const DaysListStyle = styled.div`
  margin-top: 10px;
  display: flex;
`

