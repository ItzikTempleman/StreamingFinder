import { useState } from "react";
import { Button, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { movieService } from "../../../../Services/MovieService.ts";
import { notify } from "../../../../Utils/Notify.ts";
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
            <TextField
                variant="outlined"
                placeholder="Search movie or tv show"
                value={selectedMovie}
                onChange={handleInputChange}
                required
                sx={{
                    height: 40,
                    '& .MuiOutlinedInput-root': {
                        height: 40,
                        paddingRight: 0,
                        alignItems: 'center',
                    },
                    '& input': {
                        height: '100%',
                        padding: '0 14px',
                        boxSizing: 'border-box',
                    }
                }}
            />
            <Button
                variant="contained"
                color="primary"
                onClick={searchMovie}
                startIcon={<SearchIcon />}
                sx={{
                    height: 40,
                    textTransform: 'none',
                    fontFamily: 'Arial, sans-serif',
                    minWidth: '100px',
                    padding: '0 16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                Search
            </Button>
        </div>
    );
}
