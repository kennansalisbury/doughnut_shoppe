let router = require('express').Router()
let db = require('../models')

router.get('/', (req, res) => {
    db.donut.findAll()
    .then(donuts => {
        res.render('donuts/index', {donuts})
    })
    .catch(err => {
        console.log(err)
        res.send('error')
    })
})


//donuts - should be controller, ran out of time
router.post('/', (req, res) => {
    //can either look up shop, then add donut to it 
    
    //or if know id already, can just pass in id
    db.donut.create(req.body)
    .then(donut => {
        res.redirect('/shops/' + req.body.shopId)
    })
    .catch(err => {
        console.log(err)
        res.send('error')
    })
})

router.get('/:id', (req, res) => {
    db.donut.findOne({ 
        where: {id: req.params.id},
        include: [db.shop]
    })
    .then(donut => {
        res.render('donuts/show', {donut})
    })
    .catch(err => {
        console.log(err)
        res.send('error')
    })
})



module.exports = router