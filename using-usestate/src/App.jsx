import * as React from "react"

// 8 adding todolist component (as well as adding default function App at the bottom of the page)
function TodoList() {
  /*
  const [todo, setTodo] = React.useState({
    id: 1,
    label: "Learn React",
    completed: false,
  }) */
  const [todos, setTodos] = React.useState([
    { id: 1, label: "Learn React", completed: false },
    { id: 2, label: "Learn Next.js", completed: false },
    { id: 3, label: "Learn to yodel", completed: false }
  ])

  /* 8 Whenever you're in a situation like this, what you'll want to do is create a function in the component where the state is located, and then pass that function down via props.

  Then, you can pass data back up to the parent component by passing an argument to the function you passed down. */
  const handleUpdateTodo = (updatedTodo) => {
    const newTodos = todos.map((todo) =>
      todo.id === updatedTodo.id ? updatedTodo : todo
    )
    setTodos(newTodos)
  }

  const handleDeleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  const handleAddTodo = (newTodo) => {
    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
  } 

  return (
   <ul>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          handleUpdateTodo={handleUpdateTodo}
          handleDeleteTodo={handleDeleteTodo}
        />
      ))}
    </ul>
    /*
    <ul>
      <Todo
        todo={todo}
        handleUpdateTodo={handleUpdateTodo} // 8 (continued)
      />
    </ul>
    */
  )
}

/*
function Todo () {
  const [todo, setTodo] = React.useState({ // 6 representing our todo item as an object (as opposed to single state values)
    id: 1,
    label: "Learn React",
    completed: false, // is that really right, I can have a comma at the end?
  })
    9 replacing this with...*/
function Todo ({todo, handleUpdateTodo}){

  const [label, setLabel] = React.useState("Learn React") // 3 adding 'edit single todo item' here
  const [completed, setCompleted] = React.useState(false) // 2 state
  const [editing, setEditing] = React.useState(false) // 4 adding state to keep track of is user editing

  /* 7 updating these two event handlers to handle todo state as an object rather than individual pieces of state
  const handleCheckboxClick = () => setCompleted(!completed) // 2 event handler (is hooked to the prop below)
  const handleUpdateLabel = (e) => setLabel(e.target.value) // 5 new handler for changing the label on our state */
  const handleCheckboxClick = () => handleUpdateTodo({
    ...todo,
    completed: !todo.completed,
  })    

  // const handleEditClick = () => setEditing(!editing) // 4 adding method that toggled the new editing state...
  const handleEditClick = () => handleDeleteTodo(todo.id)

  const handleEditTodo = (e) => handleUpdateTodo({
    ...todo,
    label: e.target.value
  })

  const handleDeleteClick = () => handleDeleteTodo(todo.id)

  /*
  const handleUpdateLabel = (e) => handleUpdateTodo({
    ...todo,
    label: e.target.value
  })  
  */

  
  return (
    <div>
      {/* hey look this is how you format comments within JSX */}
      <label htmlFor={todo.id}> {/* htmlFor was checkbox*/}
        <div>
          <input
            type="checkbox"
            id="{todo.id}" // id was checkbox
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
       {!editing && (
          <button onClick={handleDeleteClick}>
            Delete
          </button>
        )}
    </div>
  )
}

export default function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  )
}