import React from 'react';
import firebase from 'firebase';
import 'firebase/auth';

class Navbar extends React.Component {
  state = {
    isOpen: false,
  }

  logMeOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    return (
      <div className="NavBar">
        <button className="btn btn-warning" onClick={this.logMeOut}>Logout</button>
      </div>
    );
  }
}

export default Navbar;
