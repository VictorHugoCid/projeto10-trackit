import styled from "styled-components"

export default function Day({ weekday, selectedDays, index }) {

  return (
    <DayStyle
      clicked={selectedDays.includes(index)}
    >
      {weekday}
    </DayStyle>
  )
}

const DayStyle = styled.li`
  width: 30px;
  height: 30px;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  margin-right: 8px;
  margin-bottom: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 20px;

  background-color: ${(props) => (props.clicked ? "#CFCFCF" : "#fff")};
  color: ${(props) => (props.clicked ? "#FFF" : "#CFCFCF")};

`