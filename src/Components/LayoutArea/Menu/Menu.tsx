import "./Menu.css";
import {NavLink} from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';

export function Menu() {
    return (
        <div className="Menu">
            <div className="menu-header">
                <i className="bi bi-three-dots-vertical"></i>
                <span>Menu</span>
            </div>

            <NavLink to="/home" className="nav-link">
                <i className="bi bi-house-door-fill"></i> Home
            </NavLink>
            <NavLink to="/profile" className="nav-link">
                <i className="bi bi-person-fill"></i> Profile
            </NavLink>
        </div>
    );
}
