const mongoose = require('mongoose')

const Schema = mongoose.Schema


const ChoreSchema = new Schema({
    task: {
        type: String,
        required: false
    },
    category: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    imageUrl: {
        type: String,
        required: false,
        default: 'https://i.imgur.com/xCtPKuq.png'
    },
    tokens: {
        type: Number,
        required: false
    },
    completed: {
        type: Boolean,
        default: 'false'
    },
    timestamp: {},
    // usePushEach: true
})

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: [true, 'Your first name is required. Thank you!'],
        unique: true
    },
    profilePic: {
        type: String,
        required: false,
        default: 'https://i.imgur.com/eNBw2Rw.png'
    },
    birthMonth: {
        type: String,
        required: true
    },
    chores: [ChoreSchema],
    timestamp: {},
    // usePushEach: true
})

const RewardSchema = new Schema ({
    level: {
        type: String,
        required: [true, 'The reward level is required!'],
    },
    tokensWorth: {
        type: Number,
        required: [true, 'The token value is required!']
    },
    reward: {
        type: String,
        required: [true, 'Describe the prize!']
    },
    imageUrl: {
        type: String,
        required: false,
        default: 'https://i.imgur.com/LlLmKOS.png'
    },
    timestamp: {},
    // usePushEach: true
})

module.exports = {
    UserSchema, 
    ChoreSchema, 
    RewardSchema
}