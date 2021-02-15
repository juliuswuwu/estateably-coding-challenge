import React from 'react';
import { Field, reduxForm } from 'redux-form';
import './FilterTransactionsForm.css';

const categories = ["Salary", "Food", "Transport", "House", "Other"];

let FilterTransactionsForm = props => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit} className="FilterTransactionsForm">
      <div>
        <Field
          name="description"
          component="input"
          type="text"
          placeholder="Description"
        />
      </div>
      <div>
        <Field name="category" component="select">
          <option value="">Category...</option>
          {categories.map(category => (
            <option value={category} key={category}>
              {category}
            </option>
          ))}
        </Field>
      </div>
      <div>
        <Field
          name="value"
          component="input"
          type="number"
          placeholder="Value"
        />
      </div>
      <button type="submit">Filter</button>
    </form>
  );
}

FilterTransactionsForm = reduxForm({
  form: 'filterTransactions'
})(FilterTransactionsForm);

export default FilterTransactionsForm;