import { FC } from "react"
import styled from "styled-components";
import { theme } from "../theme";

interface propsButton {
    text: string,
    link: string
}

export const Button: FC<propsButton> = ({ text, link }) => {
    return (
        <Main target="_blank" href={link}>
            {text}
        </Main>
    )
};

const Main = styled.a`
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
        cursor: pointer;

        &:hover{
        color: ${theme.colors.week_black};
   }
`