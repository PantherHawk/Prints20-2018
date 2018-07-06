export default function (state = null, action) {
  switch(action.type) {
    case 'GET_ALL_ARTISTS':
      return action.payload;
  }
  return state;
}
