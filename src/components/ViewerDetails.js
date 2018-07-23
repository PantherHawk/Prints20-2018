import {Component} from 'react';
import {connect} from 'react-redux';

class ViewerDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true
    }
  }

  render() {
    return (
      <div className="card card-body">
        <div className="panel-group" id="accordion">
          <div className="panel panel-default">
            <div id="viewerDetails" className="panel-collapse collapse in" aria-expanded="true">
              <div className="container">
                <div className="cs6">
                  <h1 className="size-h1 text-italic mb0">{selected.title}</h1>
                  <a><span className="artist">{selected.artist}</span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    selected: state.activeArtWork
  }
}

export default connect(mapStateToProps, null)(ViewerDetails);
