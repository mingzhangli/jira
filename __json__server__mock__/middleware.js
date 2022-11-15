module.exports = function (req, res, next) {
    if (req.method === 'POST' && req.path === '/login') {
        if (req.body.username === 'ldd' && req.body.password === '123456') {
            return res.status(200).json({
                user: {
                    token: '124',
                    name: req.body.username
                },
            })
        } else {
            return res.status(400).json('用户或者密码不对')
        }
    }

    if (req.method === 'POST' && req.path === '/register') {
        if (req.body.username && req.body.password) {
            return res.status(200).json({
                user: {
                    token: '注册token',
                    name: req.body.username
                },
            })
        }
    }

    if (req.path === '/me') {
        return res.status(200).json({
            user: {
                token: '刷新token',
            },
        })
    }

    next()
}