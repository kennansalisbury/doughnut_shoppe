const express = require('express')

const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.send('home')
})

app.listen(process.env.PORT || 3000, () => {
    console.log('listening')
})