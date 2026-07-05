import * as React from "react";

export default function FormBuilder() {
  const [formFields, setFormField] = React.useState([]);
 
  const handleAddFormField = (e) => {
    e.preventDefault(); // 1.a prevent page reload on form submit
    const formData = new FormData(e.target); // 1.b read values from the "Add a field" form inputs
    const newField = {
      id: new Date().getTime(), // 1.c unique id used as the React key and for targeting updates/deletes
      type: formData.get("type"),
      label: formData.get("label"),
      placeholder: formData.get("placeholder"),
      required: formData.get("required"),
      value: "" // 1.d start with empty value; user fills this in the generated field
    };
    setFormField([...formFields, newField]); // 1.e spread existing fields into a new array, then append the new one
  };

  const handleUpdateFormField = (id, updatedField) => {
    setFormField(formFields.map((field) => { // 3.a map returns a new array — never mutate state directly
      if (field.id === id) {
        return { ...field, ...updatedField }; // 3.b spread preserves all existing props, updatedField overwrites only what changed
      }
      return field; // 3.c all other fields pass through unchanged
    }));
  };

  const handleDeleteFormField = (id) => {
    setFormField(formFields.filter(item => item.id !== id)); // 2.a filter returns a new array excluding the item whose id matches
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // 4.a prevent the form from doing a native browser submit/reload
    alert(JSON.stringify(formFields, null, 2)); // 4.b serialize the current formFields state to show all captured values
  };

  return (
    <div>
      <h1>Form Builder</h1>
      <form id="form-builder" onSubmit={handleAddFormField}> {/* 1.f onSubmit wires this form to the add handler */}
        <fieldset>
          <legend>Add a field</legend>
          <label htmlFor="type">Field Type</label>
          <select name="type" id="type">
            <option value="text">Text</option>
            <option value="number">Number</option>
            <option value="email">Email</option>
            <option value="password">Password</option>
          </select>
          <div>
            <label htmlFor="required">Required</label>
            <input type="checkbox" name="required" id="required" />
          </div>
          <label htmlFor="label">Label</label>
          <input
            required
            type="text"
            name="label"
            id="label"
            placeholder="Enter a label"
          />
          <label htmlFor="placeholder">Placeholder</label>
          <input
            required
            type="text"
            id="placeholder"
            name="placeholder"
            placeholder="Enter a placeholder"
          />
          <button type="submit" className="secondary">
            Add Form Field
          </button>
        </fieldset>
      </form>
      <form id="form-fields" onSubmit={handleSubmit}> {/* 4.c onSubmit wires the dynamic form to the submit handler */}
        <fieldset>
          <legend>Form Fields</legend>
          <ul>
            {formFields.map((field) => ( // 1.g / 2.b / 3.d render one <li> per field in state
              <li key={field.id}> {/* key lets React efficiently reconcile the list on re-renders */}
                <label htmlFor={`input-${field.id}`}>{field.label}</label>
                <input
                  id={`input-${field.id}`}
                  required={field.required}
                  placeholder={field.placeholder}
                  type={field.type}
                  value={field.value} // 3.e controlled input — value is always driven by state
                  onChange={(e) =>
                    handleUpdateFormField(field.id, { value: e.target.value }) // 3.f pass only the changed prop; handler merges it
                  }
                />
                <button
                  type="button" // 2.c type="button" prevents this click from submitting the parent form
                  className="secondary"
                  onClick={() => handleDeleteFormField(field.id)} // 2.d pass the id so the handler knows which field to remove
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
          <span>Your form fields will show here</span>
          <button
            className="primary"
            type="submit" // 4.d type="submit" triggers the form's onSubmit when clicked
            >
              Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
}

/*
In this challenge we're going to get meta and build a form builder. It looks complex, but with the JSX already in place, your primary job is to manage the formFields array. The user will need to be able to add items to it, update items in it, and remove items from it.

All of the functions with their parameters are in place, you'll just need to examine the JSX and update each accordingly.

  Tasks
    DONE 1 Allow users to add a form field
    DONE 2 Allow users to delete form fields
    DONE 3 Allow users to update form field values
    DONE 4 Allow users to submit the dynamic form with the new values
*/