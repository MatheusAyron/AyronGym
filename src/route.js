const express = require('express')

const route = express.Router()

route.get('/', (req, res) => res.render("index"))
route.get('/home', (req, res) => res.render("home"))
route.get('/contato', (req, res) => res.render("contato"))
route.get('/produtos', (req, res) => res.render("produtos"))


module.exports = route