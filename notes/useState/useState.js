// a super-concise set of notes for useState
import * as React from "react"
export default function ClickCounter() { // must be capitalized
  const [ // useState returns a 2-item array
    count, // (1) the value
    setCount // (2) the setter
  ] = React.useState(0) // initial value

  const handleClick = // handle* = event handler
    () => setCount(count + 1) // pass next value to setter

  return (
    <button onClick={handleClick}> {/* pass ref, not a call */}
      You have clicked {count} times {/* updates on re-render */}
    </button>
  )
}


// example 2...storing a value



// this time with two useState calls, each owning its own value
import * as React from "react"
export default function ClickOrTypeCounter() { // must be capitalized
  const [ // first useState — owns the click count
    count, // (1) the value
    setCount // (2) the setter
  ] = React.useState(0) // initial value

  const [ // second useState — owns the typed text
    text, // (1) the value
    setText // (2) the setter
  ] = React.useState("") // initial value

  const handleClick = // fires on button click
    () => setCount(count + 1) // pass next value to setter

  const handleChange = // fires on every keystroke
    (event) => setText(event.target.value) // event.target.value = what's typed

  return (
    <>
      <input onChange={handleChange} type="text" /> {/* pass ref, not a call */}
      <button onClick={handleClick}> {/* pass ref, not a call */}
        {text ? text : `Clicked ${count} times`} {/* text wins if non-empty, otherwise shows count */}
      </button>
    </>
  )
}
// second example, two possible actions can impact the display
import * as React from "react"
export default function ClickOrTypeCounter() { // must be capitalized
  const [ // first useState — owns the click count
    count, // (1) the value
    setCount // (2) the setter
  ] = React.useState(0) // initial value

  const [ // second useState — owns the typed text
    text, // (1) the value
    setText // (2) the setter
  ] = React.useState("") // initial value

  const handleClick = // fires on button click
    () => { setCount(count + 1); setText("") } // increment count, clear text so count shows again

  const handleChange = // fires on every keystroke
    (event) => setText(event.target.value) // event.target.value = what's typed

  return (
    <>
      <input onChange={handleChange} type="text" /> {/* pass ref, not a call */}
      <button onClick={handleClick}> {/* pass ref, not a call */}
        {text ? text : `Clicked ${count} times`} {/* shows text while typing, count while clicking */}
      </button>
    </>
  )
}

// third example...get the number of characters remaining (max 20) from an input field, updates as it changes, displays count in a span
import * as React from "react"
export default function CharacterLimitInput() { // must be capitalized
  const LIMIT = 20 // max characters allowed

  const [ // useState — owns the typed text
    text, // (1) the value
    setText // (2) the setter
  ] = React.useState("") // initial value

  const handleChange = // fires on every keystroke
    (event) => setText(event.target.value) // update text with whatever is typed

  const remaining = LIMIT - text.length // recomputed on every re-render — no extra state needed

  return (
    <>
      <span>{remaining} characters remaining</span> {/* re-renders whenever text changes */}
      <input onChange={handleChange} type="text" maxLength={LIMIT} /> {/* maxLength enforces the cap in the DOM */}
    </>
  )
}