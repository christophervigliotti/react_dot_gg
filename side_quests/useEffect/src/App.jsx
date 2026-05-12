import React, { useState, useEffect } from 'react';
export default function ExampleComponent() {
    const [count, setCount] = useState(0);
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
    useEffect(() => {
        const time = new Date().toLocaleTimeString();
        setCurrentTime(time);
        document.title = `You clicked ${count} times ` + time;
        console.log(document.title);
    }, [count]); // 2nd arg "An optional dependency array."
    return (
        <div>
            <p>You clicked {count} times {currentTime}</p>
            <button onClick={() => setCount(count + 1)}>
            Click me
            </button>
        </div>
    );
}