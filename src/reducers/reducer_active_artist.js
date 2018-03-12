export default function (state = null, action) {
  switch(action.type) {
    case 'ARTIST_SELECT':
      return action.payload;
  }
  return state;
}
