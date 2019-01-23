const User = require('../models/User')

const usersController = {
    index: (req, res) => {
        User.find({}).then((users) => {
            res.send(users)
        })
    }
}

module.exports = usersController