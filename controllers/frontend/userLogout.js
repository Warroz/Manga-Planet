module.exports = (req, res) => {
    delete req.session.userId;
    req.flash('success', 'Vous êtes maintenant déconnecté !');
    res.redirect('/')
}