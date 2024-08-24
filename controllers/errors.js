module.exports.get404Page = (req, res) => {
    res.render('errors/404', {title: 'Error | Not Found'})
}