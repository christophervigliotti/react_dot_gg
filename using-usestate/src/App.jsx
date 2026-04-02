import * as React from "react";

export default function LimitedTextInput({ characterLimit = 20 }) {
  const [inputValue, setInputValue] = React.useState("");
  // B ...and this is how to make characterCont a state variable...
  const [characterCount, setCharacterCount] = React.useState(0);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    let maxCharacterCount = 20;
    // was...
    // let characterCount = inputValue.length;
    // ...is...
    // B this is a local var... let characterCount = e.target.value.length;  // not inputValue.length
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
      alert('bro, you have exceeded the character limit');
      return;
    }
    alert(`Submitted value: ${inputValue}`);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="limited-text-input">Limited Text Input:</label>
        <span className="no-error">Characters remaining: TODO</span>
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