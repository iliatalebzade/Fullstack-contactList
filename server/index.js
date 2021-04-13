const express = require('express')
const fs = require('fs')
const users = require('./Model/users')

const app = express()


app.get('/users', (req, res) => {
    res.send(users)
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`server listening on port ${PORT}`))