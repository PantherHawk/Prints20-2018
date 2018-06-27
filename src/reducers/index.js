import { combineReducers } from 'redux';
import ArtWorks from './reducer_artWorks';
import ActiveArtWork from './reducer_active_artwork';
import ActiveArtist from './reducer_active_artist';
// import SearchResult from './reducer_search';
import { reducer as burgerMenu } from 'redux-burger-menu';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  // searchResult: SearchResult,
  art: ArtWorks,
  activeArtWork: ActiveArtWork,
  activeArtist: ActiveArtist,
  burgerMenu: burgerMenu,
	form: formReducer
});

export default rootReducer;
