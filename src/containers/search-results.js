import React, { Component } from 'react';
import { connect } from 'react-redux';

class ArtWorkList extends Component {
  render() {
    const {works} = this.props;

    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>{works.map((work) => <tr key={work}><td>{work}</td></tr>)}</tbody>
      </table>
    );
  }
}

function mapStateToProps({works}) {
  return {
    works: works.works
  }
}

export default connect(mapStateToProps)(ArtWorkList);
