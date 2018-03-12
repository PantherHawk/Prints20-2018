// State argument we pass in this action is not the app state,
// just the piece of state this action cares about

export default function(state = null, action) {
	switch(action.type) {
		case 'ARTWORK_SELECT':
			return action.payload;
	}
	// when we don't care about the state change, just return the state
	return state;
}
