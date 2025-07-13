import {MovieSelector} from "./MovieSelector/MovieSelector.tsx";

export function Header() {
    return (
        <div className="Header">
            <h3>Movie finder</h3>
            <MovieSelector />
        </div>
    );
}