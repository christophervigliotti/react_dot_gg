import { useState, useRef, useEffect } from 'react';

// ─── HOW THE THREE HOOKS INTERACT ────────────────────────────────────────────
//
//  useState  → owns the data (isPlaying: true/false) that lives in App.
//              When it changes, React re-renders App AND VideoPlayer.
//
//  useRef    → holds a direct pointer to the <video> DOM node.
//              Changing ref.current does NOT trigger a re-render — it's just
//              a mutable box React won't throw away between renders.
//
//  useEffect → runs AFTER the render is committed to the DOM.
//              It reads the latest isPlaying prop (passed down from useState)
//              and uses ref.current (the live DOM node) to call .play()/.pause().
//
//  Data flow:
//    [useState in App] → isPlaying prop → [useEffect in VideoPlayer]
//                                              ↓
//                                      ref.current.play/pause()
//                                      (the actual DOM video element)
// ─────────────────────────────────────────────────────────────────────────────

function VideoPlayer({ src, isPlaying }) {
  console.log('VideoPlayer()');
  // useRef: creates a stable "box" that persists across renders.
  // Initialized to null — React will fill ref.current with the <video>
  // DOM node once it's mounted. Unlike state, updating ref.current
  // never causes a re-render.
  const ref = useRef(null);
  console.log(ref);
  // useEffect: runs after React has updated the DOM.
  // This is where we synchronize the video element (an outside system)
  // with our React state. We can't do this during render because:
  //   1. ref.current is null until the <video> is in the DOM
  //   2. calling .play()/.pause() is a side effect — Rule #0 forbids it in render
  useEffect(() => {    
    console.log(isPlaying);
    if (isPlaying) {
      ref.current.play();   // reaches into the real DOM via the ref
    } else {
      ref.current.pause();  // same — ref.current is the actual <video> element
    }
  /* No dependency array here would mean that this effect re-runs after EVERY render.
      three examples...

        useEffect(() => {
          // This runs after every render
        });

        useEffect(() => {
          // This runs only on mount (when the component appears)
        }, []);

        useEffect(() => {
          // This runs on mount *and also* if either a or b have changed since the last render
        }, [a, b]);

  */
  // Adding [isPlaying] bc is more precise and only re-runs when it changes.
  }, [isPlaying]);

  // The `ref` prop wires React's ref box to this specific DOM node.
  // After this renders, ref.current === this <video> element.
  return <video ref={ref} src={src} loop playsInline />;
}

export default function App() {

  // useState: App owns the play/pause state.
  // isPlaying     → current value (read-only in render)
  // setIsPlaying  → the only way to change it; triggers a re-render when called
  // false         → initial value
  const [isPlaying, setIsPlaying] = useState(false);
  // useEffect with [] runs exactly once — on mount (first render) only.
  //
  // WHY only once:
  //   React compares the dependency array between renders to decide whether
  //   to re-run the effect. An empty array [] means "this effect has no
  //   dependencies", so there is nothing to change between renders.
  //   React sees [] === [] every time → skips re-running → effect fires once.
  //
  // Contrast with the VideoPlayer effect which has [isPlaying]:
  //   React checks if isPlaying changed since last render.
  //   If yes → re-run the effect. If no → skip it.
  //
  // Dependency array cheat sheet:
  //   useEffect(fn)            → runs after EVERY render
  //   useEffect(fn, [])        → runs once on MOUNT only
  //   useEffect(fn, [a, b])    → runs when a or b changes
  useEffect(() => {
    console.clear();
    console.log('THIS ONLY RUNS ONCE WHEN PAGE LOADS!');
  }, []);

  console.log('App()');
  return (
    <>
      {/* The button calls setIsPlaying (event handler — Rule #1).
          This updates state in App, which re-renders App and passes
          the new isPlaying value down to VideoPlayer as a prop. */}
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>

      {/* isPlaying flows DOWN as a prop — VideoPlayer doesn't own this value,
          it just receives it and reacts to it via useEffect. */}
      <VideoPlayer
        isPlaying={isPlaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
    </>
  );
}
