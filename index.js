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

app.listen(process.env.PORT || 3000, () => {
    console.log('🌷🌷🌷🌷')
})