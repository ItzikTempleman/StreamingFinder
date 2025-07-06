import type {MovieModel} from "../Models/MovieModel.ts";
import {configureStore} from "@reduxjs/toolkit";
import {movieSlice} from "./MovieSlice.ts";

export type AppState = {
    movieModel: MovieModel[];
};

export const store = configureStore<AppState>(
    {
        reducer: {
            movieModel: movieSlice.reducer
        }
    }
)