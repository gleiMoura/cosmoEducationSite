import styled from "styled-components";
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";
import { FC } from "react";

interface HeaderProps {
    changeMode: () => void,
    mode: boolean
}

const Header: FC<HeaderProps> = ({ changeMode, mode }) => {
    return (
        <HeaderMain>
            <a onClick={() => {
                document.getElementById("tecnologies")
                    ?.scrollIntoView({ behavior: "smooth" })
            }
            }>Stack</a>
            <Mode mode={mode} onClick={() => {
                changeMode()
            }}>
                {mode ? <IoMoon size={30} /> : <IoSunnyOutline size={30} />}

            </Mode>
            <a onClick={() => {
                document.getElementById("portfolio")
                    ?.scrollIntoView({ behavior: "smooth" })
            }
            }>Portfólio</a>
        </HeaderMain>
    )
};

const HeaderMain = styled.header`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #F2C744;

    a{
        color: black;
        font-weight: 500;
        font-size: 2rem;
        font-family: 'Roboto';
        cursor: pointer;
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