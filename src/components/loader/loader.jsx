// Loader.js
import React, { useEffect } from 'react';
import './loader.css'; // Ensure you have this CSS file for styling

const Loader = ({ onLoaderExit }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onLoaderExit(); // Call the exit function after 4 seconds
        }, 4000); // 4000 ms = 4 seconds

        return () => clearTimeout(timer); // Cleanup the timer on unmount
    }, [onLoaderExit]);

    return (
        <div className="loader">
            <img src={require('../../assets/nav/arrowpixel.svg').default} alt="Loading..." className="loader-gif" />
            <p className="loader-text">Tap to Play</p>
        </div>
    );
};

export default Loader;
