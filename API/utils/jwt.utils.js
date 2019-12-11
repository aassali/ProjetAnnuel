const jwt = require('jsonwebtoken');

module.exports ={
    generateTokenForBar : function(barData){
        return jwt.sign({
            id: barData.id,
            mail: barData.mail
        },
        JWT_SIGN_SECRET,
        {
            expiresIn:'8h'
        })
    }
}