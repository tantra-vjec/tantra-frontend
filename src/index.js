// index.js
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from './App';
import Loader from './components/loader/loader.jsx'; // Import the Loader component

const root = ReactDOM.createRoot(document.getElementById("root"));

const Main = () => {
    const [loading, setLoading] = useState(true); // State to manage loading

    useEffect(() => {
        // Simulate a loading delay (e.g., fetching resources)
        const timer = setTimeout(() => {
            setLoading(false); // Set loading to false after 4 seconds
        }, 4000); // 4000 ms = 4 seconds

        return () => clearTimeout(timer); // Cleanup timer on unmount
    }, []);

    return loading ? (
        <Loader onLoaderExit={() => setLoading(false)} /> // Show loader for 4 seconds
    ) : (
        <App /> // Render the main App component after loading
    );
};

root.render(
    <React.StrictMode>
        <Main /> {/* Render Main which conditionally shows Loader or App */}
    </React.StrictMode>
);
