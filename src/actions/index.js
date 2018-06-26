// Actions go here
import 'babel-polyfill';
export const FETCH_ART = 'FETCH_ART';

export function selectArtWork(artist) {
	console.log('argument of action: ', artist)
	// selectArtWork is an action creator, so let's return an action:
	// action: object with a type property and a payload
	return {
		type: 'ARTWORK_SELECT',
		payload: artist.pieces
	};
}

export function selectArtist(artist) {
	return {
		type: 'ARTIST_SELECT',
		payload: artist.name
	};
}



export function search(query) {
	return {
		type: 'SEARCH',
		payload: query
	}
}
