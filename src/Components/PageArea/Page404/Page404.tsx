import "./Page404.css";
import {NavLink} from "react-router-dom";

export function Page404() {
    return (
        <div className="Page404">
            <NavLink to={"/home"}>Return to Home</NavLink>
            <h1>404</h1>
            <h4>The requested page does not exist</h4>
        </div>
    );
}
