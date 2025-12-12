import './styles/App.css'
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import NavBar from "./components/NavBar.jsx";
import Stars from "./components/stars.jsx";
import FallingStar from "./components/fallingStar.jsx";
import Skills from "./pages/Skills.jsx";

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
                <section id="skills">
                    <Stars offset={2}/>
                    <Skills/>
                </section>
                <section id="projects">
                    <Stars offset={3}/>
                    e
                </section>


            </main>
        </>
    );
}

export default App;
