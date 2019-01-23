const express = require('express')
const User = require('../models/User')
const router = express.Router()
const usersController = require('../controllers/users')

router.get('/', (req, res) => {
    User.find().then(users => {
        res.json(users)
    })
        .catch((err) => console.log(err))
})

router.get('/api/users', usersController.index)


module.exports = router;