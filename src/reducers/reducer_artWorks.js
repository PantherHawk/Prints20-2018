import { FETCH_ART_BEGIN, FETCH_ART_SUCCESS } from '../actions/artActions'
import _ from 'lodash';

const initialState =	[
		{name: 'Pablo Picasso', pieces: [
				{title: 'Portrait of Gertrude Stein', img: "http://bit.ly/2o9Zx0m"}
			]},
		{name: 'Jay DeFeo', pieces: [
			{title: 'The Rose', img: "http://bit.ly/2ocPA2m"},
			{title: 'Sylvette', img: "http://bit.ly/2C59kOC"},
			{title: 'The Veronica', img: "http://bit.ly/2o2QbEj"},
			{title: 'The Jewel', img: "http://bit.ly/2ErwLPH"},
		]}
	];

export default function artWorksReducer(state = {}, action) {
	console.log('action payload: ', action.payload)
	switch(action.type) {
		case FETCH_ART_BEGIN:
			return {
				...state,
				loading: true,
				error: null
			};
		case FETCH_ART_SUCCESS:
		console.log('action payload in fetch art success reducer : ', action.payload)
			return {
				...state,
				loading: false,
				items: /*array of art => an object such that artist : [art by artist]*/
				action.payload.reduce((memo, el) => {
					if (el.artist === undefined || el.artist === null) {return memo}
					memo[el.artist] = memo[el.artist] ? [...memo[el.artist], {...el}] : [{...el}];
					return memo;
				}, {})
			};
		case 'SEARCH':
			return {
				...state,
				loading: false,
				items: action.payload.reduce((memo, el) => {
					if (el.artist === undefined || el.artist === null) {return memo}
					memo[el.artist] = memo[el.artist] ? [...memo[el.artist], {...el}] : [{...el}];
					return memo;
				}, {})
			};
		// case FETCH_ART:

		// case FETCH_ART_FAIL:
		// 	return {
		// 		...state,
		// 		loading: false,
		// 		error: action.payload,
		// 		items: []
		// 	};
	}
	return state;
}
