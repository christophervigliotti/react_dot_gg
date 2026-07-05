import React from "react";

function PasswordInput({ minimum = 8 }) {
  /*
  STATE 1: inputValue
    const [inputValue, setInputValue] = React.useState('')
    - initial value: '' (empty string)
    - read by: value={inputValue} on <input> — makes the input controlled (React owns the value)
    - read by: {inputValue.length} in the <span> — displays the current character count
    - set by: handleChange → setInputValue(event.target.value)
        called on every keystroke via onChange={handleChange} on <input>

  STATE 2: thresholdMet
    const [thresholdMet, setThresholdMet] = React.useState(false)
    - initial value: false
    - read by: className={thresholdMet ? "no-error" : "error"} on <span> — toggles the text style
    - read by: handleSubmit — determines which alert to show
    - set by: handleChange → setThresholdMet(event.target.value.length >= minimum)
        must be useState (not a plain let) because a plain variable resets to false on every re-render

  STATE 3: isInputValueVisible
    const [isInputValueVisible, setPasswordIsVisible] = React.useState(false)
    - initial value: false (password hidden by default)
    - read by: type={isInputValueVisible ? "text" : "password"} on <input> — toggles masking
    - read by: {isInputValueVisible ? "🙊" : "🙈"} on the toggle button — updates the icon
    - set by: handleToggleVisibility → setPasswordIsVisible(!isInputValueVisible)
        called via onClick={handleToggleVisibility} on the toggle button
  */
  const [inputValue, setInputValue] = React.useState('');
  const [isInputValueVisible, setPasswordIsVisible] = React.useState(false);
  const [thresholdMet, setThresholdMet] = React.useState(false);
  const handleChange = (event) => {
    setInputValue(event.target.value);
    setThresholdMet(event.target.value.length >= minimum);
  };
  const handleToggleVisibility = (event) => {
    setPasswordIsVisible(!isInputValueVisible);
  };
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