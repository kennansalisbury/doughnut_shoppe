const express = require('express')
const layouts = require('express-ejs-layouts')
const db = require('./models')

const app = express()
app.use(layouts)
app.use('/', express.static('static'))
app.use(express.urlencoded({ extended: false }))

app.set('view engine', 'ejs')


app.use('/shops', require('./controllers/shops'))

app.get('/', (req, res) => {
    res.render('home')
})

//donuts - should be controller, ran out of time
app.post('/donuts', (req, res) => {
    //can either look up shop, then add donut to it 
    
    //or if know id already, can just pass in id
    db.donut.create(req.body)
    .then(donut => {
        res.redirect('/shop/' + req.body.shopId)
    })
    .catch(err => {
        console.log(err)
        res.send('error')
    })
})

app.listen(process.env.PORT || 3000, () => {
    console.log('🌷🌷🌷🌷')
})