import React from 'react';
import { Field, reduxForm } from 'redux-form';
import './TransactionForm.css';

const categories = ["Salary", "Food", "Transport", "House", "Other"];

let TransactionForm = props => {
  const { handleSubmit } = props;
  return (
    <form className="TransactionForm" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="description">Description</label>
        <Field 
          name="description" 
          component="input" 
          type="text" 
          placeholder="Description" 
        />
      </div>
      <div>
        <label htmlFor="category">Category</label>
        <Field name="category" component="select">
          <option value="">Select a category...</option>
          { categories.map(category => (
            <option value={category} key={category}>
              {category}
            </option>
          ))}
        </Field>
      </div>
      <div>
        <label htmlFor="value">Value</label>
        <Field name="value" component="input" type="number" />
      </div>
      <div>
      <button type="submit">Submit</button>
      </div>
    </form>
  );
}

TransactionForm = reduxForm({
  form: 'createTransaction'
})(TransactionForm);

export default TransactionForm;