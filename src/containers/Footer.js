import React, {Component} from 'react';

class Footer extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (<footer className="collection-grid-filters row">
      <div className="filter-group filter-group--sorting">
        <div className="collapse-for-small" id="theFilters" aria-expanded="true" style={{
            style: 'auto'
          }}>
          <div className="filter filter--artist" data-filter="artist">
            <label for="Artist">
              <small className="db">Artist</small>
            </label>
            <div className="btn-group bootstrap-select show-tick">
              <button type="button" className="btn dropdown-toggle bs-placeholder btn-default" data-toggle="dropdown" role="button" data-id="Artist" title="Select an Artist">
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
      </div>
    </footer>)
  }
}
