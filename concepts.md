# Concepts

## useEffect

useEffect is React's way of saying "after the component renders, go do this side effect."

Side effects are things that reach outside of just rendering UI — fetching data, subscribing to something, manually touching the DOM, setting a timer, logging, etc. Normal component code just calculates what to display; useEffect is the escape hatch for everything else.

You can think of useEffect as “attaching” a piece of behavior to the render output. 

```
useEffect(() => {
  // runs after render
  return () => {
    // optional cleanup, runs before the next effect or on unmount
  };
}, [dependencies]);
```

### Key Points

* Runs after the render is painted to the screen, not during rendering.

* The dependency array controls when it re-runs: [] means "only once, on mount," [someValue] means "re-run whenever someValue changes," and no array means "run after every render."

* The returned function is cleanup — React calls it before running the effect again, or when the component unmounts. Handy for unsubscribing, clearing timers, canceling requests, etc.  If your Effect fetches something, the cleanup function should either abort the fetch or ignore its result.

### Mental Model

Render describes what things look like right now; useEffect handles anything that needs to happen because of that render, outside of React's normal rendering process."