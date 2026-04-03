Make sure everything is rendering
Update the remaining characters count when input changes
Unable to find an element with the text: /Characters remaining: 13/. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.

Ignored nodes: comments, script, style
<body>
  <div>
    <form>
      <div>
        <label
          for="limited-text-input"
        >
          Limited Text Input:
        </label>
        <span
          class="no-error"
        >
          Characters remaining: TODO
        </span>
      </div>
      <input
        id="limited-text-input"
        placeholder="Enter some text"
        style="color: black;"
        type="text"
        value="Testing"
      />
      <button
        class="primary"
        type="submit"
      >
        Submit
      </button>
    </form>
  </div>
</body>

  29 |     const input = screen.getByLabelText("Limited Text Input:");
  30 |     fireEvent.change(input, { target: { value: "Testing" } });
> 32 |     expect(screen.getByText(/Characters remaining: 13/)).toBeInTheDocument();
     |                                                          ^
  33 |   });
  35 |   test("Turn the color of the remaining characters to red if it exceeds the threshold", () => {

Turn the color of the remaining characters to red if it exceeds the threshold
expect(element).toHaveClass("error")

Expected the element to have class:
  error
Received:
  no-error

  43 |     });
  45 |     const updatedCount = screen.getByText(/Characters remaining/);
> 46 |     expect(updatedCount).toHaveClass("error");
     |                          ^
  47 |   });
  49 |   test("Show an alert with error message when input exceeds character limit on form submission", () => {

Reset the input back to an empty string when the form is successfully submitted
Show an alert with error message when input exceeds character limit on form submission
expect(jest.fn()).toHaveBeenCalledWith(...expected)

Expected: "The input exceeds the character limit. Please shorten your text."
Received: "bro, you have exceeded the character limit"

Number of calls: 1

  53 |     fireEvent.change(input, { target: { value: "a".repeat(21) } });
  54 |     fireEvent.click(submitButton);
> 56 |     expect(window.alert).toHaveBeenCalledWith(
     |                          ^
  57 |       "The input exceeds the character limit. Please shorten your text."
  58 |     );
  59 |   });

Show an alert with a success message when the input is within the character limit on form submission
expect(jest.fn()).toHaveBeenCalledWith(...expected)

Expected: "Thanks for your submission"
Received: "Submitted value: Valid input"

Number of calls: 1

  65 |     fireEvent.change(input, { target: { value: "Valid input" } });
  66 |     fireEvent.click(submitButton);
> 68 |     expect(window.alert).toHaveBeenCalledWith("Thanks for your submission");
     |                          ^
  69 |   });
  71 |   test("Reset the input back to an empty string when the form is successfully submitted", () => {

/c/react/smart-character-limit