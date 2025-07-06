import "./Home.css";
import {useSelector} from "react-redux";
import type {AppState} from "../../../Redux/Store.ts";
import {MovieCard} from "./MovieArea/MovieCard/MediaCard.tsx";


export function Home() {

    const movie = useSelector((state: AppState) => (
            state.movieModel
        )
    )
    if (!movie) return null;

    return (
        <div className="Home">
            {movie.length > 0 && (
                <div className="MovieListContainer">
                    <h3>List of movies and tv shows:</h3>
                    <div className="MovieList">
                        {movie.map(movieItem => (
                            <MovieCard key={movieItem.id} movie={movieItem}/>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}