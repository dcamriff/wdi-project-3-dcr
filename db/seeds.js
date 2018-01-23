require('dotenv').config()
const User = require('./models/User')
const Chore = require('./models/Chore')
const Reward = require('./models/Reward')

const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI, {
    useMongoClient: true
})

mongoose.connection.once('open', () => {
    console.log('Mongoose has connected to MongoDB!')
})


User.remove({}).then(() => {
    const sylvie = new User({
        firstName: 'Sylvie',
        profilePic: '',
        birthMonth: 'December'
    })
    const simone = new User({
        firstName: 'Simone',
        profilePic: '',
        birthMonth: 'March'
    })
    const dad = new User({
        firstName: 'Dad',
        profilePic: '',
        birthMonth: 'June'
    })
    const mom = new User ({
        firstName: 'Mom',
        profilePic: '',
        birthMonth: 'January'
    })
    const level100a = new Reward({
        level: 'Cat-tastic!',
        tokensWorth: 100,
        prize: 'One whole dollar!',
        imageUrl: ''
    })
    const level100b = new Reward({
        level: 'Cat-tastic!',
        tokensWorth: 100,
        prize: '30 mins iPad Time!',
        imageUrl: ''
    })
    const level100c = new Reward({
        level: 'Cat-tastic!',
        tokensWorth: 100,
        prize: 'Choose Dinner!',
        imageUrl: ''
    })
    const level250a = new Reward({
        level: 'Piggy Power!',
        tokensWorth: 250,
        prize: 'Yum, Chocolate Milk!',
        imageUrl: ''
    })
    const level250b = new Reward({
        level: 'Piggy Power!',
        tokensWorth: 250,
        prize: 'Popsicle Time!',
        imageUrl: ''
    })
    const level250c = new Reward({
        level: 'Piggy Power!',
        tokensWorth: 250,
        prize: 'Ice Cream!',
        imageUrl: ''
    })
    const level500a = new Reward({
        level: 'Whale-erific!',
        tokensWorth: 500,
        prize: 'Pizza Party w/3 Friends!',
        imageUrl: ''
    })
    const level500b = new Reward({
        level: 'Whale-erific!',
        tokensWorth: 500,
        prize: 'Pick a Hike, invite 3 Friends!',
        imageUrl: ''
    })
    const level500c = new Reward({
        level: 'Whale-erific!',
        tokensWorth: 500,
        prize: 'Art Session, invite 3 Friends!',
        imageUrl: ''
    })

sylvie.save()
.then(user => {
    console.log(`User ${user.firstName} created`)
    return simone.save()
})

.then(user => {
    console.log(`User ${user.firstName} created`)
    return dad.save()
})

.then(user => {
    console.log(`User ${user.firstName} created`)
    return mom.save()
})

.then(user => {
    console.log(`User ${user.firstName} created`)
    return level500.save()
})
})