import styled from "styled-components";
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";
import { FC, useState } from "react";
import { theme } from "../theme";
import { FaBars } from "react-icons/fa";


interface HeaderProps {
    changeMode: () => void,
    mode: boolean
}

const Header: FC<HeaderProps> = ({ changeMode, mode }) => {
    const [toggleBar, setToggleBar] = useState(false);

    const ChangeToggle = () => {
        setToggleBar(!toggleBar)
    };

    return (
        <HeaderMain mode={mode}>
            <div className="mode invisible" onClick={ChangeToggle}>
                <FaBars />
            </div>
            <div className={toggleBar ? "mobile_links" : "links"}>
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
                    document.getElementById("information")
                        ?.scrollIntoView({ behavior: "smooth" })
                }}>informações úteis</a>
            </div>
            <div className="mode" onClick={() => {
                changeMode()
            }}>
                {mode ? <IoMoon size={30} /> : <IoSunnyOutline size={30} />}
            </div>
        </HeaderMain>
    )
};

const HeaderMain = styled.header<{ mode: boolean }>`
    width: 100%;
    height: 80px;
    padding: 30px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.173);
    position: fixed;
    top: 0;
    left: 0;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${(props) => props.mode ? theme.colors.black : theme.colors.yellow};
    z-index: 111;

    .links {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
    }

    .mobile_links{
        width: 200px;
        height: 200px;
        padding: 30px;
        box-sizing: border-box;
        background-color: black;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        border-radius: 10px;
        color: ${theme.colors.white};
        position: absolute;
        top: 80px;
    }

    a{
        color: ${(props) => props.mode ? theme.colors.white : theme.colors.black};
        font-weight: 500;
        font-size: 1rem;
        font-family: 'Roboto';
        cursor: pointer;
    }

    a:hover{
        color: #929191
    }

    .mode{
        width: 80px;
        height: 50px;
        background-color: ${(props) => props.mode ? "#21272F" : "white"};
        color: ${(props) => props.mode ? "white" : "#21272F"};
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    .invisible{
        display: none;
    }

    @media(max-width: 600px) {
        a{
            font-size: 1rem;
        }
        .links{
            display: none;
        }

        .invisible{
            display: flex;
        }
    }
`;

export default Header;