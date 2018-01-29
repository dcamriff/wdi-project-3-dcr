const express = require('express')
const router = express.Router()
const Reward = require('../db/models/Reward')

// GET REWARDS LISTING
router.get('/', async(req, res) => {
    try {
        console.log('Get All Rewards')
        const rewards = await Reward.find({})
        res.json(rewards)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

// SHOW A PARTICULAR REWARD
router.get('/:rewardId', async(req, res) => {
    try {
        console.log("Get one")
        const rewardId = req.params.rewardId
        const reward = await Reward.findById(rewardId)
        res.json({reward})
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }

})

// CREATE A NEW REWARD
router.post('/', async(req, res) => {
    try {
        console.log('Before: Create a Reward: ', req.body)
        console.log('After: Create a Reward: ', req.body.newReward)
        const newReward = await Reward.create(req.body.newReward)
        res.json(newReward)
    } catch (error) {
        console.log("Couldn't create reward:", error)
        res.sendStatus(500)
    }
})

// DELETE A REWARD
router.delete('/:rewardId', async(req, res) => {
    try {
        await Reward.findByIdAndRemove(req.params.rewardId)
        res.sendStatus(200)
    } catch (error) {
        console.log(error)
        rse.sendStatus(500)
    }
})

// EDIT A REWARD
router.patch('/:rewardId', async(req, res) => {
    try {
        const updatedReward = await Reward.findByIdAndUpdate(req.params.rewardId, req.body, {new: true})

        res.json(updatedReward)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

module.exports = router
