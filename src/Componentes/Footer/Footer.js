import styled from "styled-components"

import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";

export default function Footer() {
    const percentage = 75

    return (
        <>
            <FooterStyle>
                <div>
                    <Link to='/habitos'>
                        <p>Hábitos</p>
                    </Link>
                    <Link to='/historico'>
                        <p>Histórico</p>
                    </Link>

                </div>

                <Link to='/hoje'>
                    <Circular>
                        <CircularProgressbar
                            value={percentage}
                            text={`Hoje`}
                            background
                            backgroundPadding={6}
                            styles={buildStyles({
                                backgroundColor: "#52B6FF",
                                textSize: '25px',
                                textColor: "#FFFFFF",
                                pathColor: "#FFFFFF",
                                trailColor: "transparent",

                            })}
                        />
                    </Circular>

                </Link>



            </FooterStyle>
        </>
    )
}


const FooterStyle = styled.div`
width: 100vw;
height: 70px;
background-color: #FFFFFF;

display: flex;
align-items: center;
padding: 0 12%;

position: fixed;
bottom: 0;
left: 0;

font-size: 18px;
color: #52B6FF;

p{
    cursor: pointer;
}

div{
    width: 100%;
    display: flex;
    justify-content: space-between;
}

`
const Circular = styled.div`
max-width: 90px;
max-height: 90px;

position: fixed;
bottom: 20px;
left: Calc(50vw - 45px);

font-size: 20px;
font-weight: bold;
`