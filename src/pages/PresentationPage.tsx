import { FC, useContext } from "react"
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
    const phoneNumber = "5521990230279";
    const message = "Olá! Gostaria de saber mais as aulas";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

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
                    width="90%"
                    maxWidth="500px"
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
                    width="90%"
                    maxWidth="500px"
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
    height: auto;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${(props) => props.mode ? theme.colors.week_black : theme.colors.white};

    .cards {
        width: 100%;
        padding-top: 100px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        box-sizing: border-box;

        @media(max-width: 600px) {
            flex-direction: column;
        }
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
        margin-bottom: 20px;
    }

    h2{
        font-size: 1.2rem;
        font-weight: 400;
        text-align: center;
        margin-bottom: 10px;
    }

    p{
        font-size: 1rem;
        text-align: center;
        font-weight: 400;
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
        color: ${theme.colors.yellow}
    }

    .diferential_icon{
        font-size: 35px;
        margin-left: 0px;
        color: ${theme.colors.yellow}
    }

    .diferential{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    section{
        width: 250px;
        height: 60px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        margin-bottom: 20px;
        padding: 20px;
    }

    @media(max-width: 600px){
        h1{
            font-size: 1.2rem;
        };
        h2{
            font-size: 1rem;
        };
        p{
            font-size: 0.8rem;
        }
        
    }
`;
