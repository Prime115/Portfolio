import "../styles/About.css";

export default function About() {
    return (

        <div className= {"about"}>

            <h1 className={"aboutHeader"}>About me</h1>
            <p className={"aboutText"}>I’m an engineer and designer focused on creating digital products
                that are both thoughtfully designed and technically reliable.
                I enjoy working across the development process, combining problem-solving,
                coding, and design thinking to build experiences that are accessible,
                intuitive, and visually clear. My goal is to create solutions that are functional,
                meaningful, and grounded in a strong understanding of both technology and
                user needs.
            </p>
            <div className={"aboutCards"}>
                <div className="card">
                    <div><img src={"C:\Users\lundg\OneDrive\Bilder\designIcon.png"} alt={"Design Icon"}/> </div>
                    <h3>Design Thinking</h3>
                    <p>User-centered design approach with focus on aesthetics and usability
                    </p>
                </div>
                <div className="card">
                    <div><img src={"C:\Users\lundg\OneDrive\Bilder\designIcon.png"} alt={"Design Icon"}/> </div>
                    <h3>Problem Solving</h3>
                    <p>Clean, scalable code with modern frameworks and best practices</p>
                </div>
                <div className="card">
                    <div><img src={"C:\Users\lundg\OneDrive\Bilder\designIcon.png"} alt={"Design Icon"}/> </div>
                    <h3>Innovation</h3>
                    <p>User-centered design approach with focus on aesthetics and usability</p>
                </div>
                <div className="card">
                    <div><img src={"C:\Users\lundg\OneDrive\Bilder\designIcon.png"} alt={"Design Icon"}/> </div>
                    <h3>Collaboration</h3>
                    <p>Clean, scalable code with modern frameworks and best practices</p>
                </div>
            </div>
        </div>
    )
}