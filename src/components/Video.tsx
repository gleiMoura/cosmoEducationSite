import { FC } from "react";

interface VideoProps {
    path: string
}

const Video: FC<VideoProps> = ({ path }) => {
    return (
        <video
            width="320"
            height="240"
            loop
            preload=''
            muted
            autoPlay
        >
            <source src={path} type="video/mp4" />
                Your browser does not support the video tag.
        </video>
    )
};

export default Video;
