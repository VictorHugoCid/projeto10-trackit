import { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import GlobalContext from '../../../Context/GlobalContext'


export default function NavBar() {

    const{image} = useContext(GlobalContext)


    return (
        <NavBarStyle>
            <Link to='/'>
                <p>Trackit</p>
            </Link>
            <NavBarImg src={image} alt='IMG' />
        </NavBarStyle>
    )

}


/* @import url("https://fonts.googleapis.com/css2?family=Playball&display=swap"); */


const NavBarStyle = styled.div`

  width: 100vw;
  height: 70px;

  background: #126ba5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  position: fixed;
  top: 0;
  left: 0;

  padding: 0 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  p{
    font-size: 39px;
  font-family: "Playball", cursive;
  color: #ffffff;
  }

  img{
    width: 51px;
  height: 51px;
  border-radius: 25.5px;

  background-color: #ffffff;
  }
`

const NavBarImg = styled.img`

  width: 51px;
  height: 51px;
  border-radius: 25.5px;

  background-color: #ffffff;    
  object-fit: cover;

`