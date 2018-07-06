import React, {Component} from 'react';
import {connect} from 'react-redux';
import DropDown from '../components/DropDown';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: [],
      //   {
      //     id: 0,
      //     name: 'Jay Defeo',
      //     selected: false,
      //     key: 'artists'
      //   }, {
      //     id: 1,
      //     name: 'Frank Stick',
      //     selected: false,
      //     key: 'artists'
      //   }, {
      //     id: 2,
      //     name: 'Raphael Soyer',
      //     selected: false,
      //     key: 'artists'
      //   }, {
      //     id: 3,
      //     name: 'James Daugherty',
      //     selected: false,
      //     key: 'artists'
      //   }, {
      //     id: 4,
      //     name: 'Israel Abramfksy',
      //     selected: false,
      //     key: 'artists'
      //   }, {
      //     id: 5,
      //     name: 'Marion Boyd Allen',
      //     selected: false,
      //     key: 'artists'
      //   }
      // ],

      medium: [
        {
          id: 0,
          name: 'Oil on canvas',
          selected: false,
          key: 'medium'
        }, {
          id: 1,
          name: 'Oil on copper',
          selected: false,
          key: 'medium'
        }, {
          id: 2,
          name: 'Oil on silver-copper alloy',
          selected: false,
          key: 'medium'
        }, {
          id: 3,
          name: 'Oil on panel',
          selected: false,
          key: 'medium'
        }, {
          id: 4,
          name: 'Works on paper',
          selected: false,
          key: 'medium'
        }, {
          id: 5,
          name: 'Lithographs',
          selected: false,
          key: 'medium'
        },
        {
          id: 6,
          name: 'Engravings',
          selected: false,
          key: 'medium'
        },
        {
          id: 7,
          name: 'Posters',
          selected: false,
          key: 'medium'
        },
      ],
      subject: [
        {
          id: 0,
          name: 'WPA',
          selected: false,
          key: 'subject'
        }, {
          id: 1,
          name: 'Judaica',
          selected: false,
          key: 'subject'
        }, {
          id: 2,
          name: 'Pop art',
          selected: false,
          key: 'subject'
        }, {
          id: 3,
          name: 'Still lifes',
          selected: false,
          key: 'subject'
        }, {
          id: 4,
          name: 'Drawings',
          selected: false,
          key: 'subject'
        }, {
          id: 5,
          name: 'Parables',
          selected: false,
          key: 'subject'
        },
        {
          id: 6,
          name: 'Animal Paintings',
          selected: false,
          key: 'subject'
        },
        {
          id: 7,
          name: 'Mythology',
          selected: false,
          key: 'subject'
        },
      ]
    }
  }
  componentDidMount() {
    this.setState({
      artists: Object.keys(this.props.artists)
    })
    if (this.props.artists) {
      for (var name in this.props.artists) {
        this.state.artists.push({
          id: 7,
          name: name,
          selected: false,
          key: 'artists'
        })
      }
    }
    console.log('this.state.artists: ', this.state.artists)
  }
  toggleSelected(id, key) {
    let temp = this.state[key];
    temp[id].selected = !temp[id].selected;
    this.setState({
      [key]: temp
    })
  }
  render() {
    const {artists} = this.props;
    console.log('artists from props: ', artists)
    return (<footer className="collection-grid-filters row">
      <DropDown
        className="col-sm-6"
        title="Select an Artist"
        list={this.state.artists}
        toggleItem={this.toggleSelected.bind(this)}
      />
      <DropDown
        className="col-sm-6"
        title="Select an Period"
        list={this.state.medium}
        toggleItem={this.toggleSelected.bind(this)}
      />
      <DropDown
        className="col-sm-6"
        title="Select a Subject"
        list={this.state.subject}
        toggleItem={this.toggleSelected.bind(this)}
      />{/* <div className="filter-group filter-group--sorting">
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

function mapStateToProps(state) {
  console.log('from mapStateToProps in Footer: ', state.art.items)
  return {
    artists: state.art.items,
  };
}

export default connect(mapStateToProps, null)(Footer);
// export default Footer;
