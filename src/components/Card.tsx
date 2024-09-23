import { FC, ReactNode } from "react";
import styled from "styled-components";

interface CardProps {
    title?: string,
    subtitle?: string,
    text?: string,
    image?: string,
    alt?: string,
    component?: ReactNode,
    color?: string,
    border?: string,
    siteLink?: string,
    githubLink?: string,
    width?: string,
    height?: string
};

const Card: FC<CardProps> = ({
    width, height, title, subtitle, text, image, alt, component, color, border, siteLink, githubLink
}) => {
    return (
        <CardMain style={{
            backgroundColor: color,
            border: `2px solid ${border}`,
            width: width || '100%',
            height: height || "90px"
        }}>
            {title && <h1>{title}</h1>}
            {subtitle && <h3>Tecnologias: {subtitle}</h3>}
            {image && <img src={image} alt={alt} />}
            {component && component}
            {text && <p>{text}</p>}
            {siteLink && <a href={siteLink}>Link para site</a>}
            {githubLink && <a href={githubLink}>Link para github</a>}
        </CardMain>
    )
};

export default Card;

const CardMain = styled.section`
    margin: 10px 0;
    color: black;
    font-family: "Roboto";
    font-weight: 500;
    border-radius: 10px;
    padding: 15px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border: 2px solid transparent;
    cursor: pointer;
    &:hover{
        border-color: #20E5F6;
    }

    img{
        width: 100%;
    }

    h2{
        background-color: white;
        padding: 5px;
        box-sizing: border-box;
        border-radius: 8px;
        font-weight: 500;
        font-size: 1.5rem;
        text-align: center;
        margin-bottom: 20px;
    }
    
    p{
        font-weight: 400;
        font-size: 1rem;
        text-align: start;
    }

    @media (max-width: 400px) {
        width: 320px;
    }
`