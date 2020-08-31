import React from 'react';
import { Link } from 'react-router-dom';
import birdsData from '../../../helpers/data/birdsData';
import authData from '../../../helpers/data/authData';
import Birb from '../../shared/birb';

class Home extends React.Component {
  state = {
    birbs: [],
  }

  editBrbEvent = (e) => {
    e.preventDefault();
    const brbId = 'brb100';
    this.props.history.push(`edit/${brbId}`);
  }

  getBirbs = () => {
    birdsData.getBirbsByUserId(authData.getUid())
      .then((birbs) => this.setState({ birbs }))
      .catch((err) => console.error(err));
  }

  componentDidMount() {
    this.getBirbs();
  }

  render() {
    const { birbs } = this.state;
    const birbList = birbs.map((birb) => <Birb key={birb.id} birb={birb} />);
    return (
      <div className="Home">
        <h2>Home</h2>
        <button className="btn btn-dark" onClick={this.editBrbEvent}>Edit A Brb</button>
        <Link to="/new">New Brb</Link>
          <div className="card-columns">
            {birbList}
          </div>
        </div>
    );
  }
}

export default Home;
