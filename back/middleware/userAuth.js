const jwt = require('jsonwebtoken')

const authenticateJWT = (req, res, next) => {
    const authHeader = req.cookies['refreshToken'];

    if (authHeader) {
        const token = authHeader;

        jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
            if (err) {
                return res.json(token);
            }
            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};

module.exports=authenticateJWT