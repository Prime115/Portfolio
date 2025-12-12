import {motion} from 'framer-motion';
import "../styles/DegreeProcess.css";

export default function DegreeProcess({title, percentage, isVisible, gradient}) {
    return (
        <div className={"degree"}>

            <div className={"degreeInfo"}>
                <p>{title}</p>
                <p>{percentage}%</p>
            </div>
            <div className="degreeBar">
                <motion.div
                className="degreePerc"
                style={{background: gradient}}
                initial={{width: "0%"}}
                animate={isVisible? {width: `${percentage}%`} : {}}
                transition={{duration: 2, ease: 'easeOut'}}
                />
            </div>
        </div>
    )
}