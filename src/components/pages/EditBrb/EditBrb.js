import React from 'react';

class EditBrb extends React.Component {
  render() {
    const { brbId } = this.props.match.params;
    return (
      <div className="EditBrb">
        <h2>EditBrb</h2>
        <p>This Brb's id is: { brbId }</p>
      </div>
    );
  }
}

export default EditBrb;
