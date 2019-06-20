const Users = require('../../models/Users'),
      Articles = require('../../models/Articles')

module.exports = (req, res) => {
    let isOwner = false

    Users.findById(req.params.authorId, async (error, usr) => {
        // console.log(req.flash('data')[0]);
        if(error) {
            console.log(error);
        }
        
        if (req.session.userId === req.params.authorId){
            isOwner = true
        }
        
        await Articles.find({author: usr.userName}, (error, article) => {

            res.render('frontendView/users/profile', { usr, isOwner, article })
        })
    })
}