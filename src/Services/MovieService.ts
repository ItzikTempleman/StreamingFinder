import type {MovieModel} from "../Models/MovieModel.ts";
import axios from "axios";
import {appConfig} from "../Utils/AppConfig.ts";
import {store} from "../Redux/Store.ts";
import {movieSlice} from "../Redux/MovieSlice.ts";

class MovieService {
    public async getMovieFromQuery(title: string):Promise<void>{
        const options = {
            params: {
                title,
                series_granularity: "show",
                show_type: "movie",
                output_language: "en",
                country: "us"
            },
            headers: {
                "x-rapidapi-key": "a319315553msh5d8fd126c22c982p1cfcc7jsn6398f0e32de8",
                "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
                "Content-Type": "application/json"
            }
        };

        const response = await axios.get<MovieModel[]>(`${appConfig.baseUrl}/shows/search/title`, options);
        store.dispatch(movieSlice.actions.initMovieState(response.data))
    }
}

export const movieService = new MovieService();
