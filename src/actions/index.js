
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

export async function findArt(term) {
	let response = await fetch(`/api/search?q=${term}`);
	let searchResult = await response.json();

	console.log('data from query search: ', searchResult);
	_.forIn(searchResult.resources, (datum) => {
		if (datum.context) {
			_.merge(datum, datum.context.custom)
			delete datum.context;
			console.log('after merge: ', datum)
		}
	})

	return {
		type: 'SEARCH',
		payload: searchResult.resources
	}
}
