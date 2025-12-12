import {animate, motion, useMotionTemplate, useMotionValue, useTransform} from 'framer-motion';
import "../styles/DegreeProcess.css";

export default function DegreeProcess({title, percentage, isVisible, gradient}) {
    const progress = useMotionValue(0);
    const count = useTransform(progress, (v) => Math.round(v));
    if(isVisible) {
        animate(progress, percentage, { duration: 2 });
    }
    const percentages = useMotionTemplate`${count}%`;
    return (
        <div className={"degree"}>

            <div className={"degreeInfo"}>
                <p>{title}</p>
                <motion.span className={"degreeNumber"}>{percentages}</motion.span>
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