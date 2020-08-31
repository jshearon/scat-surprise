import React from 'react';
import {
  Redirect,
  Route,
  BrowserRouter,
  Switch,
} from 'react-router-dom';
import './App.scss';
import firebase from 'firebase/app';
import 'firebase/auth';

import fbConnection from '../helpers/data/connection';
import Auth from '../components/pages/Auth/Auth';
import Home from '../components/pages/Home/Home';
import NewBrb from '../components/pages/NewBrb/NewBrb';
import SingleBrb from '../components/pages/SingleBrb/SingleBrb';
import EditBrb from '../components/pages/EditBrb/EditBrb';
import Navbar from '../components/pages/Navbar/Navbar';

fbConnection.firebaseApp();

const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === false
    ? (<Component {...props} />)
    : (<Redirect to={{ pathname: '/home', state: { from: props.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};
const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === true
    ? (<Component {...props} />)
    : (<Redirect to={{ pathname: '/auth', state: { from: props.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

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

    return (
      <div className="App">
        <h2>INSIDE APP COMPONENT</h2>
         <BrowserRouter>
          <React.Fragment>
            <Navbar authed={authed} />
            <div className="container">
              <Switch>
                <PrivateRoute path="/home" component={Home} authed={authed} />
                <PrivateRoute path="/new" component={NewBrb} authed={authed} />
                <PrivateRoute path="/edit/:brbId" component={EditBrb} authed={authed} />
                <PrivateRoute path="/brbs/:brbId" component={SingleBrb} authed={authed} />
                <PublicRoute path="/auth" component={Auth} authed={authed} />
                <Redirect from="*" to="/home" />
              </Switch>
            </div>
          </React.Fragment>
         </BrowserRouter>
      </div>
    );
  }
}

export default App;
