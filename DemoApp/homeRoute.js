module.exports = function (req, res) {
    res.sendfile(app.get('appPath') + '/index2.html');
}
