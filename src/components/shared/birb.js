import React from 'react';
import moment from 'moment';
import SingleBirb from '../pages/SingleBrb/SingleBrb';

class Birb extends React.Component {
  render() {
    const { birb } = this.props;
    return (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{birb.type}</h5>
              <p className="card-text">
                  {birb.color}<br />
                  {birb.location}<br />
                  {birb.notes}<br />
                  {moment(birb.seenAt).format('MMMM Do YYYY, h:mm:ss a')}<br />
                  {birb.size}<br />
                  {birb.type}<br />
                  {birb.wasSleeping}<br />
            </p>
            <button path={'/birbs/:birb.id'} component={SingleBirb}>New Brb</button>
          </div>
        </div>
    );
  }
}

export default Birb;
