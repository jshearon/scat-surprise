import React from 'react';
import birdsData from '../../../helpers/data/birdsData';

class SingleBrb extends React.Component {
  state = {
    birb: {},
  }

  componentDidMount() {
    const { birbId } = this.props.match.params;

    birdsData.getBirb(birbId)
      .then((res) => {
        this.setState({ birb: res.data });
      })
      .catch((err) => console.error(err));
  }

  render() {
    const { birb } = this.state;
    return (
      <h2>{birb.type}</h2>
    );
  }
}

export default SingleBrb;
