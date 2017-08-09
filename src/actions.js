// export function addPerson(person) {
//   return {
//     type: 'ADD_PERSON',
//     person,
//   };
// }

// export function deletePerson(person) {
//   return {
//     type: 'DELETE_PERSON',
//     person,
//   };
// }


export function addToken(token) {
  return {
    type: 'ADD_TOKEN',
    token,
  };
}

export function deleteToken() {
  return {
    type: 'DELETE_TOKEN',
  };
}

export function showError() {
  return {
    type: 'SHOW_ERROR',
  };
}
