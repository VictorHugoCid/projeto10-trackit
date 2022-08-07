import { useContext } from 'react'
import styled from 'styled-components'
import GlobalContext from '../../Context/GlobalContext'
import Day from './Day'

export default function DaysList({ selectedDays }) {
    const weekdays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']


    return (
        <DaysListStyle >
            {weekdays.map((weekday, index) =>
                <Day
                key={index}
                index={index}
                weekday={weekday}
                selectedDays={selectedDays}
            />
            )}
        </DaysListStyle>

    )
}

const DaysListStyle = styled.div`
  margin-top: 10px;
  display: flex;
`


