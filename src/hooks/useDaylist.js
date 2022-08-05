import { useMemo } from 'react'

export function useDayList(selectedDays) {
  return useMemo(
    () => [
      {
        letter: 'D',
        dayName: 'Domingo',
        isSelected: selectedDays?.includes(0) || false,
      },
      {
        letter: 'S',
        dayName: 'Segunda',
        isSelected: selectedDays?.includes(1) || false,
      },
      {
        letter: 'T',
        dayName: 'Terça',
        isSelected: selectedDays?.includes(2) || false,
      },
      {
        letter: 'Q',
        dayName: 'Quarta',
        isSelected: selectedDays?.includes(3) || false,
      },
      {
        letter: 'Q',
        dayName: 'Quinta',
        isSelected: selectedDays?.includes(4) || false,
      },
      {
        letter: 'S',
        dayName: 'Sexta',
        isSelected: selectedDays?.includes(5) || false,
      },
      {
        letter: 'S',
        dayName: 'Sábado',
        isSelected: selectedDays?.includes(6) || false,
      },
    ],
    [selectedDays]
  )
}