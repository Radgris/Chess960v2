import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import './App.css';
import axios from 'axios';
import {connect} from 'react-redux';
import {signin} from '../redux/actions'

const Login = ({signin}) => {
    let history = useHistory();
    let [error, setError] = useState({});
    const handleSubmit = (e) => {
         e.preventDefault();
         axios.post('http://54.86.241.66:8080/user/login',
            {
                    username: e.target.username.value,
                    // email: e.target.email.value,
                    password: e.target.password.value
            },
            { 'Accept': 'application/json', 'Content-Type' : 'application/json'}
         ).then((res)=>{
             console.log(res.data.token)
             console.log(signin)
             signin(res.data.token);
             history.push('/hello_world');
         })
         .catch((e)=>{
             setError(e)
         })
    }
    
    return(
    <div className="is-Centered">
        {error? error.message:''}
    
       <form onSubmit={handleSubmit} className='form-group'>
        <h1>Sign In</h1>
        
        <div className='form-input'>
            <input name="username"  type="text" placeholder="Username" />
        </div>

        <div className='form-input'>
            <input name="password" type="password" placeholder="password"/>
        </div>
        <div className='form-input'>
            <div className='form-actions'>
                <a href='/signup'>Sign Up</a>
                <input type="submit" className='btn' value="Submit" />
            </div>
        </div>
        
      </form>
       
    </div>
    )
}
    
export default connect(null, {signin})(Login)