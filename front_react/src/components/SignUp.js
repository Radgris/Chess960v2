import React, {useState} from 'react';
import axios from 'axios';
import {signin} from '../redux/actions'
import {useHistory} from 'react-router-dom'
import {connect} from 'react-redux'

const SignUp = ({signin}) => {
    let history = useHistory();
    let [error, setError] = useState('');
    const handleSubmit = (e) => {
         e.preventDefault();
         let password =e.target.password.value;
        if(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password)){
             axios.post('http://54.86.241.66:8080/api/user/signup',
                {
                    username: e.target.username.value,
                    email: e.target.email.value,
                    password: e.target.password.value,            
                    password_confirmation: e.target.password_confirmation.value
                },
                {'Content-Type': 'application/json','Access-Control-Allow-Origin':'*'}
             ).then((res)=>{
                 signin(res.data.token);
                 history.push('hello_world')
             })
             .catch((e)=>{
                 console.log(e)
                 setError(e)
             })
        } else {
            setError('Password must contain eight characters, at least one letter, one number and one special character')
        }
    }
    return (
        <div className='is-Centered'>
            {error ? 
                <div className='error-message'>
                    {error}
                </div>:
                ''}
            
            <form onSubmit={handleSubmit} className='form-group'>
                <h1>Sign Up</h1>
                
                <div className='form-input'>
                    <input name='username' type='text' placeholder='Name'/>
                </div>
                <div className='form-input'>
                    <input name="email"  type="text" placeholder="Email Ex.(elani@email.com)" />
                </div>
        
                <div className='form-input'>
                    <input name="password" type="password" placeholder="Password"/>
                </div>
                
                <div className='form-input'>
                    <input name="password_confirmation" type="password" placeholder="Password"/>
                </div>
                
                <div className='form-input'>
                    <div className='form-actions'>
                        <a href='/login'>Back to Login</a>
                        <input type="submit" className='btn' value="Submit" />
                    </div>
                </div>
                
            </form>
        </div>
    )
};

export default connect(null, {signin})(SignUp);