import React from "react";

function PasswordInput({ minimum = 8 }) {

  /*
  1 Update the password length count when the input changes
    A 
      const [inputValue, setInputValue] = React.useState('');
        I am useState. 
        useState EXPLAIN_HERE
        I connect the {prop} below (C) to the method in the handler (B) and am called when (D)
    B 
      setInputValue(event.target.value);         
        I am a setter method
        I set inputValue based on the value of event.target.value 
        I am wired to inputValue by way of the useState definition (and implied bc convention inputValue setInputValue?...validate ths by changing one so that the names dont match and observe the results)
    C 
      value={inputValue}
        I am inputValue.  
    D 
      onChange={handleChange}  
  2 Update the text style based on the password length threshold
    A thresholdMet, aboolean to track 'has the threshold been met'
    B sets thresholdMet
    C the conditional code that sets the className based on the value of thresholdMet
  3. Allow users to toggle the password visibility
    NOT_STARTED
  4. Show an alert with a success message when the password length is equal to or above the threshold on form submission
    NOT_STARTED
  5. Show an alert with an error message when the password length is below the threshold on form submission
    NOT_STARTED
  */
  const [inputValue, setInputValue] = React.useState('');             // 1.A  
  const isInputValueVisible = true;
  let thresholdMet = false;                                           // 2.A  
  const handleChange = (event) => {
    setInputValue(event.target.value);                                // 1.B
    thresholdMet = event.target.value.length >= minimum;              // 2.B 
  };
  const handleToggleVisibility = (event) => {                         // 3.

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
        <span className={thresholdMet ? "no-error" : "error"}>        /* 2.C  */
          {inputValue.length}
        </span>
      </div>
      <div>
        <input
          placeholder="Enter a password"
          type={isInputValueVisible ? "text" : "password"}           /* 3. */
          id="limited-text-input"
          value={inputValue}                                         /* 1.C */
          onChange={handleChange}                                    /* 1.D */
        />
        <button type="button" onClick={handleToggleVisibility}>      {/* 3. */}
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