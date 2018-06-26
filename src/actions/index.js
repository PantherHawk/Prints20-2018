// Actions go here
export const FETCH_ART = 'FETCH_ART';

export function selectArtWork(art) {
	console.log('argument of action: ', art)
	// selectArtWork is an action creator, so let's return an action:
	// action: object with a type property and a payload
	return {
		type: 'ARTWORK_SELECT',
		payload: art
	};
}

export function search(query) {
	return {
		type: 'SEARCH',
		payload: query
	}
}
