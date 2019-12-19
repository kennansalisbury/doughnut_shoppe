const router = require('express').Router()
const db = require('../models')

router.get('/', (req, res) => {
    db.shop.findAll()
    .then(shops => {
        res.render('shops/index', {shops})
    })
    .catch(err => {
        console.log('Error', err)
        res.send('Error')
    })
})

router.post('/', (req, res) => {
    console.log(req.body)
    db.shop.create(req.body)
   .then(newShop => {
       res.redirect('/shops')
   })
   .catch(err => {
       console.log('Error', err)
       res.send('Error')
   })
})


router.get('/new', (req, res) => {
    res.render('shops/new')
})

router.get('/:id', (req, res) => {
    console.log(req.params.id)
    // db.shop.findByPk(req.params.id)
    db.shop.findOne({
        where: {id: req.params.id},
        include: [db.donut]
    })
    .then(shop => {
        res.render('shops/show', { shop })
    })
    .catch(err => {
        console.log('Error', err)
        res.send('Error')
    })
})




module.exports = router