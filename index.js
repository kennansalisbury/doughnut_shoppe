const express = require('express')
const layouts = require('express-ejs-layouts')

const app = express()
app.use(layouts)
app.use('/shops', require('./controllers/shops'))
app.use(express.urlencoded({ extended:false }))

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(process.env.PORT || 3000, () => {
    console.log('🌷🌷🌷🌷')
})