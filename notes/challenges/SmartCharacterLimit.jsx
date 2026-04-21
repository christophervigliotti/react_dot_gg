import React from "react";

function PasswordInput({ minimum = 8 }) {
  const [inputValue, setInputValue] = React.useState('');
  const [isInputValueVisible,setPasswordIsVisible] = React.useState(false);
  const [thresholdMet, setThresholdMet] = React.useState(false);
  const handleChange = (event) => {
    setInputValue(event.target.value);
    setThresholdMet(event.target.value.length >= minimum);
    console.log('handleChange',event.target.value.length,minimum,thresholdMet);
  };
  const handleToggleVisibility = (event) => {
    setPasswordIsVisible(!isInputValueVisible);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('handleSubmit',thresholdMet);
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
