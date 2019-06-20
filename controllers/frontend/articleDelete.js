const Articles = require('../../models/Articles'),
      Comments = require('../../models/Comments')

module.exports = (req, res) => {


    Comments.deleteMany({articleId: req.params.articleId}, (err) => {
        if (err) {
            console.log(err);
        }
        console.log('commentaires supprimés');
    })

    Articles.findByIdAndRemove(
        req.params.articleId,
        { useFindAndModify: false },
        function (err) {
            if (!err) {
                console.log('Suppression article réussie');
            } else {
                req.flash('error', 'Échec de la suppression ...');
                res.redirect('/');
            }
        });


    req.flash('success', 'Suppression réussie !');
    res.redirect('/');
}