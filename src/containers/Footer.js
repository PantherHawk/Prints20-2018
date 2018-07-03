import React, {Component} from 'react';
import DropDown from '../components/DropDown';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: [
        {
          id: 0,
          name: 'Jay Defeo',
          selected: false,
          key: 'artists'
        }, {
          id: 1,
          name: 'Frank Stick',
          selected: false,
          key: 'artists'
        }, {
          id: 2,
          name: 'Raphael Soyer',
          selected: false,
          key: 'artists'
        }, {
          id: 3,
          name: 'James Daugherty',
          selected: false,
          key: 'artists'
        }, {
          id: 4,
          name: 'Israel Abramfksy',
          selected: false,
          key: 'artists'
        }, {
          id: 5,
          name: 'Marion Boyd Allen',
          selected: false,
          key: 'artists'
        }
      ]
    }
  }
  toggleSelected(id, key) {
    let temp = this.state[key];
    temp[id].selected = !temp[id].selected;
    this.setState({
      [key]: temp
    })
  }
  render() {
    return (<footer className="collection-grid-filters row">
      <DropDown
        title="Select an Artist"
        list={this.state.artists}
        toggleItem={this.toggleSelected.bind(this)}
      /> {/* <div className="filter-group filter-group--sorting">
        <div className="collapse-for-small" id="theFilters" aria-expanded="true" style={{
            style: 'auto'
          }}>
          <div className="filter filter--artist" data-filter="artist">
            <label for="Artist">
              <small className="db">Artist</small>
            </label>
            <div className="btn-group bootstrap-select show-tick">
              <button type="button" className="btn dropdown-toggle bs-placeholder btn-default" data-toggle="dropdown" role="button" data-id="Artist" name="Select an Artist">
                <span className="filter-option pull-left">Select an Artist</span>&nbsp;<span className="bs-caret">
                  <span className="caret"></span>
                </span>
              </button>
              <div className="dd-menu open" role="combobox">
                <ul className="dd-menu inner" role="listbox">
                  <li className="dd-menu-item"></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="filter" data-filter="date"></div>
          <div className="filter" data-filter="medium"></div>
          <div className="filter" data-filter="subject"></div>
        </div>
      </div> */
      }
    </footer>)
  }
}
export default Footer;
