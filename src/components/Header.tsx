import styled from "styled-components";
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";
import { FC } from "react";
import { theme } from "../theme";

interface HeaderProps {
    changeMode: () => void,
    mode: boolean
}

const Header: FC<HeaderProps> = ({ changeMode, mode }) => {
    return (
        <HeaderMain>
            <div className="links">
                <a onClick={() => {
                    document.getElementById("presentation")
                        ?.scrollIntoView({ behavior: "smooth" })
                }}>Início</a>
                <a onClick={() => {
                    document.getElementById("recomendations")
                        ?.scrollIntoView({ behavior: "smooth" })
                }}>O que falam</a>
                <a onClick={() => {
                    document.getElementById("plans")
                        ?.scrollIntoView({ behavior: "smooth" })
                }}>planos</a>
                <a onClick={() => {
                    document.getElementById("informations")
                        ?.scrollIntoView({ behavior: "smooth" })
                }}>informações úteis</a>
            </div>
            <Mode mode={mode} onClick={() => {
                changeMode()
            }}>
                {mode ? <IoMoon size={30} /> : <IoSunnyOutline size={30} />}
            </Mode>
        </HeaderMain>
    )
};

const HeaderMain = styled.header`
    width: 100%;
    height: 80px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.173);
    position: fixed;
    top: 0;
    left: 0;
    padding: 30px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${theme.colors.black};
    z-index: 111;

    .links {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
    }

    a{
        color: white;
        font-weight: 500;
        font-size: 1rem;
        font-family: 'Roboto';
        cursor: pointer;
    }

    a:hover{
        color: #929191
    }

    @media(max-width: 950px) {
        a{
            font-size: 1rem;
        }
    }
`;

const Mode = styled.div<{ mode: boolean }>`
    width: 80px;
    height: 50px;
    background-color: ${(props) => props.mode ? "#21272F" : "white"};
    color: ${(props) => props.mode ? "white" : "#21272F"};
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    
`;

export default Header;