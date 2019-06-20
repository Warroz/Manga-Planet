const Comments = require('../../models/Comments');

module.exports = async (req, res) => {

    const comment = await Comments.findById(req.params.commentId);

    res.render('frontendView/comments/edit', { comment })

}