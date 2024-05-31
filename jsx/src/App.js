import React from "react";

export default function App() {
    let message = "Hi there!"
    
    if (Math.random() > 0.5) {
        message = "Hello there!"
    }
 
    return (
        <div>
            <div>
                <textarea autoFocus />
            </div>
            <div>
                <input type="number" min={5} max={10} style={{color: 'red'}} spellCheck={false} className="divider" />
            </div>
            <div>
                <h1>{message} {new Date().toLocaleTimeString()}</h1>
            </div>
        </div>
    );
}