import CurrentLocation from "./CurrentLocation.jsx";

function NavBar() {
    return (
        <header>
            <nav className="navbar">
                <div className="item">
                    <a className="nav-link" href="#home">Omar Lundgren</a>
                </div>
                <div className="item">
                    <a className="nav-link" href="#about">About</a>
                    <a className="nav-link" href="#projects">Projects</a>
                    <a className="nav-link" href="#contact">Contact</a>
                </div>
                <div className="item">
                    <CurrentLocation />
                </div>
            </nav>
        </header>
    )
}

export default NavBar;