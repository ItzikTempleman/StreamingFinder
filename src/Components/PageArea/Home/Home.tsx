import "./Home.css";
import { useForm } from "react-hook-form";
import { useState } from "react";
import type { MediaModel } from "../../../Models/MediaModel.ts";
import { mediaService } from "../../../Services/MediaService.ts";
import { MediaCard } from "../../MediaArea/MediaCard/MediaCard.tsx";

export function Home() {
    const { register, handleSubmit, formState: { isValid } } = useForm<MediaModel>();
    const [media, setMedia] = useState<MediaModel[]>([]);

    async function search(data: MediaModel) {
        const query = data.title?.trim() ?? "";
        const results = await mediaService.getMediaFromQuery(query);
        setMedia(results);
    }

    return (
        <div className="Home">
            <form onSubmit={handleSubmit(search)}>
                <input
                    className="searchInput"
                    type="text"
                    {...register("title", { required: true })}
                    placeholder="Search any movie"
                />
                <button type="submit" disabled={!isValid}>Search</button>
            </form>

            {media.length > 0 && (
                <div className="MediaListContainer">
                    <h3>List of movies and tv shows:</h3>
                    <div className="MediaList">
                        {media.map(me => (
                            <MediaCard key={me.id} media={me} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}