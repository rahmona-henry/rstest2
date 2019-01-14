const express = require('express')
const app = express()
const port= 4000

app.use(express.static('client'))

app.get('/', (req, res) => res.send(index.html))
app.listen(port, () => console.log('Test App 2 listening on port ${port}!'))
