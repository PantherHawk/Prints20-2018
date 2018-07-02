
import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
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
    render() {
      const {list, toggleItem, chooseArtist} = this.props;
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
                  toggleItem(item.id, item.key)
                  chooseArtist(`${item.name.first} ${item.name.last}`)
                }
                }>
                {item.name ? `${item.name.first} ${item.name.last}` : item.date} {item.selected && <FontAwesome name="check"/>}
              </li>
            ))}
          </ul>}
        </div>
      )
    }
}

export default onClickOutside(DropDown);
