import './styles/App.css'
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import NavBar from "./components/NavBar.jsx";
import Stars from "./components/stars.jsx";
import FallingStar from "./components/fallingStar.jsx";

function App() {
    return (
        <>
            <FallingStar />
            <NavBar />
            <main className="main-content">
                <section id="home">
                    <Stars offset={0}/>
                    <Home />
                </section>
                <section id="about">
                    <Stars offset={1}/>
                    <About />
                </section>
                <section id="projects">e</section>


            </main>
        </>
    );
}

export default App;
