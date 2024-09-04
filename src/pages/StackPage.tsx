import { FC, useContext } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import Icon from "../components/Icon";
import Title from "../components/Title";
import { ModeContext } from "../contexts/ModeContext";

export const Stack: FC = () => {
    const modeContext = useContext(ModeContext);

    const { mode } = modeContext;

    return (
        <Main mode={mode} id="tecnologies">
            <Title title="Tecnologias" />
            <Cards>
                <Card title="Front End" color={mode ? "white" : "#F2C744"} component={
                    <>
                        <Icon name="ReactJS" size={70} link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
                        <Icon name="HTML" size={70} link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                        <Icon name="CSS" size={70} link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
                    </>
                } />
                <Card title="Back End" color={mode ? "white" : "#F2C744"} component={
                    <>
                        <Icon name="MongoDB" size={70} link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" />
                        <Icon name="PostgreSQL" size={70} link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" />
                        <Icon name="Express" size={70} link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                    </>
                } />
                <Card title="Complementares" color={mode ? "white" : "#F2C744"} component={
                    <>
                        <Icon name="Git" size={70} link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg" />
                        <Icon name="Jest" size={70} link="https://cdn.iconscout.com/icon/free/png-512/free-jest-3521517-2945020.png?f=avif&w=256" />
                        <Icon name="Docker" size={70} link="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" />
                    </>
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
    background-image: url(${(props) => props.mode ? '/images/fundo.png' : '/images/fundo_claro.png'});
    background-size: 'cover';
    background-position: 'center';
    background-color: ${(props) => props.mode ? "none" : "white"};
`;

const Cards = styled.div`
    width: 100%;
    flex-wrap: wrap;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`