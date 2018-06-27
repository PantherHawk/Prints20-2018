
const initialState = {contents: {}};

export default function (state = {}, action) {
  console.log('action.value: ', action.payload)
  console.log('current state: ', state)
  switch(action.type) {
    case 'SEARCH': {
      return {...state, payload};
    }
  }
  return state;
}
