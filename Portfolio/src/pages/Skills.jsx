import "../styles/Skills.css"
import DegreeProcess from "../components/DegreeProcess.jsx";
import {useInView} from "framer-motion";
import {useRef} from "react";

function calculateProgress(startDate, endDate) {
    const now = new Date();
    const start = new Date(startDate);
    const end = new Date(endDate);

    if (now <= start) return 0;
    if (now >= end) return 100;

    const total = end - start;
    const elapsed = now - start;

    return Math.round((elapsed / total) * 100);
}
export default function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin:"-30%"});

    // Example degrees
    const degrees = [
        {
            title: "M.Sc. Engineering. Interaction Technology and Design",
            start: "2023-09-01",
            end: "2028-06-01",
            gradient: "linear-gradient(90deg,#AC0000 0%, #FF7700 88%, #FFB200 100%)",

        },
        {
            title: "B.Sc. Computing Science",
            start: "2023-09-01",
            end: "2028-06-01",
            gradient: "linear-gradient(90deg,#0034A6 0%, #1390D1 88%, #00E1FF 100%)",
        }
    ];

    return(

        <div className="skills" ref={ref}>
            <h1 className={"skillsHeader"}> Skills and Expertise</h1>
            <div className="degreeContainer">
                <h2 >Degrees</h2>
                <div className="degreeMap">
                    {degrees.map((deg,i) => {
                        const percentage = calculateProgress(deg.start, deg.end);

                        return (
                        <DegreeProcess
                            key={i}
                            title={deg.title}
                            percentage={percentage}
                            isVisible={isInView}
                            gradient={deg.gradient}
                        />
                    );
                })}</div>
            </div>
            <div className="tools"></div>

        </div>

    )}