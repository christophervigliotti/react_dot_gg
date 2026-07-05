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

  * CAVEAT!  if you are running the app in <StrictMode> (combined with development mode), this flow occurs: `mount → run effect → run cleanup → run effect again`.  So with [], the effect body still executes twice on initial mount in dev — React mounts the component, then simulates an unmount/remount immediately by calling your cleanup and re-running the effect. 

    Fix: write the effect so the double-invoke is harmless — always tear down whatever the effect set up, in the cleanup function.

    ```jsx
    // Bug: no cleanup, so the double-invoke in dev leaves 2 intervals running
    useEffect(() => {
      setInterval(() => setCount(c => c + 1), 1000);
    }, []);

    // Fixed: cleanup clears the interval before the second mount creates a new one
    useEffect(() => {
      const intervalId = setInterval(() => setCount(c => c + 1), 1000);
      return () => clearInterval(intervalId);
    }, []);
    ```

* The returned function is cleanup — React calls it before running the effect again, or when the component unmounts. Handy for unsubscribing, clearing timers, canceling requests, etc.  If your Effect fetches something, the cleanup function should either abort the fetch or ignore its result.

  ```jsx
  // Bug: no cleanup, so a slow request can resolve after a newer one
  // and overwrite the UI with stale data
  useEffect(() => {
    fetchBio(person).then(result => setBio(result));
  }, [person]);

  // Fixed: cleanup flips a flag so a stale response is ignored
  useEffect(() => {
    let ignore = false;
    fetchBio(person).then(result => {
      if (!ignore) setBio(result);
    });
    return () => {
      ignore = true;
    };
  }, [person]);
  ```

### Mental Model

Render describes what things look like right now; useEffect handles anything that needs to happen because of that render, outside of React's normal rendering process."