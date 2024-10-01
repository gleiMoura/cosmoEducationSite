import { FC, useContext } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import Title from "../components/Title";
import { ModeContext } from "../contexts/ModeContext";
import { theme } from "../theme";
import { FaStar } from "react-icons/fa";
import { Button } from "../components/Button";


export const Recomendation: FC = () => {
    const modeContext = useContext(ModeContext);

    const { mode } = modeContext;

    return (
        <Main mode={mode} id="recomendations">
            <Title title="O que falam das minhas aulas?" />
            <Cards>
                <Card color={mode ? "gray" : "white"} height="auto" component={
                    <Content>
                        <h1 className="name">
                            Ana Beatriz Melo
                        </h1>
                        <p className="text">
                            Explicação clara e objetiva.
                        </p>
                        <div className="stars">
                            <FaStar className="icon" />
                            <FaStar className="icon" />
                            <FaStar className="icon" />
                            <FaStar className="icon" />
                            <FaStar className="icon" />
                        </div>
                    </Content>
                } />
                <Card color={mode ? "gray" : "white"} height="auto" component={
                    <Content>
                        <h1 className="name">
                            Victor Suares
                        </h1>
                        <p className="text">
                            "Um professor serio, responsavel, com dominio do que explica, portanto com luz propria pra esclarecer suas duvidas. Me fez compreender muito melhor termodinamica e Ondulatória."
                        </p>
                        <div className="stars">
                            <FaStar className="icon" />
                            <FaStar className="icon" />
                            <FaStar className="icon" />
                            <FaStar className="icon" />
                            <FaStar className="icon" />
                        </div>
                    </Content>
                } />
                <Card color={mode ? "gray" : "white"} height="auto" component={
                    <Content>
                        <h1 className="name">
                            Gabriela Menezes
                        </h1>
                        <p className="text">
                            "Professor excelente, com ótima didática, explicação perfeita, tem muita paciência e domínio do que explica. O melhor!"
                        </p>
                        <div className="stars">
                            <FaStar className="icon" />
                            <FaStar className="icon" />
                            <FaStar className="icon" />
                            <FaStar className="icon" />
                            <FaStar className="icon" />
                        </div>
                    </Content>
                } />
                <Card color={mode ? "gray" : "white"} height="auto" component={
                    <Content>
                        <h1 className="name">
                            Cássia de Fátima Oliveira Vaz
                        </h1>
                        <p className="text">
                            "Muito educado. Ótima didática. Prestativo. Excelente professor. Obrigada."
                        </p>
                        <div className="stars">
                            <FaStar className="icon" />
                            <FaStar className="icon" />
                            <FaStar className="icon" />
                            <FaStar className="icon" />
                            <FaStar className="icon" />
                        </div>
                    </Content>
                } />
                <Button text="Perfil no Getninjas" link="https://www.getninjas.com.br/anuncios/aulas/escolares-e-reforco/quimica/presencial/ensino-fundamental/prof-gleison-moura?ref=internal&subdomain=www&utm_campaign=43355731&utm_medium=whatsapp&utm_source=getninjas" />
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
    background-color: ${(props) => props.mode ? "none" : theme.colors.background};
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
    align-items: flex-start;
    position: relative;

    h1{
        font-size: 1.2rem;
        font-weight: 500;
    }

    p{
        font-size: 1rem;
        margin: 4px 0;
        font-weight: 400;
    }

    .icon{
        color: ${theme.colors.yellow};
    }
`