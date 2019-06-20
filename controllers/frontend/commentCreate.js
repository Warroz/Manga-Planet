const Comments = require('../../models/Comments'),
      Users = require('../../models/Users'),
      dateFormat = require('dateformat')
  
module.exports = (req, res) => {
    let time = Date.now()

    Users.findById(req.session.userId, (error, user) => {
        // console.log(req.flash('data')[0]);
        if (error) {
            console.log(error);
        }

        Comments.create(
            {
                ...req.body,
                author: user.userName,
                authorId: user._id,
                articleId: req.params.articleId,
                formatDate: (dateFormat(time, "dd mm yyyy à HH:MM:ss"))
            },
            (error, comment) => {
                if (error) {
                    console.log(error);
                    req.flash('error', 'Erreur lors de la création du commentaire');
                } else {
                    req.flash('success', 'Commentaire créé avec succes !');
                }
                res.redirect(`/articles/single/${comment.articleId}#${comment._id}`)
            }
        )
    })
}