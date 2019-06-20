const User = require('../models/Users');

module.exports = (req, res, next) => {

    User.findById(req.session.userId, (error, user) => {
        if (error){
            console.log(error);
        }
        
        if(user){
            res.locals.uName = user.userName;
        }
        next()
    })
}