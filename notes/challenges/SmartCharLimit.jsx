import * as React from "react";

export default function LimitedTextInput({ characterLimit = 20 }) {
  const [inputValue, setInputValue] = React.useState("");
  // B ...and this is how to make characterCont a state variable...
  const [characterCount, setCharacterCount] = React.useState(20);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    let maxCharacterCount = 20;
    setCharacterCount(e.target.value.length);
    if(characterCount >= maxCharacterCount) {
      e.target.style.color = 'red';
    }else{
      e.target.style.color = 'black';
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(inputValue.length > characterLimit) {
      alert('The input exceeds the character limit. Please shorten your text.');
      return;
    }
    alert('Thanks for your submission');
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="limited-text-input">Limited Text Input:</label>
        <span 
          className={inputValue.length >= characterLimit ? "error" : "no-error"}
        >
          Characters remaining: {characterLimit - characterCount}
        </span>
      </div>
      <input
        type="text"
        placeholder="Enter some text"
        id="limited-text-input"
        value={inputValue}
        onChange={handleChange}
      />

      <button type="submit" className="primary">
        Submit
      </button>
    </form>
  );
}