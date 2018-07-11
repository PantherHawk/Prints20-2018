import { combineReducers } from 'redux';
import ArtWorks from './reducer_artWorks';
import ActiveArtWork from './reducer_active_artwork';
import ActiveArtist from './reducer_active_artist';
import AllArtists from './reducer_get_all_artists';
import ArtHidden from './reducer_hide_art';
import { reducer as burgerMenu } from 'redux-burger-menu';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  art: ArtWorks,
  artists: AllArtists,
  activeArtWork: ActiveArtWork,
  activeArtist: ActiveArtist,
  burgerMenu: burgerMenu,
	form: formReducer,
  artHidden: ArtHidden
});

export default rootReducer;
