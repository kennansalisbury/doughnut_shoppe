const express = require('express')
const layouts = require('express-ejs-layouts')
const db = require('./models')

const app = express()
app.use(layouts)
app.use('/', express.static('static'))
app.use(express.urlencoded({ extended: false }))

app.set('view engine', 'ejs')


app.use('/shops', require('./controllers/shops'))
app.use('/donuts', require('./controllers/donuts'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/customers/:id', (req, res) => {
    db.customer.findOne({
        where: {id: req.params.id},
        include: [db.donut]
    })
    .then(customer => {
        res.render('customers/show', {customer})
    }).catch(err => {
        console.log(err)
        res.send('error')
    })
})

app.listen(process.env.PORT || 3000, () => {
    console.log('🌷🌷🌷🌷')
})