
import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {findArt} from '../actions/index';
import onClickOutside from 'react-onclickoutside';

class DropDown extends Component {
    constructor(props) {
      super(props);
      this.state = {
        listOpen: false,
        headerTitle: this.props.title
      }
      // this.toggleList.bind(this);
      // this.handleClickOutside.bind(this);
    }
    handleClickOutside() {
      this.setState({ listOpen: false });
    }
    toggleList() {
      console.log('props in dd: ', this.props)
      console.log('trying to toggle list')
      this.setState(prevState => ({
        listOpen: !prevState.listOpen
      }));
    }
    chooseArtist(artist) {
      this.props.findArt(artist);
    }
    render() {
      const {list, toggleItem} = this.props;
      const {listOpen, headerTitle} = this.state;
      return (
        <div className="dd-wrapper">
          <div className="dd-header" onClick={() => this.toggleList()}>
            <div className="dd-header-title">{headerTitle}</div>
            {listOpen
              ? <FontAwesome name="angle-up" size="2x" />
              : <FontAwesome name="angle-down" size="2x" />
            }
          </div>
          {listOpen && <ul className="dd-list">
            {list.map(item => (
              <li
                className="dd-list-item"
                key={item.id}
                onClick={() => {
                  toggleItem(item.id, item.key);
                  this.chooseArtist(`${item.name}`);
                }
                }>
                {item.name ? `${item.name}` : item.date} {item.selected && <FontAwesome name="check"/>}
              </li>
            ))}
          </ul>}
        </div>
      )
    }
}

function mapDispatchToProps(dispatch) {
  // Whenever selectArtWork is called, the result
  // should be passed to all our reducers
  // the dispatch function receives all the actions and
  // spits them out to all of the different reducers.
  return bindActionCreators({ findArt: findArt }, dispatch);
}

export default connect(null, mapDispatchToProps)(onClickOutside(DropDown));
