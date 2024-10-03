import { FC, useContext } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import Title from "../components/Title";
import { ModeContext } from "../contexts/ModeContext";
import { theme } from "../theme";
import { CgArrowLongRightC } from "react-icons/cg";
import { Button } from "../components/Button";


export const Plans: FC = () => {
    const modeContext = useContext(ModeContext);

    const { mode } = modeContext;

    return (
        <Main mode={mode} id="plans">
            <Title title="Planos disponíveis" />
            <Cards>
                <Card color={mode ? "gray" : "white"} margin="80px 0 0 0" toggleSides maxWidth="600px" height="170px" padding="0px" component={
                    <Content mode={mode}>
                        <div className="price_plan">
                            <div className="bimestral">
                                <p className="category">PLANO BIMESTRAL</p>
                                <p className="value">R$ 140,00 <span>mensal</span></p>
                            </div>
                            <div className="trimestral">
                                <p className="category">PLANO TRIMESTRAL</p>
                                <p className="value">R$ 180,00 <span>mensal</span></p>
                            </div>
                        </div>
                        <div className="plan_info trilha">
                            <h1 className="name">
                                TRILHA
                            </h1>
                            <div className="stars">
                                <CgArrowLongRightC className="icon" />
                                <CgArrowLongRightC className="icon" />
                                <CgArrowLongRightC className="icon" />
                                <CgArrowLongRightC className="icon" />
                            </div>
                            <p className="text">
                                * 1 aula por semana via meet
                            </p>
                            <p className="text">
                                * 1 lista de exercício por semana
                            </p>
                            <p className="text">
                                * Acesso ao whatsapp e instagram para tirar dúvidas frequentes.
                            </p>
                        </div>
                    </Content>
                } />
                <Card color={mode ? "gray" : "white"} toggleSides height="170px" maxWidth="600px" padding="0px" component={
                    <Content mode={mode}>
                        <div className="price_plan">
                            <div className="bimestral">
                                <p className="category">PLANO BIMESTRAL</p>
                                <p className="value">R$ 360,00 <span>mensal</span></p>
                            </div>
                            <div className="trimestral">
                                <p className="category">PLANO TRIMESTRAL</p>
                                <p className="value">R$ 280,00 <span>mensal</span></p>
                            </div>
                        </div>
                        <div className="plan_info jornada">
                            <h1 className="name">
                                JORNADA
                            </h1>
                            <div className="stars">
                                <CgArrowLongRightC className="icon" />
                                <CgArrowLongRightC className="icon" />
                                <CgArrowLongRightC className="icon" />
                                <CgArrowLongRightC className="icon" />
                                <CgArrowLongRightC className="icon" />
                                <CgArrowLongRightC className="icon" />
                            </div>
                            <p className="text">
                                * 2 aula por semana via meet
                            </p>
                            <p className="text">
                                * 2 lista de exercício por semana
                            </p>
                            <p className="text">
                                * Acesso ao whatsapp e instagram para tirar dúvidas frequentes.
                            </p>
                        </div>
                    </Content>
                } />
                <Card color={mode ? "gray" : "white"} height="170px" maxWidth="600px" padding="0px" component={
                    <Content mode={mode}>
                        <div className="price_plan">
                            <div className="bimestral">
                                <p className="category">PLANO BIMESTRAL</p>
                                <p className="value">R$ 540,00 <span>mensal</span></p>
                            </div>
                            <div className="trimestral">
                                <p className="category">PLANO TRIMESTRAL</p>
                                <p className="value">R$ 420,00 <span>mensal</span></p>
                            </div>
                        </div>
                        <div className="plan_info maratona">

                            <h1 className="name">
                                MARATONA
                            </h1>
                            <div className="stars">
                                <CgArrowLongRightC className="icon" />
                                <CgArrowLongRightC className="icon" />
                                <CgArrowLongRightC className="icon" />
                                <CgArrowLongRightC className="icon" />
                                <CgArrowLongRightC className="icon" />
                                <CgArrowLongRightC className="icon" />
                                <CgArrowLongRightC className="icon" />
                            </div>
                            <p className="text">
                                * 3 aula por semana via meet
                            </p>
                            <p className="text">
                                * 3 lista de exercício por semana
                            </p>
                            <p className="text">
                                * Acesso ao whatsapp e instagram para tirar dúvidas frequentes.
                            </p>
                        </div>
                    </Content>
                } />
            </Cards>
            <Button text="Agendar Aula" link="https://calendar.app.google/dSLjW2YSMAfPSLuN6" />
        </Main>
    )
};

const Main = styled.main<{ mode: boolean }>`
    width: 100%;
    min-height: 100vh;
    max-height: auto;
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-size: 'cover';
    background-position: 'center';
    background-color: ${(props) => props.mode ? theme.colors.week_black : theme.colors.white};
`;

const Cards = styled.div`
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 100px;

    .photo{
        width: 400px;
    }
`;

const Content = styled.div<{ mode: boolean }>`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    border-radius: 10px;

    h1{
        font-size: 1.2rem;
        font-weight: 500;
    }

    p{
        font-size: 1rem;
        font-weight: 600;
        margin: 8px 0;
    }

    .icon{
        color: black;
    }

    .trimestral{
        margin-top: 20px;
    }

    .price_plan{
        width: 150px;
        height: auto;
        padding: 10px;
        background-color: black;
        border-radius: 10px;
        color: black;
        position: absolute;
        top: -50px;
        right: -60px;

        @media(max-width: 600px){
            top:-80px;
            right: 0px;
        }
    }

    .value{
        font-size: 1rem;
        font-weight: 800;
        align-items: first baseline;
        color: ${theme.colors.yellow};
    }

    span{
        font-size: 0.8rem;
        margin-left: 8px;
        color: 'gray'
    }

    .category{
        font-size: 0.8rem;
        color: white;
        font-weight: 600;
    }

    .plan_info{
        width: 100%;
        height: 100%;
        padding: 15px;
        box-sizing: border-box;
        border-radius: 10px;
    }

    .trilha{
        background-image: url('/images/fundo_trilha.png');
    }

    .jornada{
        background-image: url('/images/fundo-jornada.png');
    }

    .maratona{
        background-image: url('/images/fundo-maratona.png');
    }
`
