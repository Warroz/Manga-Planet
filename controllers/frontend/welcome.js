const Articles = require('../../models/Articles')

module.exports = async(req, res) => {

    await Articles.find({}, (error, article) => {
        if (error) {
            console.log(error);
        }
        res.render('index', {article})
    }) 
}