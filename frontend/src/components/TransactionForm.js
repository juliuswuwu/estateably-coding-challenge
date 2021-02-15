import React from 'react';
import { Field, reduxForm } from 'redux-form';

const categories = ["Salary", "Food", "Transport", "House", "Other"];

let TransactionForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="description">Transaction Description</label>
        <Field 
          name="description" 
          component="input" 
          type="text" 
          placeholder="Description" 
        />
      </div>
      <div>
        <label htmlFor="category">Transaction Category</label>
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
        <label htmlFor="value">Transaction Value</label>
        <Field name="value" component="input" type="number" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

TransactionForm = reduxForm({
  form: 'createTransaction'
})(TransactionForm);

export default TransactionForm;