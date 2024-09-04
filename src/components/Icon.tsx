import { FC } from "react";
import styled from "styled-components";

interface IconProps {
    name: string,
    link: string,
    size: number
}

const Icon: FC<IconProps> = ({ name, link, size }) => {
    return (
        <IconMain>
            <p style={{ fontSize: `${size / 2}px`, color: "gray" }}>{name}</p>
            <img src={link} alt={name} width={60} height={60} />           
        </IconMain>
    )
};

export default Icon;

const IconMain = styled.div`
    width: 200px;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 5px;


    img{
        width: auto;
    }
`;