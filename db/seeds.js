require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)

const User = require('../models/User')
const Idea = require('../models/Idea')

const boatDrinks = new Idea({
  title: 'Boat Drinks',
  description: "Waitress, I need two more boat drinks."
})
const margarittaville = new Idea({
  title: 'Margarittaville',
  description: "Some people claim that there's a woman to blame But I know it's my own damn fault."
})
const buffett = new User({
  userName: 'jimmy_buffett',
  password: 'myowndamnfault',
  ideas: [boatDrinks, margarittaville]
})

User.remove({})
  .then(() => buffett.save())
  .then(() => console.log('Successful Save'))
  .then(() => mongoose.connection.close())