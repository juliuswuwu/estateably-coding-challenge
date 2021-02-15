import {
  RECEIVE_ERRORS,
} from '../actions/transactions';

const _nullErrors = [];

const ErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors;

    default:
      return {};
  }
};

export default ErrorsReducer;