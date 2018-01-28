const express = require('express')
const router = express.Router({ mergeParams: true })
const User = require('../db/models/User')

// GET CHORES LISTING
router.get('/', async(req, res) => {
    
    try {
        console.log('Get All')
        const userId = req.params.userId
        const user = await User.findById(userId)
        res.json(user.chores)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

// SHOW A PARTICULAR CHORE
router.get('/:choreId', async(req, res) => {
    try {
        console.log("Get one")
        const userId = req.params.userId
        const choreId = req.params.choreId
        const user = await User.findById(userId)
        res.json(user.chores.id(choreId))
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

// // CREATE A NEW CHORE
// router.post('/', async(req, res) => {
//     try {
//         console.log('Before: Create a Chore: ', req.body)
//         console.log('After: Create a Chore: ', req.body.newUser)
//         const newUser = await Chore.create(req.body.newUser)
//         res.json(newUser)
//     } catch (error) {
//         console.log("Couldn't create chore:", error)
//         res.sendStatus(500)
//     }
// })

// // DELETE A CHORE
// router.delete('/:choreId', async(req, res) => {
//     try {
//         await Chore.findByIdAndRemove(req.params.choreId)
//         res.sendStatus(200)
//     } catch (error) {
//         console.log(error)
//         rse.sendStatus(500)
//     }
// })

// // EDIT A CHORE
// router.patch('/:choreId', async(req, res) => {
//     try {
//         const updatedUser = await Chore.findByIdAndUpdate(req.params.choreId, req.body, {new: true})

//         res.json(updatedUser)
//     } catch (error) {
//         console.log(error)
//         res.sendStatus(500)
//     }
// })

module.exports = router
