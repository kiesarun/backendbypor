import HTTPStatus from 'http-status-codes'

export const ensureAuth = (req,res,next) => {
    if (!req.session.user) {
        res.sendStatus(HTTPStatus.UNAUTHORIZED)
    }
    req.user = req.session.user
    next()
}