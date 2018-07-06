
import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {findArt} from '../actions/index';
import onClickOutside from 'react-onclickoutside';
import { css, hover, focus } from 'glamor';
import styled from 'styled-components';

const DropDownMenu = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  display: block;
  float: left;
  min-width: 160px;
  padding: 5px 0;
  margin: 2px 0 0;
  list-style: none;
  font-size: 14px;
  text-align: left;
  background-color: #fff;
  border: 1px solid #ccc;
  border: 1px solid rgba(0,0,0,.15);
  border-radius: 4px;
  box-shadow: 0 6px 12px rgba(0,0,0,.175);
  background-clip: padding-box;
`;
let listEl = css({
    display: 'block',
    padding: '3px 20px',
    clear: 'both',
    fontWeight: 400,
    lineHeight: 1.428571429,
    // color: '#fff',
    whiteSpace: 'nowrap'
});

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
        <div className="dd-wrapper col-sm-4">
          <div className="dd-header" onClick={() => this.toggleList()}>
            <div className="dd-header-title">{headerTitle}</div>
            {listOpen
              ? <FontAwesome name="angle-up" size="2x" />
              : <FontAwesome name="angle-down" size="2x" />
            }
          </div>
          {listOpen && <DropDownMenu className="dd-list inner">
            {list && list.map(item => (
              <li
                // className="dd-list-item bootstrap-select btn-group dropdown-menu li a"
                { ...hover({backgroundColor: 'grey'})}
                style={{cursor: 'pointer', padding: '3px 20px', display: 'block'}}
                key={item.id}
                onClick={() => {
                    toggleItem(item.id, item.key);
                    this.chooseArtist(`${item.name}`);
                  }
                }>
                <span className="text" style={{marginRight: '34px'}}>{item.name ? `${item.name}` : item.date} {item.selected && <FontAwesome name="check"/>}</span>
              </li>
            ))}
          </DropDownMenu>}
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
