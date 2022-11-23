// Normal User
function isUserLogIn (req, res, next) {
    if (!req.session.user) {
        return res.redirect("/login")
    } else {
        next()
    }
}
// GODMODE ADMIN
function GodModeLogIn (req, res, next) {
    if (!(req.session.user.username  === 'admin')) {
    return res.redirect("/login")
    } else {
        next();
    }
}

module.exports = { isUserLogIn, GodModeLogIn }