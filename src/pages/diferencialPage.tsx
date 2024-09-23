import { FC, useEffect, useState } from "react"
import styled from "styled-components";
import DiferencialWhite from "/images/diferencial_claro.png";
import DiferencialDark from "/images/diferencial_escuro.png";
import mobile from "/images/mobile.png";
import Header from "../components/Header";
import { useContext } from "react";
import { ModeContext } from "../contexts/ModeContext";

export const Diferencial: FC = () => {
    const modeContext = useContext(ModeContext);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        function resize() {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', resize);

        resize();

        return () => {
            window.removeEventListener('resize', resize);
        }
    }, []);

    if (!ModeContext) {
        throw new Error('ModeSwitcher deve ser usado dentro de um ModeProvider');
    }

    const { mode, setMode } = modeContext;

    const changeMode = () => {
        setMode(!mode)
    };

    return (
        <Main mode={mode} id="differences">
            <Header changeMode={changeMode} mode={mode} />
            <div className="image">
                {windowWidth >= 700 ?
                    <img src={mode ? DiferencialDark : DiferencialWhite} width={'53%'} /> :
                    <img src={mobile} width="100%" className="short" />}
            </div>
            <a className="calendar" target="_blank" href="https://calendar.app.google/dSLjW2YSMAfPSLuN6">
                Agendar Aula
            </a>
        </Main>
    )
};

const Main = styled.main<{ mode: boolean }>`
    width: 100%;
    height: calc(100vh + 80px);
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url(${(props) => props.mode ? '/images/fundodark2.png' : '/images/fundo_claro2.png'});

    .image {
        width: 90%;
        margin-top: 10px;
        padding-top: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
   }

   .calendar {
        width: 300px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 20px 0;
        border-radius: 10px;
        border: none;
        background-color: black;
        color: white;
        font-family: 'Roboto';
        font-size: 1.5rem;
        font-weight: 600;
        text-decoration: none;
        cursor: pointer
   }

   .calendar:hover{
        background-color: #F2C744;
        color: black
   }
`

