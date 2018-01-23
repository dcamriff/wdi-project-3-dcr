const mongoose = require('mongoose')
const Schema = require('../schema')

const Reward = mongoose.model('Reward', Schema.RewardSchema)

module.exports = Reward