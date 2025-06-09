import type {MediaModel} from "../Models/MediaModel.ts";
import axios from "axios";
import {appConfig} from "../Utils/AppConfig.ts";

class MediaService {
    public async getMediaFromQuery(title: string): Promise<MediaModel[]> {
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

        const response = await axios.get<MediaModel[]>(`${appConfig.baseUrl}/shows/search/title`, options);
        return response.data;
    }
}

export const mediaService = new MediaService();
