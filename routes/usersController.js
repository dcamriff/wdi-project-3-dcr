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
    
// CREATE A NEW USER
router.post('/', async (req, res) => {
    try {
        console.log('Create a User')
        const newUser = await User.find({})
        res.json(newUser)
    }   catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

// DELETE A USER
router.delete('/:userId', async (req, res) => {
    try {
        await User.findByIdAndRemove(req.params.ideaId)
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
        await User.findByIdAndUpdate(req.params.ideaId, req.body, {new: true})

        res.json(updatedUser)
    }   catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

module.exports = router
