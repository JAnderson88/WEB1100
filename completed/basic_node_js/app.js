const express = require('express')
const routes = require('./routes')
const path = require('path')
const app = express()

app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', routes.home)

app.listen(3000, () => console.log('app listening on port 3000!'))



