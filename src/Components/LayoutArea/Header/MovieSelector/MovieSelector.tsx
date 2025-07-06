import "../Header.css";
import {movieService} from "../../../../Services/MovieService.ts";
import {Button, FormControl, TextField} from "@mui/material";
import {notify} from "../../../../Utils/Notify.ts";
import {useState} from "react";
import SearchIcon from '@mui/icons-material/Search';
import * as React from "react";

export function MovieSelector() {

    const [selectedMovie, setSelectedMovie] = useState("");


    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setSelectedMovie(event.target.value);
    }


    async function searchMovie() {
        if (!selectedMovie.trim()) return;
        try {

            await movieService.getMovieFromQuery(selectedMovie);

        } catch (err: unknown) {
            notify.error(err);
        }
    }


    return (
        <div className="MovieSelector">
            <FormControl className="movie-form-control">
                <TextField className="movie-select"
                           label="Search movie or tv show"
                           inputProps={{minLength: 4, maxLength: 30}}
                           required
                           fullWidth
                           placeholder="Search movie or tv show"
                           value={selectedMovie}
                           onChange={handleInputChange}
                />
            </FormControl>

            <Button
                className="search-btn"
                type="button"
                style={{backgroundColor: "#ffffff", color: "#1e5b8c"}}
                variant="contained"
                onClick={searchMovie}
                startIcon={<SearchIcon/>}>
                Search
            </Button>

        </div>
    );
}
