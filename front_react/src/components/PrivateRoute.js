import React from 'react';
import {Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

const PrivateRoute = ({jwt, children, path}) => {
    console.log(jwt)
    return (
        <Route path={path}
            render={({location})=>{
                return jwt ? (
                    children
                ) : (
                    <Redirect to={{pathname: "/login", state:{from: location}}}
                    />    
                )
            }}
        >
        </Route>
    )
}

const mapStateToProps = (state) => {
    return {
        jwt: state.jwt
    }
}

export default connect(mapStateToProps)(PrivateRoute);