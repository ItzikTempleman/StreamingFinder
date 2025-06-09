// import "./MediaList.css";
// import { useEffect, useState } from "react";
// import type { MediaModel } from "../../../Models/MediaModel.ts";
// import { mediaService } from "../../../Services/MediaService.ts";
// import { MediaCard } from "../MediaCard/MediaCard.tsx";
// import { useLocation } from "react-router-dom";
//
// export function MediaList() {
//     const location = useLocation();
//     const params = new URLSearchParams(location.search);
//     const titleQuery = params.get("title") ?? "";
//
//     const [media, setMedia] = useState<MediaModel[]>([]);
//
//     useEffect(() => {
//         mediaService.getMediaFromQuery(titleQuery)
//             .then(dbMedia => setMedia(dbMedia))
//             .catch(err => console.log(err));
//     }, [titleQuery]);
//
//     return (
//         <div className="MediaListContainer">
//             <h3>List of movies and tv shows:</h3>
//             <div className="MediaList">
//                 {media.map(me => <MediaCard key={me.id} media={me} />)}
//             </div>
//         </div>
//     );
// }