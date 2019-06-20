const User = require('../../models/Users'),
      dateFormat = require('dateformat')
      
module.exports = (req, res) => {
    let date = Date.now()
    
    if(req.body.pass === req.body.pass2){
        User.create(
            {
                ... req.body,
                registerDate: (dateFormat(date, "dd mm yyyy à HH:MM:ss"))
            },
            (error, usr) => {

                if (error) {

                    const warn = (Object.keys(error.errors).map(key => error.errors[key].message));

                    req.flash('error', warn);
                    req.flash('data', req.body)

                    return res.redirect('/');
                    
                }
                req.flash('success', 'Enregistrement réussi, vous pouvez maintenant vous connecter !');
                res.redirect('/');
            }
        )
    }

}
