import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import {connect} from 'react-redux'
import {startBoard} from '../redux/actions'

function App({jwt, startBoard}) {
  const history = useHistory();
  const viewPlayer =(e) =>{
    e.preventDefault();
    // history.push('/player/2');
  }
  const startGame = (e) => {
    e.preventDefault();
    axios.get('http://ec2-54-86-241-66.compute-1.amazonaws.com:8080/start', { 'headers': { 'authorization': `Token ${jwt}` } })
    .then((res)=>{
      startBoard(res.data.Order);
      history.push('/board');
    })
    // history.push('/board');
  }
  return (
    <div className="start">
    <div className="container">
        <div className='container-button'>
          <button className='main-view-button' onClick={startGame}>Start Game</button>
        </div>
        <div className='container-button'>
          <button className='main-view-button' onClick={viewPlayer}>View player Info</button>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
    return {
        jwt : state.jwt
    }
}

export default connect(mapStateToProps, {startBoard})(App);
