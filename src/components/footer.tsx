import { FC, useContext } from "react";
import styled from "styled-components";
import { theme } from "../theme";
import { ModeContext } from "../contexts/ModeContext";

export const Footer: FC = () => {
    const modeContext = useContext(ModeContext);
    const { mode } = modeContext;

    return (
        <Content mode={mode}>
            © 2024 CosmoEducation, todos os direitor reservados
        </Content>
    )
};

const Content = styled.div<{ mode: boolean }>`
    width: 100%;
    height: 30px;
    background-color: ${(props) => props.mode ? '#21272F' : theme.colors.green};
    color: ${(props) => props.mode ? 'white' : 'black'};;
    font-family: "Roboto";
    font-size: 0.8rem;
    display: flex;
    justify-content: center;
    align-items: center;

`