import type {MovieModel} from "../Models/MovieModel.ts";
import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

function initMovieState(_: MovieModel[], payloadAction: PayloadAction<MovieModel[]>): MovieModel[] {
    return payloadAction.payload;
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export const movieSlice = createSlice<MovieModel[]>(
    {
        name: "movieSlice",
        initialState: [],
        reducers: {
            initMovieState
        }
    }
)