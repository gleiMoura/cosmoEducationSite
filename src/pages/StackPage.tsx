import { FC, useContext } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import Title from "../components/Title";
import { ModeContext } from "../contexts/ModeContext";

export const Stack: FC = () => {
    const modeContext = useContext(ModeContext);

    const { mode } = modeContext;

    return (
        <Main mode={mode} id="tecnologies">
            <Title title="O que falam das minhas aulas?" />
            <Cards>
                <Card color={mode ? "white" : "gray"} component={
                    <Content>
                        <h1 className="name">
                            Juliana
                        </h1>
                        <p className="text">
                            Eu adoro o Gleison
                        </p>
                        <div className="start">
                            Eu sou uma estrelinha
                        </div>
                    </Content>
                } />
            </Cards>
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
    background-color: ${(props) => props.mode ? "none" : "white"};
`;

const Cards = styled.div`
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    flex-wrap: wrap;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    position: relative;

    h1{
        font-size: 1.2rem;
        font-weight: 500;
    }

    p{
        font-size: 1rem;
    }

    .stars{
        
    }
`