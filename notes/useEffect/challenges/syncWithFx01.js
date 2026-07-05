import { useEffect, useRef } from 'react';

export default function MyInput({ value, onChange }) {
  const ref = useRef(null);

  // this won't work because it runs during render...
  // ref.current.focus()
  // ...react hasn't yet attached the ref to the DOM

    useEffect(() => {
        ref.current.focus()
    }, []);

  return (
    <input
      ref={ref}
      value={value}
      onChange={onChange}
    />
  );
}

/*
Challenge 1 of 4: Focus a field on mount 
In this example, the form renders a <MyInput /> component.

Use the input’s focus() method to make MyInput automatically focus when it appears on the screen. There is already a commented out implementation, but it doesn’t quite work. Figure out why it doesn’t work, and fix it. (If you’re familiar with the autoFocus attribute, pretend that it does not exist: we are reimplementing the same functionality from scratch.)
*/