import { FC, useContext } from "react";
import { ModeContext } from "../contexts/ModeContext";
import styled from "styled-components";
import Title from "../components/Title";
import Data from "../assets/data.json";
import Card from "../components/Card";
import Video from "../components/Video";

export const Portfolio: FC = () => {
    const cardsList = [...Data].reverse();
    const modeContext = useContext(ModeContext);

    const { mode } = modeContext;

    return (
        <Main mode={mode} id="portfolio">
            <Title title="Portfólio" />

            <div className="cards">
                {cardsList.map((info, index) => {
                    return (
                        <a href={info.site} target="_blank">
                            <Card
                                key={index}
                                title={info.title || "undefined"}
                                subtitle={info.subtitle}
                                text={info.text}
                                alt={info.title}
                                component={info.type === "frontend" ? <Video path={`/videos/video${info.title}.mp4`} /> : <img src={`/images/${info.title}.png`} />}
                                color="#F2C744"
                            />
                        </a>
                    )
                })}
            </div>
        </Main>
    )
};

const Main = styled.main<{ mode: boolean }>`
    width: 100%;
    height: auto;
    min-height: 100vh;
    padding: 20px 0;
    background-color: ${(props) => props.mode ? "#21272F" : "white"};
    display: flex;
    flex-direction: column;
    align-items: center;

    .cards {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`;
