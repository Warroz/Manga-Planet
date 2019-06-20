const Articles = require('../../models/Articles');

module.exports = async (req, res) => {

        const article = await Articles.findById(req.params.articleId);
        
        res.render('frontendView/articles/edit', { article })

}