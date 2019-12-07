const bcrypt = require('bcrypt');
const saltRounds = 10;
const {User} = require('../config/db');
const jwt = require('jsonwebtoken');
const config = require('../config');

const signup = async (req, res) => {
    const {username, email, password, password_confirmation} = req.body;
    if(!username|!email|!password|!password_confirmation){
        res.status(401).send({msg: 'Please make sure all fields have been filles'})
    }
    const encrypted_password = await bcrypt.hash(password, saltRounds)
    let user = await new User({
        username: username,
        email: email,
        encrypted_password: encrypted_password
    });
    await user.save()
    let token = jwt.sign({username: username},
            config.secret,
            { 
                expiresIn: '24h' // expires in 24 hours
            }
    );
    res.status(200).send({token: token});
}

const signin = async (req, res) => {
    const {username, password} = req.body;
    
    if(!username|!password){
        res.status(401).send({msg: 'Please make sure all fields have been filleD'})
    }
    
    let user = await User.findOne(
        {where: {username: username}});
    bcrypt.compare(password, user.encrypted_password).then(()=>{
        let token = jwt.sign({id: user.id},
            config.secret,
            { 
                expiresIn: '24h' // expires in 24 hours
            }
        )
        res.status(200).send({token:token});
    })
    .catch((e)=>{
        res.status(401).send('passwords do not match');
    });
}

const getuser = async (req, res) => {
    res.status(200).send({request:'No games yet'})
}

module.exports = {
    signup: signup,
    signin: signin,
    getuser: getuser
}