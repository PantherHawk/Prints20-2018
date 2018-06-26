import { FETCH_ART } from '../actions/artActions'
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
		// case FETCH_ART_BEGIN:
		// 	return {
		// 		...state,
		// 		loading: true,
		// 		error: null
		// 	};
		// case FETCH_ART_SUCCESS:
		// 	return Object.assign({}, state, [...state].concat(action.payload))
		case FETCH_ART:
			return _.mapKeys(action.payload, 'public_id')
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
