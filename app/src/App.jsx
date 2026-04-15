// goal: a super-concise set of notes for useState
import * as React from "react"
export default function Counter() {
  // a: the useState declaration
  const [theValueOfTheThing, setTheThing] = React.useState(0)
  // b: does the thing   
  const handleWhenTheThingIsClicked = () => setTheThing(theValueOfTheThing + 1)
  // c: the thing
  return (
      <button onClick={handleWhenTheThingIsClicked}>
          {theValueOfTheThing}
      </button>
  )
}

/*
      const [theThing,doTheThing] = React.useState(0)
        where 
          theThing    wires var to {theThing}
          doTheThing  fn called when state changes
    b: 
      const doTheThing = () => setTheThing('')
        considerations
          setTheThing...sets theThing (this is an implied setter)
      or 
        const doTheThing = (event) => { your_code_here }        
          this is different than prior for 2 reasons
            1. {} allows for multiple lines of code
            2. event!  passing in the event [more notes here]
    c:
      return (
          <button onClick={doTheThing}>
              {theThing}
          </button>
      )

  */