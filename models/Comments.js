const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: [true, 'Le champ "contenu" est requis.']
    },
    author: String,
    authorId: String,
    articleId: String,
    createDate: {
        type: Date,
        default: new Date()
    },
    formatDate: {
        type: String,
    }
})

const Comments = mongoose.model('Comments', CommentSchema);

module.exports = Comments;