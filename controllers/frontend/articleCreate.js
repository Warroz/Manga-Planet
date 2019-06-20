const Article = require('../../models/Articles'),
      User = require('../../models/Users'),
      dateFormat = require('dateformat')

      
module.exports = (req, res) => {
    let date = Date.now()

    User.findById(req.session.userId, (error, user) => {
        // console.log(req.flash('data')[0]);
        if (error) {
            console.log(error);
        }
        
        Article.create(
            {
                ...req.body,
                author: user.userName,
                authorId: user._id,
                formatDate: (dateFormat(date, "dd mm yyyy à HH:MM:ss"))
            },
            (error, article) => {
                if (error) {
                    console.log(error);
                    req.flash('error', 'Erreur lors de la création de l\'article');
                } else {
                    req.flash('success', 'Article créé avec succes !');
                }
                res.redirect(`/`)
            })

    })
}