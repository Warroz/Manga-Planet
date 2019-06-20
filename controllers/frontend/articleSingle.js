const Articles = require('../../models/Articles'),
      Comments = require('../../models/Comments')

module.exports = async (req, res) => {
    
    Articles.findById(req.params.articleId, async(error, article) => {

        let isOwner = false

        if(error){
            console.log(error);
        }
        
        if (article.authorId === req.session.userId){
            isOwner = true;
        }

        await Comments.find({ articleId: article._id }, (error, comment) => {

            for (i = 0; i < comment.length; i++) {
                if (comment[i].authorId === req.session.userId) {

                    comment[i] = {
                        createDate: comment[i].createDate,
                        formatDate: comment[i].formatDate,
                        _id: comment[i]._id,
                        content: comment[i].content,
                        author: comment[i].author,
                        authorId: comment[i].authorId,
                        articleId: comment[i].articleId,
                        isCommentOwner: true
                    }
                }
            }
            res.render('frontendView/articles/displaySingle', {article, comment, isOwner})
        })
    });
}