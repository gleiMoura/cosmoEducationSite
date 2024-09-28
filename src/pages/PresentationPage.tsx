import { FC, useEffect, useState, useContext } from "react"
import { FaArrowCircleRight } from "react-icons/fa";
import { ModeContext } from "../contexts/ModeContext";
import { theme } from "../theme";
import styled from "styled-components";
import Header from "../components/Header";
import Card from "../components/Card";

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
            <div className="cards">
                <Card
                    width="500px"
                    height="400px"
                    color="white"
                    component={
                        <Component>
                            <div className="info_box">
                                <h1>
                                    Quem sou eu?
                                </h1>
                                <h2>
                                    Professor de física, matemática e química dedicado a fazer meus alunos atingirem potencial máximo nos estudos.
                                </h2>
                                <div className="curiousity">
                                    <FaArrowCircleRight color={theme.colors.purple} size={25} />
                                    <p>Residente da cidade maravilhosa</p>
                                </div>
                                <div className="curiousity">
                                    <FaArrowCircleRight color={theme.colors.purple} size={25} />
                                    <p>Apaixonado por corrida de rua</p>
                                </div>
                                <div className="curiousity">
                                    <FaArrowCircleRight  size={25} />
                                    <p>Pai de 2 gatos</p>
                                </div>
                            </div>
                            <img src="/images/me.png" alt="Foto do professor" className="photo" />
                        </Component>
                    }

                />
                <Card
                    width="500px"
                    height="400px"
                    color="white"
                />
            </div>
            <a className="calendar_button" target="_blank" href="https://calendar.app.google/dSLjW2YSMAfPSLuN6">
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
    background-color: ${(props) => props.mode ? "#21272F" : theme.colors.green};

    .cards {
        width: 90%;
        padding-top: 100px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        box-sizing: border-box;
   }

   .calendar_button {
        width: 200px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 20px 0;
        border-radius: 10px;
        border: none;
        background-color: ${theme.colors.yellow};
        color: black;
        font-family: 'Roboto';
        font-size: 1.2rem;
        font-weight: 600;
        text-decoration: none;
        cursor: pointer
   }

   .calendar_button:hover{
        background-color: ${theme.colors.purple};
        color: black
   }
`;

const Component = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    position: relative;

    .info_box{
        width: 310px;
        height: 350px;
        padding: 10px;
        box-sizing: border-box;
    };

    h1{
        font-size: 1.5rem;
        font-weight: 500;
        text-align: center;
    }
    h2{
        font-size: 1.2rem;
        font-weight: 300;
        text-align: center;
    }
    p{
        font-size: 1rem;
        text-align: start;
    }

    .curiousity{
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 10px;
        margin-top: 20px;
    }

    .photo{
        width: 150px;
        position: absolute;
        top: 0;
        right: 10px;

    }
`;
