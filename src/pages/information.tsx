import { FC, useContext } from "react";
import styled from "styled-components";
import Title from "../components/Title";
import { ModeContext } from "../contexts/ModeContext";
import { theme } from "../theme";
import { Footer } from "../components/footer";



export const Information: FC = () => {
    const modeContext = useContext(ModeContext);

    const { mode } = modeContext;

    return (
        <>

            <Main mode={mode} id="information">
                <Title title="Informações úteis" />
                <Content mode={mode}>
                    <p>
                        Cada aula possui 1 hora de duração.
                    </p>
                </Content>
                <Content mode={mode}>
                    <p>
                        Você pode escolher os horários e dias dos encontros dentro da disponibilidade de horários que será entregue via link de agendamento, ao escolher os horários, estes serão fixos e semanais.
                    </p>
                </Content>
                <Content mode={mode}>
                    <p>
                        Demonstrando interesse em alguma das mentorias, será enviado um formulário para entender melhor as necessidades do mentorado e criar um plano de acordo com a mentoria escolhida. A partir de então, será agendado o primeiro encontro para discutir melhor o plano desenvolvido.
                    </p>
                </Content>
            </Main>
            <Footer />
        </>
    )
};

const Main = styled.main<{ mode: boolean }>`
    width: 100%;
    max-height: auto;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-size: 'cover';
    background-position: 'center';
    background-color: ${(props) => props.mode ? "none" : theme.colors.background};
`;

const Content = styled.div<{ mode: boolean }>`
    width: 90%;
    max-width: 600px;
    height: 100%;
    display: flex;
    padding: 20px;
    text-align: justify;
    font-family: 'Roboto';
    margin: 10px 0;
    border-radius: 10px;
    background-color: ${(props) => props.mode ? 'black' : theme.colors.green};

    p{
        font-size: 1.2rem;
        margin: 4px 0;
        color: ${(props) => props.mode ? 'white' : 'black'}
    }

    .icon{
        margin-right: 8px;
        color: black;
        font-size: 1rem;
    }
`