import { useEffect, useState } from "react";
const Content = () => {

    const [screenSizeX, setScreenSizeX] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenSizeX(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        <div>
            <h1>{screenSizeX}</h1>
        </div>
    )
}

export default Content;
