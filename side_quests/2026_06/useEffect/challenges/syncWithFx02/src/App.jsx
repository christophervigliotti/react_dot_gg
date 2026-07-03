import { useState } from 'react'
import MyInput from './MyInput.jsx'

function App() {
  const [show, setShow] = useState(false)
  const [firstName, setFirstName] = useState('Taylor')
  const [lastName, setLastName] = useState('Swift')

  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? 'Hide' : 'Show'} form
      </button>
      <br />
      <hr />
      {show && (
        <>
          <label>
            Enter your first name:
            <MyInput
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              shouldFocus={true}
            />
          </label>
          <label>
            Enter your last name:
            <MyInput
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              shouldFocus={false}
            />
          </label>
        </>
      )}
    </>
  )
}

export default App
