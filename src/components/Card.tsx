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
    height?: string,
    maxWidth?: string,
    maxHeight?: string,
    padding?: string,
    boxShadow?: string,
    margin?: string,
    toggleSides?: boolean
};

const Card: FC<CardProps> = ({
    width, height, title, subtitle, text, image, alt, component, color, border, siteLink, githubLink, boxShadow, margin, padding, maxWidth, maxHeight, toggleSides
}) => {
    return (
        <CardMain className={toggleSides ? "item" : ""} style={{
            backgroundColor: color,
            border: `2px solid ${border}`,
            width: width || '100%',
            height: height || "90px",
            boxShadow: boxShadow || "5px 5px 10px rgba(0, 0, 0, 0.5)",
            margin: margin || "10px",
            padding: padding || "15px",
            maxWidth: maxWidth,
            maxHeight: maxHeight
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
    color: black;
    font-family: "Roboto";
    font-weight: 500;
    border-radius: 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border: 2px solid transparent;
    cursor: pointer;

    img{
        width: 100%;
    }

    @media (max-width: 400px) {
        width: 320px;
    }
`