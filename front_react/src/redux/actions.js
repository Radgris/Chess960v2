const signin= (jwt)=> {
    return {
        type: 'SIGN_IN',
        payload: {
            jwt: jwt
        }
    }
}
        
const startBoard = (seed) => {
    return {
        type: 'LOAD_BOARD',
        payload: {
            boardSeed: seed
        }
    }
}
module.exports= {
    signin,
    startBoard
}