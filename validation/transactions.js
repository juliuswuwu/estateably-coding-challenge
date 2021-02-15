const Validator = require('validator');
const validText = require('./valid-text');
const validCategory = require('./valid-category');

module.exports = function validateTransactionData(data) {
  let errors = {};

  data.description = validText(data.description) ? data.description : '';
  data.category = validCategory(data.category) ? data.category : '';

  
  if (Validator.isEmpty(data.description)) {
    errors.description = 'Description field is required';
  }
  
  if (Validator.isEmpty(data.category)) {
    errors.category = 'Category field is required';
  }

  if (!Validator.isNumeric(data.value)) {
    errors.value = 'Value is invalid';
  }
  
  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};