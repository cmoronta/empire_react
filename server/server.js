const next = require('next')
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const handle = app.getRequestHandler()

app.prepare().then(() => {
    const server = express()

    server.get('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(8080, (err) => {
        if (err) throw err
        console.log("Listening on port 8080")
    })

    server.get('/', (req, res) => {
        app.render(req, res, '/index', req.query.params)
    })
}).catch((ex) => {
    console.error(ex.stack);
    process.exit(1)
})