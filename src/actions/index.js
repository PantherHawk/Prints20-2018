
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
	let art = unnestifyObjectsIn(searchResult.resources);

	return {
		type: 'SEARCH',
		payload: art
	}
}

export async function fetchArtists() {
	let response = await fetch(`/api/all_artists_list`);
	let result = await response.json();
	let names = result.folders.map(folder => {
		return folder.name;
	})
	return {
		type: 'GET_ALL_ARTISTS',
		payload: names
	}
}

export async function findArtByContext(key, value) {
	// handle dates
	// if key is period
	let regex;
	if (key === 'period') {
		let digits = value.slice(0, 2);
		regex = /^(digits)\d{1}$/;
	}
	//  grab first digits
	//  set up regex
	let response = await fetch(`/api/context?key=${key}&value=${value.slice(0, 3)}`);
	let result = await response.json();
	console.log('result of art search by period: ', result);
	let art = unnestifyObjectsIn(result.resources);
	console.log('art for payload: ', art)
	return {
		type: 'FIND_ART_BY_CONTEXT',
		payload: art
	}
}

function unnestifyObjectsIn(list) {
	return _.forIn(list, (datum) => {
		if (datum.context) {
      _.merge(datum, datum.context.custom)
			delete datum.context;
		} else {
			return datum;
		}
	});
}
