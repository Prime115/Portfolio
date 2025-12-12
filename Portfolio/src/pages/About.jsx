import "../styles/About.css";
import { Lightbulb, Layers, Code, Link } from 'lucide-react';
export default function About() {
    return (

        <div className= {"about"}>

            <h1 className={"aboutHeader"}>About me</h1>
            <p className={"aboutText"}> I'm a unique blend of creative designer and technical engineer, passionate about creating digital experiences that are both beautiful and functional.
                I enjoy working across the development process, combining problem-solving, coding, and design thinking to create products that feel accessible, intuitive, and visually clear.
            </p>
            <div className={"aboutCards"}>
                <div className="card">
                    <div className={"picture"}><Layers/> </div>
                    <h3>Design Thinking</h3>
                    <p>User-centered design approach with focus on aesthetics and usability</p>
                </div>
                <div className="card">
                    <div className={"picture"}><Code/> </div>
                    <h3>Problem Solving</h3>
                    <p>Clean, scalable code with modern frameworks and best practices</p>
                </div>
                <div className="card">
                    <div className={"picture"}><Lightbulb/> </div>
                    <h3>Innovation</h3>
                    <p>Exploring creative ideas to build modern, future-ready digital solutions</p>
                </div>
                <div className="card">
                    <div className={"picture"}><Link/> </div>
                    <h3>Collaboration</h3>
                    <p>Enjoy working with others, sharing ideas, and building together</p>
                </div>
            </div>
        </div>
    )
}