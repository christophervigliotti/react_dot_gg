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