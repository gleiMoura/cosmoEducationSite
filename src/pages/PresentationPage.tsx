import { FC, useEffect, useState } from "react"
import styled from "styled-components";
import IWhite from "/images/eu_claro.png";
import IDark from "/images/eu_escuro.png";
import mobile from "/images/mobile.png";
import Header from "../components/Header";
import { useContext } from "react";
import { ModeContext } from "../contexts/ModeContext";

export const Presentation: FC = () => {
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
        <Main mode={mode} id="presentation">
            <Header changeMode={changeMode} mode={mode} />
            <div className="image">
                {windowWidth >= 700 ?
                    <img src={mode ? IDark : IWhite} width={'53%'} /> :
                    <img src={mobile} width="100%" className="short" />}
            </div>

        </Main>
    )
};

const Main = styled.main<{ mode: boolean }>`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: ${(props) => props.mode ? "#21272F" : "white"};

    .image {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 30px;
        box-sizing: border-box;
   }
`

