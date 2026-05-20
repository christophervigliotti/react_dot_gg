import React, { useState, useEffect } from 'react';

export default function Clock() {
  // time is the value rendered in the JSX below; setTime is what the interval calls to update it
  const [time, setTime] = React.useState(new Date());

  useEffect(() => {
    // setInterval fires every 1000ms, calling setTime each tick
    // setTime(new Date()) gives React a new Date object, which triggers a re-render
    // and the JSX below reflects the updated time
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // cleanup: when the component unmounts, clearInterval uses the id from above
    // to cancel the timer so it doesn't keep running in the background
    return () => clearInterval(id);

  }, []); // empty array = run once on mount, never again

  return (
    <section>
      <h1>Current Time</h1>
      {/* time is the Date object from useState; toLocaleTimeString() formats it for display */}
      <p>{time.toLocaleTimeString()}</p>
    </section>
  );
}

/*
In this challenge, you'll be synchronizing the current time with your component's state by updating the UI every second with the new time. To do that, you'll need the right combination of useEffect, component state, and the browser's setInterval method.

Tasks
Update the time every second
Clear the timer when unmounted
The Result
The final version of your app should look and behave like this.
*/