const Validator = require('validator');
const validText = require('./valid-text');
const validCategory = require('./valid-category');

module.exports = function validateTransactionQuery(data) {
  let errors = {};

  if (data.description) {
    if (Validator.isEmpty(data.description) || !validText(data.description)) {
      errors.description = 'Description field is invalid';
    }
  }

  if (data.category) {
    if (Validator.isEmpty(data.category) || !validCategory(data.category)) {
      errors.category = 'Category field is invalid';
    }
  }

  if (data.value) {
    if (!Validator.isNumeric(data.value)) {
      errors.value = 'Value is invalid';
    }
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};