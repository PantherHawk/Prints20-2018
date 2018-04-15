
const initialState = {contents: ['Pablo', 'Picasso', 'Jay', 'Defeo'], query: '', works: []};

export default function (state = initialState, action) {
  switch(action.type) {
    case 'SEARCH': {
      const {value} = action;
      const works = state.contents.filter(el => el.includes(value));
      return {...state, value, work};
    }
  }
  return state;
}
