require('dotenv').config()
const User = require('./models/User')
const Chore = require('./models/Chore')
const Reward = require('./models/Reward')

const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI)

mongoose
    .connection
    .once('open', () => {
        console.log('Mongoose has connected to MongoDB!')
    })

User
    .remove({})
    .then(() => {
        return Reward.remove({})
    })
    .then(() => {
        const sylvie = new User({
            firstName: 'Sylvie',
            profilePic: 'https://i.imgur.com/ALtfn7w.jpg',
            birthMonth: 'December',
            chores: [
                {
                    task: 'Fold Socks',
                    category: 'Home',
                    description: 'Pair all clean socks and put away in drawer.',
                    tokens: 100,
                    completed: false
                }, {
                    task: 'Eat Dinner Veggies',
                    category: 'Wellness',
                    description: 'Eat all your green veggies.',
                    tokens: 200,
                    completed: false
                }, {
                    task: 'Put Away Toys',
                    category: 'Home',
                    description: 'Put all your toys back in their labeled bins.',
                    tokens: 100,
                    completed: false
                }
            ]
        })
        return sylvie.save()
        console.log(`User ${user.firstName} created`)

    })
    .then(() => {
        const simone = new User({
            firstName: 'Simone',
            profilePic: 'https://i.imgur.com/yIOfHBf.jpg',
            birthMonth: 'March',
            chores: [
                {
                    task: 'Wash Dishes',
                    category: 'Home',
                    description: 'Help put dirty cups into dishwasher.',
                    tokens: 100,
                    completed: false
                }, {
                    task: 'Eat Dinner Veggies',
                    category: 'Wellness',
                    description: 'Eat all your green veggies.',
                    tokens: 200,
                    completed: false

                }, {
                    task: 'Put Away Toys',
                    category: 'Home',
                    description: 'Put all your toys back in their labeled bins.',
                    tokens: 100,
                    completed: false
                }
            ]
        })
        return simone.save()
        console.log(`User ${user.firstName} created`)

    })
    .then(() => {
        const dad = new User({
            firstName: 'Dad',
            profilePic: 'https://i.imgur.com/ZvIiZbT.png',
            birthMonth: 'June',
            chores: [
                {
                    task: 'One Load of Laundry',
                    category: 'Home',
                    description: 'Wash and fold a load.',
                    tokens: 100,
                    completed: false
                }
            ]
        })
        return dad.save()
        console.log(`User ${user.firstName} created`)

    })
    .then(() => {
        const mom = new User({
            firstName: 'Mom',
            profilePic: 'https://i.imgur.com/maDNYOB.png',
            birthMonth: 'January',
            chores: [
                {
                    task: 'One Load of Laundry',
                    category: 'Home',
                    description: 'Wash and fold a load.',
                    tokens: 100,
                    completed: false
                }
            ]
        })
        return mom.save()
        console.log(`User ${user.firstName} created`)

        // }).then(() => {     const level100a = new Reward({         level:
        // 'Cat-tastic!',         tokensWorth: 100,         reward: 'One whole dollar!',
        //         imageUrl: 'https://i.imgur.com/N34m9Eq.jpg'     })     return
        // level100a.save()
    })
    .then(() => {
        const level100b = new Reward({level: 'Cat-tastic!', tokensWorth: 100, reward: '30 mins iPad Time!', imageUrl: 'https://i.imgur.com/RNtonin.jpg'})
        return level100b.save()
    })
    .then(() => {
        const level100c = new Reward({level: 'Cat-tastic!', tokensWorth: 100, reward: 'Choose Dinner!', imageUrl: 'https://i.imgur.com/ADU61Zr.jpg'})
        return level100c.save()
    })
    .then(() => {
        const level250a = new Reward({level: 'Piggy Power!', tokensWorth: 250, reward: 'Yum, Chocolate Milk!', imageUrl: 'https://i.imgur.com/pKIpce8.jpg'})
        return level250a.save()
    })
    .then(() => {
        const level250b = new Reward({level: 'Piggy Power!', tokensWorth: 250, reward: 'Popsicle Time!', imageUrl: 'https://i.imgur.com/kLKMIK1.jpg'})
        return level250b.save()
    })
    .then(() => {
        const level250c = new Reward({level: 'Piggy Power!', tokensWorth: 250, reward: 'Ice Cream!', imageUrl: 'https://i.imgur.com/E6IidJG.jpg'})
        return level250c.save()
    })
    .then(() => {
        const level500a = new Reward({level: 'Whale-erific!', tokensWorth: 500, reward: 'Pizza Party w/3 Friends!', imageUrl: 'https://i.imgur.com/1qUm08D.jpg'})
        return level500a.save()
    })
    .then(() => {
        const level500b = new Reward({level: 'Whale-erific!', tokensWorth: 500, reward: 'Pick a Hike, invite 3 Friends!', imageUrl: 'https://i.imgur.com/gmmCPbm.jpg'})
        return level500b.save()
    })
    .then(() => {
        const level500c = new Reward({level: 'Whale-erific!', tokensWorth: 500, reward: 'Art Party, invite 3 Friends!', imageUrl: 'https://i.imgur.com/eTuBdbr.jpg'})
        return level500c.save()
    })
    .catch((error) => {
        console.log('!!! ERROR SAVING SEEDED DATA !!!')
        console.log(error)
    })
    .then(() => {
        console.log(`
Finished seeding database...

Disconnected from MongoDB
`)

    })