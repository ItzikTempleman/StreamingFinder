import "./MediaCard.css";
import type {MediaModel} from "../../../Models/MediaModel.ts";
import {useNavigate} from "react-router-dom";

type MediaCardProps = {
    media: MediaModel;
}

export function MediaCard(props: MediaCardProps) {
    const navigate = useNavigate()

    function navigateToDetails() {
        navigate("/media/" + props.media.id)
    }

    return (
        <div className="MediaCard" onClick={navigateToDetails}>
            <div>
                <span>{props.media.title} </span>
                <span>{props.media.releaseYear} </span>
                <img src={props.media.imageSet?.verticalPoster?.w360} alt={props.media.title}/>
            </div>
        </div>
    );
}
