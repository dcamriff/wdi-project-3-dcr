const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: [true, 'Your first name is required. Thank you!'],
        unique: true
    },
    profilePic: {
        type: String,
        required: false
    },
    birthMonth: {
        type: String,
        required: true
    }
})

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
        required: false
    },
    tokensEarned: {
        type: Number,
        required: false
    },
    timestamp: {},

    completed: {
        type: Boolean,
        default: 'false'
    }
})

const RewardSchema = new Schema ({
    level: {
        type: String,
        required: [true, 'The reward level is required!'],
    },
    tokensWorth: {
        type: Number,
        required: [true, 'The token value is required!'],
        unique: true
    },
    prize: {
        type: String,
        required: [true, 'Describe the prize!']
    },
    imageUrl: {
        type: String,
        required: false,
        default: 'https://i.imgur.com/LlLmKOS.png'
    }
})

module.exports = {
    UserSchema, 
    ChoreSchema, 
    RewardSchema
}