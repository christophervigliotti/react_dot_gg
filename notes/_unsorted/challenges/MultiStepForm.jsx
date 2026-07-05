import * as React from "react";

const initialFormData = { // [1] defined outside the component so it never changes — used as the initial value for formData state and to reset it on submit
  name: "",
  email: "",
  address: "",
  city: "",
  zipcode: ""
};

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = React.useState(1); // [2] currentStep drives which form renders (see if/else chain below); setCurrentStep is called by handleNextStep and handlePrevStep
  const [formData, setFormData] = React.useState(initialFormData); // [3] formData holds all five field values; setFormData is called by handleChange on every keystroke

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value }); // [4] spread copies all existing fields; [e.target.name] is a computed key that matches the input's name attr (e.g. "email"); e.target.value is what the user typed — one handler covers all five inputs
  };

  const handleNextStep = () => { if (currentStep < 3) setCurrentStep(currentStep + 1); }; // [5] guard prevents going past step 3 (which would hit the else/null branch and blank the page)
  const handlePrevStep = () => { if (currentStep > 1) setCurrentStep(currentStep - 1); }; // [6] guard prevents going below step 1 for the same reason

  const handleSubmit = (e) => {
    e.preventDefault(); // [7] stops the browser from doing a full page reload on form submit (default HTML form behavior)
    alert("Thank you for your submission");
    setFormData(initialFormData); // [8] resets all fields back to empty strings using the same object from [1]
    setCurrentStep(1); // [9] sends the user back to step 1
  };

  if (currentStep === 1) { // [10] currentStep from [2] controls which form is returned; React re-renders whenever setCurrentStep is called
    return (
      <form onSubmit={handleSubmit}>
        <h2>Personal Information</h2>
        <div>
          <label>Step {currentStep} of 3</label>
          <progress value={currentStep} max={3} /> {/* [11] native HTML progress bar — value and max drive the fill automatically */}
        </div>
        <div>
          <label htmlFor="name">Name</label>
          <input
            required
            name="name" // [12] name attr is what e.target.name reads in handleChange [4] — must match a key in formData/initialFormData
            id="name"
            placeholder="Enter your name"
            value={formData.name} // [13] controlled input — React owns the value, keeping it in sync with formData state
            onChange={handleChange} // [14] fires on every keystroke, calling handleChange which updates formData via setFormData
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            required
            name="email" // [12]
            id="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email} // [13]
            onChange={handleChange} // [14]
          />
        </div>
        <button type="button" className="secondary" onClick={handleNextStep}> {/* [15] type="button" prevents this from submitting the form; onClick calls handleNextStep [5] */}
          Next
        </button>
      </form>
    );
  } else if (currentStep === 2) { // [10]
    return (
      <form onSubmit={handleSubmit}>
        <h2>Address</h2>
        <div>
          <label>Step {currentStep} of 3</label>
          <progress value={currentStep} max={3} /> {/* [11] */}
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input
            required
            name="address" // [12]
            id="address"
            type="address"
            placeholder="What is your address?"
            value={formData.address} // [13]
            onChange={handleChange} // [14]
          />
        </div>
        <div>
          <label htmlFor="city">City</label>
          <input
            required
            name="city" // [12]
            id="city"
            placeholder="What city do you live in?"
            value={formData.city} // [13]
            onChange={handleChange} // [14]
          />
        </div>
        <div>
          <label htmlFor="zipcode">Zipcode</label>
          <input
            required
            name="zipcode" // [12]
            id="zipcode"
            type="number"
            placeholder="What is your zipcode?"
            value={formData.zipcode} // [13]
            onChange={handleChange} // [14]
          />
        </div>
        <div>
          <button className="secondary" type="button" onClick={handleNextStep}> {/* [15] */}
            Next
          </button>
          <button type="button" className="link" onClick={handlePrevStep}> {/* [16] type="button" prevents form submit; onClick calls handlePrevStep [6] */}
            Previous
          </button>
        </div>
      </form>
    );
  } else if (currentStep === 3) { // [10]
    return (
      <form onSubmit={handleSubmit}>
        <h2>Confirm your information:</h2>
        <div>
          <label>Step {currentStep} of 3</label>
          <progress value={currentStep} max={3} /> {/* [11] */}
        </div>
        <table>
          <tbody>
            {Object.keys(formData).map((key) => { // [17] Object.keys returns ["name","email","address","city","zipcode"] — mapping over them builds one row per field without hardcoding each one
              return (
                <tr key={key}> {/* [18] key prop is required by React when rendering lists — uses the field name since it's unique */}
                  <td>{key}</td>
                  <td>{formData[key]}</td> {/* [19] bracket notation reads the value for each key dynamically, same idea as [e.target.name] in handleChange [4] */}
                </tr>
              );
            })}
          </tbody>
        </table>
        <div>
          <button className="primary" type="submit"> {/* [20] type="submit" triggers onSubmit={handleSubmit} on the form */}
            Submit
          </button>
          <button type="button" className="link" onClick={handlePrevStep}> {/* [16] */}
            Previous
          </button>
        </div>
      </form>
    );
  } else {
    return null; // [21] unreachable with the guards in [5] and [6] in place, but kept as a safe fallback
  }
}
