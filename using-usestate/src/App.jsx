import * as React from "react"
export default function Todo () {
  const [label, setLabel] = React.useState("Learn React") // 3 adding 'edit single todo item' here
  const [completed, setCompleted] = React.useState(false) // 2 state
  const [editing, setEditing] = React.useState(false) // 4 adding state to keep track of is user editing

  const handleCheckboxClick = () => setCompleted(!completed) // 2 event handler (is hooked to the prop below)
  const handleEditClick = () => setEditing(!editing) // 4 adding method that toggled the new editing state...
  const handleUpdateLabel = (e) => setLabel(e.target.value) // 5. new handler for changing the label on our state
  return (
    <div>
      {/* hey look this is how you format comments within JSX */}
      <label htmlFor="checkbox">
        <div>
          <input
            type="checkbox"
            id="checkbox"
            checked={completed}
            onChange={handleCheckboxClick} // 2 this prop (is hooked to the event handler)
          />
          <span />
        </div>
        {editing === true ? (
          <input 
            type="text" 
            value={label} 
            onChange={handleUpdateLabel} // 5 (continued)
          />
        ) : (
          <span>{label}</span>
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