import {useEffect, useState} from "react";

export function MouseFollower(){
    const [mousePosition, setMousePosition] = useState({
        x:0, y:0
    });

    const mouseMove = (e) => {
        setMousePosition({
            x: e.pageX, y: e.pageY
        })
    }


    useEffect(() => {
        window.addEventListener('mousemove', mouseMove);
        return () => window.removeEventListener('mousemove', mouseMove);
    }, []);

    return <div className="mouse-follower z-[999] rounded-full border-[1px] border-[#6e40c9]" style={{
        position: "absolute", top: mousePosition.y - 20, left: mousePosition.x - 20   }}></div>
}