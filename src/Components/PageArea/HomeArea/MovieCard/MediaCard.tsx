import "./MovieCard.css";
import type {MovieModel} from "../../../../Models/MovieModel.ts";
import {useNavigate} from "react-router-dom";

type MovieCardProps = {
    movie: MovieModel;
}

export function MovieCard(props: MovieCardProps) {
    const navigate = useNavigate()

    function navigateToDetails() {
        navigate("/media/" + props.movie.id)
    }

    return (
        <div className="MovieCard" onClick={navigateToDetails}>
            <div>
                <span>{props.movie.title} </span>
                <span>{props.movie.releaseYear} </span>
                <img src={props.movie.imageSet?.verticalPoster?.w360} alt={props.movie.title}/>
            </div>
        </div>
    );
}
