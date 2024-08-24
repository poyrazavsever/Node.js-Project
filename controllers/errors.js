module.exports.get404Page = (req, res) => {
    res.render('404', {title: 'Error | Not Found'})
}