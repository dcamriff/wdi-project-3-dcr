const express = require('express')
const router = express.Router()
const User = require('../db/models/User')

// GET USERS LISTING
router.get('/', async (req, res) => {
    try {
        console.log('Get All Users')
        const users = await User.find({})
        res.json(users)
    }   catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

// SHOW A SINGLE USER

    
// CREATE A NEW USER
router.post('/', async (req, res) => {
    try {
        console.log('Before: Create a User: ', req.body)
        console.log('After: Create a User: ', req.body.newUser)
        const newUser = await User.create(req.body.newUser)
        res.json(newUser)
    }   catch (error) {
        console.log("Couldn't create user:", error)
        res.sendStatus(500)
    }
})

// DELETE A USER
router.delete('/:userId', async (req, res) => {
    try {
        await User.findByIdAndRemove(req.params.userId)
        res.sendStatus(200)
    }   catch (error) {
        console.log(error)
        rse.sendStatus(500)
    }
})

// EDIT A USER
router.patch('/:userId', async (req, res) => {
    try {
        const updatedUser = 
        await User.findByIdAndUpdate(req.params.userId, req.body, {new: true})

        res.json(updatedUser)
    }   catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

module.exports = router
