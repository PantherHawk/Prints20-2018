// Actions go here

export function selectArtWork(artWork) {
	// selectArtWork is an action creator, so let's return an action:
	// action: object with a type property and a payload
	return { 
		type: 'ARTWORK_SELECT', 
		payload: artWork 
	};
}
