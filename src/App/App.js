import React from 'react';
import './App.scss';
import firebase from 'firebase/app';
import 'firebase/auth';

import fbConnection from '../helpers/data/connection';
import Auth from '../javascripts/components/pages/Auth/Auth';

fbConnection.firebaseApp();

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed } = this.state;

    const loadComponent = () => {
      if (authed) {
        return 'logged in';
      }

      return <Auth />;
    };

    return (
      <div className="App">
        <h2>INSIDE APP COMPONENT</h2>
        {loadComponent()}
      </div>
    );
  }
}

export default App;
