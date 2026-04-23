import * as React from "react";

export default function FormBuilder() {
  const [formFields, setFormField] = React.useState([]);
 
  const handleAddFormField = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newField = {
      id: new Date().getTime(),
      type: formData.get("type"),
      label: formData.get("label"),
      placeholder: formData.get("placeholder"),
      required: formData.get("required"),
      value: ""
    };
    setFormField([...formFields, newField]);   
    // needs to be an array spread operator like const copy = [...original];
  };
  const handleUpdateFormField = (id, updatedField) => {};

  const handleDeleteFormField = (id) => {
    setFormField(formFields.filter(item => item.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formFields, null, 2));
  };

  return (
    <div>
      <h1>Form Builder</h1>
      <form id="form-builder" onSubmit={handleAddFormField}>
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
      <form id="form-fields" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Form Fields</legend>
          <ul>
            {formFields.map((field) => (
              <li key={field.id}>
                <label htmlFor={`input-${field.id}`}>{field.label}</label>
                <input
                  id={`input-${field.id}`}
                  required={field.required}
                  placeholder={field.placeholder}
                  type={field.type}
                  value={field.value}
                  onChange={(e) =>
                    handleUpdateFormField(field.id, { value: e.target.value })
                  }
                />
                <button
                  type="button"
                  className="secondary"
                  onClick={() => handleDeleteFormField(field.id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
          <span>Your form fields will show here</span>
          <button className="primary">Submit</button>
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
    3 Allow users to update form field values
    4 Allow users to submit the dynamic form with the new values
*/