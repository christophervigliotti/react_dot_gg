import * as React from "react"

function TodoList() {
  const [todos, setTodos] = React.useState([
    { id: 1, label: "Learn React", completed: false },
    { id: 2, label: "Learn Next.js", completed: false },
    { id: 3, label: "Learn to yodel", completed: false }
  ])

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
      <TodoComposer handleAddTodo={handleAddTodo} />
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          handleUpdateTodo={handleUpdateTodo}
          handleDeleteTodo={handleDeleteTodo}
        />
      ))}
    </ul>
  )
}

function createTodo (label) {
  return {
    id: Math.floor(Math.random() * 10000),
    label,
    completed: false,
  }
}

function TodoComposer({ handleAddTodo }) {
  const [label, setLabel] = React.useState("")

  const handleUpdateLabel = (e) => setLabel(e.target.value)

  const handleAddTodoClick = () => {
    const todo = createTodo(label)
    handleAddTodo(todo)
    setLabel("")
  }

  return (
    <li>
      <input
        placeholder="Add a new todo"
        type="text"
        value={label}
        onChange={handleUpdateLabel}
      />
    <button
      disabled={label.length === 0}
      onClick={handleAddTodoClick}
    >
      Add Todo
    </button>
    </li>
  )
}

function Todo ({todo, handleUpdateTodo}){

  const [label, setLabel] = React.useState("Learn React") // 3 adding 'edit single todo item' here
  const [completed, setCompleted] = React.useState(false) // 2 state
  const [editing, setEditing] = React.useState(false) // 4 adding state to keep track of is user editing

  const handleCheckboxClick = () => handleUpdateTodo({
    ...todo,
    completed: !todo.completed,
  })    

  const handleEditClick = () => handleDeleteTodo(todo.id)

  const handleEditTodo = (e) => handleUpdateTodo({
    ...todo,
    label: e.target.value
  })

  const handleDeleteClick = () => handleDeleteTodo(todo.id)
  
  return (
    <div>
      <label htmlFor={todo.id}> {/* htmlFor was checkbox*/}
        <div>
          <input
            type="checkbox"
            id="{todo.id}" // id was checkbox
            checked={todo.completed}
            onChange={handleCheckboxClick} // 2 this prop (is hooked to the event handler)
          />
          <span />
        </div>
        {editing === true ? (
          <input 
            type="text" 
            value={todo.label}
            onChange={handleUpdateLabel} // 5 (continued)
          />
        ) : (
          <span>{todo.label}</span>/* 6 was <span>{label}</span> */
        )}

      </label>
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