import React, { useState } from "react";

function StartStop() {
    const [loading, setLoading] = useState(false); // State to show loading feedback

    const handleStartThread = async () => {
        setLoading(true); // Indicate that the process is starting

        try {
            await fetch("http://localhost:8080/threadstart/threadrun", {
                method: "POST", // Adjust method if your backend uses GET
                headers: {
                    "Content-Type": "application/json", // Optional, depends on your backend
                },
            });

            alert("Program started successfully!"); // Notify user on success
        } catch (error) {
            console.error("Error starting the program:", error);
            alert("Failed to start the program. Please check the console for details.");
        } finally {
            setLoading(false); // Reset loading state
        }
    };

    return (
        <div>
            <h1>Start Program</h1>
            <button onClick={handleStartThread} disabled={loading}>
                {loading ? "Starting..." : "Start"}
            </button>
        </div>
    );
}

export default StartStop;
