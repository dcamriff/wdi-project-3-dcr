const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: [true, 'Your first name is required. Thank you!']
        unique: true
    },
    dateOfBirth: {
        type: Date,
        required: [true, 'Your date of birth is required. Thank you!']
    },
    profilePic: {
        type: String,
        required: false
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
    tokens: {
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
        unique: true
    },
    prize: {
        type: String,
        required: true
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