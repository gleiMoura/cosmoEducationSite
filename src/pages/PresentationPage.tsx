import { FC, useEffect, useState, useContext } from "react"
import { FaArrowCircleRight } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { MdLiveTv } from "react-icons/md";
import { MdLibraryBooks } from "react-icons/md";
import { ModeContext } from "../contexts/ModeContext";
import { theme } from "../theme";
import styled from "styled-components";
import Header from "../components/Header";
import Card from "../components/Card";
import { Button } from "../components/Button";

export const Presentation: FC = () => {
    const modeContext = useContext(ModeContext);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const phoneNumber = "5521990230279";
    const message = "Olá! Gostaria de saber mais as aulas";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

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
                        <Component mode={mode}>
                            <div className="info_box">
                                <h1>
                                    Quem sou eu?
                                </h1>
                                <h2>
                                    Professor de física, matemática e química dedicado a fazer meus alunos atingirem potencial máximo nos estudos.
                                </h2>
                                <div className="curiousity">
                                    <FaArrowCircleRight className="icon" />
                                    <p>Residente da cidade maravilhosa</p>
                                </div>
                                <div className="curiousity">
                                    <FaArrowCircleRight className="icon" />
                                    <p>Apaixonado por corrida de rua</p>
                                </div>
                                <div className="curiousity">
                                    <FaArrowCircleRight className="icon" />
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
                    component={
                        <Component mode={mode}>
                            <div className="diferential_box">
                                <h1>
                                    Diferencial das minhas mentorias
                                </h1>
                                <div className="diferential">
                                    <FaPerson className="diferential_icon" />
                                    <section>
                                        <h2>FOCO TOTAL NO ALUNO</h2>
                                        <p>Por isso as aulas são individualizadas.</p>
                                    </section>
                                </div>
                                <div className="diferential">
                                    <MdLiveTv className="diferential_icon" />
                                    <section>
                                        <h2>AS AULAS SÃO AO VIVO</h2>
                                        <p>Chega de aulas estáticas! Aqui você pode tirar dúvidas em tempo real.</p>
                                    </section>
                                </div>
                                <div className="diferential">
                                    <MdLibraryBooks className="diferential_icon" />
                                    <section>
                                        <h2>LISTAS DE EXERCÍCIO</h2>
                                        <p>São elaboradas de acordo com seu objetivo e conhecimento na disciplina.</p>
                                    </section>
                                </div>
                            </div>
                        </Component>
                    }
                />
            </div>
            <Button text="Entrar em contato" link={whatsappURL} />
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

const Component = styled.div<{ mode: boolean }>`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
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
        font-weight: 400;
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
        width: 130px;
        position: absolute;
        bottom: 0;
        right: 10px;

    }

    .icon{
        font-size: 25px;
        color: ${(props) => props.mode ? theme.colors.yellow : theme.colors.purple}
    }

    .diferential_icon{
        font-size: 35px;
        color: ${(props) => props.mode ? theme.colors.yellow : theme.colors.purple}
    }

    .diferential{
        display: flex;
        margin-top: 20px;
    }

    section{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 300px;
        padding: 0 20px;
        box-sizing: border-box;
    }
`;
