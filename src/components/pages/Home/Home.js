import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  editBrbEvent = (e) => {
    e.preventDefault();
    const brbId = 'brb100';
    this.props.history.push(`edit/${brbId}`);
  }

  render() {
    return (
      <div className="Home">
      <h2>Home</h2>
      <button className="btn btn-dark" onClick={this.editBrbEvent}>Edit A Brb</button>
      <Link to="/new">New Brb</Link>
      </div>
    );
  }
}

export default Home;
