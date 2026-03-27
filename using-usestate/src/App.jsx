import * as React from "react"
export default function Todo () {
  const [todo, setTodo] = React.useState({ // 6 representing our todo item as an object (as opposed to single state values)
    id: 1,
    label: "Learn React",
    completed: false, // is that really right, I can have a comma at the end?
  })
  const [label, setLabel] = React.useState("Learn React") // 3 adding 'edit single todo item' here
  const [completed, setCompleted] = React.useState(false) // 2 state
  const [editing, setEditing] = React.useState(false) // 4 adding state to keep track of is user editing

  /* 7 updating these two event handlers to handle todo state as an object rather than individual pieces of state
  const handleCheckboxClick = () => setCompleted(!completed) // 2 event handler (is hooked to the prop below)
  const handleUpdateLabel = (e) => setLabel(e.target.value) // 5 new handler for changing the label on our state */
  const handleCheckboxClick = () => setTodo({
    ...todo,
    completed: !todo.completed,
  })    
  const handleUpdateLabel = (e) => setTodo({
    ...todo,
    label: e.target.value
  })  

  const handleEditClick = () => setEditing(!editing) // 4 adding method that toggled the new editing state...
  
  return (
    <div>
      {/* hey look this is how you format comments within JSX */}
      <label htmlFor="checkbox">
        <div>
          <input
            type="checkbox"
            id="checkbox"
            // 6 changed this checked={completed} to this...
            checked={todo.completed}
            onChange={handleCheckboxClick} // 2 this prop (is hooked to the event handler)
          />
          <span />
        </div>
        {editing === true ? (
          <input 
            type="text" 
            // 6 changed this value={label} to...
            value={todo.label}
            onChange={handleUpdateLabel} // 5 (continued)
          />
        ) : (
          <span>{todo.label}</span>/* 6 was <span>{label}</span> */

        )}

      </label>
      {/* 4 ...& hook it to this button */}
      {/*                   v v v v v v */}
      <button onClick={handleEditClick}> 
        {editing ? "Save" : "Edit"}
      </button>
    </div>
  )
}