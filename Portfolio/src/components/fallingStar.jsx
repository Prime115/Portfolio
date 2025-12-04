import { useEffect, useState } from "react";
import "../styles/stars.css";

export default function FallingStar() {
    const [stars, setStars] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            // Skapa ett nytt stjärnfall
            const id = Date.now();
            const startX = Math.random() * window.innerWidth * 0.8; // startposition X
            const startY = Math.random() * window.innerHeight * 0.5; // startposition Y
            const duration =  400 + Math.random() *300; // 0.8-1.5s

            setStars((prev) => [...prev, { id, startX, startY, duration }]);

            // Ta bort stjärnan efter animationen
            setTimeout(() => {
                setStars((prev) => prev.filter((s) => s.id !== id));
            }, duration);
        }, 10000 + Math.random() * 5000); // slumpmässigt intervall 3-8s

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="falling-star"
                    style={{
                        top: `${star.startY}px`,
                        left: `${star.startX}px`,
                        animation: `fall ${star.duration}ms linear forwards`,
                    }}
                />
            ))}
        </>
    );
}
