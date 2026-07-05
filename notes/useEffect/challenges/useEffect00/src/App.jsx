import React, { useState, useEffect } from 'react';
export default function ExampleComponent() {
    const [count, setCount] = useState(0);
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        const time = new Date().toLocaleTimeString();
        setCurrentTime(time);
        const title = `You clicked ${count} times ` + time;
        document.title = title;
        setLogs((prev) => [...prev, `[useEffect] ${title}`]);
    }, [count]); // 2nd arg "An optional dependency array."

    return (
        <div>
            <p>You clicked {count} times {currentTime}</p>
            <button onClick={() => setCount(count + 1)}>
            Click me
            </button>
            <div style={{ marginTop: '1rem', fontFamily: 'monospace', fontSize: '0.85rem' }}>
                {logs.map((log, i) => (
                    <div key={i}>{i + 1}. {log}</div>
                ))}
            </div>
        </div>
    );
}