const mongoose = require('mongoose')
const Schema = require('../schema')

const Chore = mongoose.model('Chore', Schema.ChoreSchema)

module.exports = Chore