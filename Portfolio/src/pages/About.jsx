import "../styles/About.css";

export default function About() {
    return (

        <div className= {"about"}>
            <h1>About me</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in maximus eros. Proin venenatis neque non vulputate luctus. Integer sit amet magna et eros tempor congue eget aliquet turpis. </p>
            <div className={"aboutCards"}>
                <div className="card"> </div>
                <div className="card"></div>
                <div className="card"></div>
                <div className="card"></div>
            </div>
        </div>
    )
}