export default function(state = null, action) {
  switch(action.type) {
    case 'HIDE_ART':
      return action.payload;
  }
  return state;
}
