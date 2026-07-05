import { useEffect, useRef } from 'react';

export default function MyInput({ shouldFocus, value, onChange }) {
  const ref = useRef(null);

  useEffect(() => {
    if(shouldFocus) {
      ref.current.focus();
    }
  }, [shouldFocus]);

  /*
  why we need the [shouldFocus] dependency
    Why this is actually correct here (not just lint-appeasement): in this challenge shouldFocus is a static prop per field — true for one input, false for the other — so it never changes between renders, meaning the effect still only really runs once in practice. But the rule doesn't know that; it's a safety net for the general case where a dependency could change, and skipping it would produce stale-closure bugs.
  */

  return (
    <input
      ref={ref}
      value={value}
      onChange={onChange}
    />
  );
}