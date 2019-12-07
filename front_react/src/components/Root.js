import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import Header from './Header';
import Footer from './Footer';
import Login from './Login';
import Board from './Board';
import SignUp from './SignUp';
import PlayerInfo from './PlayerInfo';
import PrivateRoute from './PrivateRoute'

const Root = (props) => {
  return(
  <div className='Root'>
    <Header></Header>
    <Router>
      <PrivateRoute path='/hello_world' >
        <App/>
      </PrivateRoute>
      <Route path="/login" component={Login} />
      <PrivateRoute path='/board' >
        <Board/>
      </PrivateRoute>
      <Route path="/signup" component={SignUp}/>
      <PrivateRoute path="/player/:id">
        <PlayerInfo />
      </PrivateRoute>
    </Router>
    <Footer></Footer>
  </div>
);
};

// Root.propTypes = {
//   store: PropTypes.object.isRequired
// }

export default Root;