import * as React from "react";

function LimitedTextInput({ characterLimit = 20 }) {
  const LIMIT = 20
  const[text,setText] = React.useState('')

  const handleChange = (event) => {
    setText(event.target.value)    
  }

  const remaining = LIMIT - text.length

  const handleSubmit = (e) => {
    e.preventDefault();
    if(remaining < 0){
      alert("The input exceeds the character limit. Please shorten your text.");
    }else{
      alert("Thanks for your submission");
      // TODO: Reset the input back to an empty string when the form is successfully submitted
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="limited-text-input">Limited Text Input:</label>
        <span className={text.length > LIMIT ? 'error' : 'no-error'}>Characters remaining: {remaining}</span>
      </div>
      <input
        type="text"
        placeholder="Enter some text"
        id="limited-text-input" 
        onChange={handleChange}
      />

      <button type="submit" className="primary">
        Submit
      </button>
    </form>
  );
}

export default LimitedTextInput;