# Tasks
```
WIP Update the password length count when the input changes
    handleChange

    stopping and re-reviewing https://fireship.dev/c/react/usestate

NOT_STARTED Update the text style based on the password length threshold

NOT_STARTED Allow users to toggle the password visibility

NOT_STARTED Show an alert with a success message when the password length is equal to or above the threshold on form submission

NOT_STARTED Show an alert with an error message when the password length is below the threshold on form submission
```
# Notes
```
cd app && npm dev up
```
# Initial State
```
import React from "react";

function PasswordInput({ minimum = 8 }) {
  const inputValue = "";
  const isInputValueVisible = false;
  const thresholdMet = false;

  const handleChange = () => {};

  const handleToggleVisibility = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();

    if (thresholdMet) {
      alert("Password submitted");
    } else {
      alert("You need a longer password");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="limited-text-input">Password:</label>
        <span className={thresholdMet ? "no-error" : "error"}>
          {inputValue.length}
        </span>
      </div>
      <div>
        <input
          placeholder="Enter a password"
          type={isInputValueVisible ? "text" : "password"}
          id="limited-text-input"
          value={inputValue}
          onChange={handleChange}
        />
        <button type="button" onClick={handleToggleVisibility}>
          {isInputValueVisible ? "🙊" : "🙈"}
        </button>
      </div>

      <button type="submit" className="primary">
        Submit
      </button>
    </form>
  );
}

export default PasswordInput;
```