const express = require('express')
const app = express()
const mongoose = require('mongoose')
const { MONGODB } = require('./config/keys')
const PORT = process.env.PORT || 5500

mongoose.connect(MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
})

mongoose.connection.on('connected', () => {
    console.log("DB is successfuly connected!")
})
mongoose.connection.on('error', (err) => {
    console.log("err connecting", err)
})


require('./models/user')
require('./models/post')


app.use(express.json())

app.use(require('./routes/auth'))
app.use(require('./routes/post'))
app.use(require('./routes/user'))


if (process.env.NODE_ENV == "production") {
    app.use(express.static('client/build'))
    const path = require('path')
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

app.listen(PORT, () => {
    console.log(`Server running on "https://localhost:${PORT}"`)
})