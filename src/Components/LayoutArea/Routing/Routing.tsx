import "./Routing.css";

import {Navigate, Route, Routes} from "react-router-dom";
import {Profile} from "../../PageArea/Profile/Profile.tsx";
import {Home} from "../../PageArea/HomeArea/Home.tsx";
import {Page404} from "../../PageArea/Page404/Page404.tsx";
import {MovieDetails} from "../../PageArea/MovieDetails/MovieDetails.tsx";


export function Routing() {
    return (
        <div className="Routing">
            <Routes>
                <Route path="/" element={<Navigate to={"/home"}/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/media/:id" element={<MovieDetails/>}/>
                <Route path="*" element={<Page404/>}/>
            </Routes>
        </div>
    );
}
