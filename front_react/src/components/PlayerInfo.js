import React, {useEffect, useState} from 'react';
import axios from 'axios'
import {connect} from 'react-redux'

const PlayerInfo = ({match,jwt}) => {
    let {id} = match.params
    let [player, setPlayer] = useState({
                                            player: {
                                                name: 'test', 
                                                lastName: 'test'
                                            }, 
                                            history: [
                                                {seed: 345},
                                                {seed: 98}
                                                ]
                                        })
    useEffect(()=>{
     axios.get(`http://ec2-54-86-241-66.compute-1.amazonaws.com:8080/user/${id}`, { 'headers': { 'Authorization': `Token ${jwt}` } })
                    .then(res=> res.user)
                    .then(data=> setPlayer(data))
    })
    
    return (
        <div className='player-info'>
            <div className='player-personal'>
                <h1>{`${player.player.name} ${player.player.lastName}`}</h1>
            </div>
            <div className='player-history'>
                <h4>Previous Games</h4>
                <ul>
                    {player.history.map((a)=>(
                        <li>{a.seed}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        jwt : state.jwt
    }
}

export default connect(mapStateToProps)(PlayerInfo)