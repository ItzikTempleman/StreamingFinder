import "./Menu.css";
import {NavLink} from "react-router-dom";

export function Menu() {
    return (
        <div className="Menu">
            <NavLink to="/home" className="nav-link">Home</NavLink>
            <NavLink to="/profile" className="nav-link">Profile</NavLink>
        </div>
    );
}
