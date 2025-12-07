import CurrentLocation from "./CurrentLocation.jsx";
import {Link} from "react-router-dom";


function NavBar() {
    return (
        <header>
            <nav className="navbar">
                <div className="item">
                    <Link className={"nav-link"} to={"/"}>Omar Lundgren</Link>
                </div>
                <div className="item">
                    <Link className={"nav-link"} to={"/about"}>About</Link>
                    <Link className={"nav-link"} to={"/projects"}>Projects</Link>
                    <Link className={"nav-link"} to={"/contact"}>Contact</Link>
                </div>
                <div className="item">
                    <CurrentLocation/>
                </div>
            </nav>
        </header>

    )
}
export default NavBar;