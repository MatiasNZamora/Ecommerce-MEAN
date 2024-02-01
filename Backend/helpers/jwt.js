const jwt = require('jwt-simple');
const moment = require('moment');
const secret = 'matiasnzamora';


exports.createToken = function(user){
    const payload = {
        sub: user._id,
        nombres:user.apellidos,
        emal:user.email,
        role:user.rol,
        iat: moment().unix(),
        exp: moment().add(7,'days').unix()
    };

    return jwt.encode(payload, secret);
}




