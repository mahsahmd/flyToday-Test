import React, { useEffect, useState } from 'react'

const useMobileWidth = () => {
    const [isMobileWidth, setIsMobileWidth] = useState(false);
    useEffect(() => {
        if (typeof window !== 'undefined') {
            function handleResize() {
                if (window.innerWidth <= 768) {
                    setIsMobileWidth(true)
                } else {
                    setIsMobileWidth(false)

                }

            }
            window.addEventListener("resize", handleResize);
            handleResize();
            return () => window.removeEventListener("resize", handleResize);
        }
    }, []);

    return isMobileWidth;

}

export default useMobileWidth;