// // reducers/people.js
// import { ADD_PERSON, DELETE_PERSON } from '../constants';

const initialState = {
  token: null,
  errorMessage: null
}

export default function peopleReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TOKEN':
      return {
        ...state,
        token: action.token,
        errorMessage: null,
      };
    case 'DELETE_TOKEN':
      return {
        ...state,
        token: null,
      };
    case 'SHOW_ERROR':
      return {
        ...state,
        errorMessage: "Bad token",
        token: null,
      };
    default:
      return state;
  }
}
