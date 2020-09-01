import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import './birb.scss';

class Birb extends React.Component {
  render() {
    const { birb } = this.props;
    return (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{birb.type}</h5>
              <ul className="card-text text-left">
                  <li><span className="birdLabels">Color:</span> {birb.color}</li>
                  <li><span className="birdLabels">Location:</span> {birb.location}</li>
                  <li><span className="birdLabels">Notes:</span> {birb.notes}</li>
                  <li><span className="birdLabels">Seen at:</span> {moment(birb.seenAt).format('MMMM Do YYYY, h:mm:ss a')}</li>
                  <li><span className="birdLabels">Size:</span> {birb.size}</li>
                  <li><span className="birdLabels">Type:</span> {birb.type}</li>
                  <li>{birb.wasSleeping ? 'Bird was sleeping' : 'Bird was awake'}</li>
            </ul>
            <Link to={`/birb/${birb.id}`} className="btn btn-warning">View Birb</Link>
          </div>
        </div>
    );
  }
}

export default Birb;
