const express = require('express');
const router = express.Router()
const Client = require('../models/Client');
const data = require('./data.json');


const meg =  function() {
    data.forEach(async d => {
        const client  = new Client(d)
        await client.save()
    })
}

// meg()

router.get('/clients', async (req, res) => {
    try {
        const clients = await Client.find({})
        res.send(clients)
    } catch (error) {
        res.send(error)
    }
})


router.post('/client', async (req, res) => {
    try {
        const client  = new Client(req.body)
        await client.save()
        res.send(client)
    } catch (error) {
        res.send(error)
    }
})

router.put('/owner/:name/:owner', async (req, res) => {
    let clientName = req.params.name
    let newOwner = req.params.owner
    try {
        const client = await Client.findOneAndUpdate({name: clientName}, {owner: newOwner}, {new: true})
        res.send(client)
    } catch (error) {
        res.send(error)
    }
})

router.put('/email/:name/:emailType', async (req, res) => {
    let clientName = req.params.name
    let emailType = req.params.emailType
    try {
        const client = await Client.findOneAndUpdate({name: clientName}, {emailType}, {new: true})
        res.send(client)
    } catch (error) {
        res.send(error)
    }


})

router.put('/declare/:name', async (req, res) => {
    let clientName = req.params.name
    try {
        const client = await Client.findOneAndUpdate({name: clientName}, {sold: true}, {new: true})
        res.send(client)
    } catch (error) {
        res.send(error)
    }
})

router.put('/client/:name', async (req, res) => {
    let { name, country } = req.body
    let clientName = req.params.name
    try {
        const client = await Client.findOneAndUpdate({name: clientName}, {name, country}, {new: true})
        res.send(client)
    } catch (error) {
        res.send(error)
    }
})


module.exports = router
