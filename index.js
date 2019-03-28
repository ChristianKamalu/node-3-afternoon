const express = require('express');
require('dotenv').config();
const massive = require('massive');
const controller = require('./controllers/products_controller')

const app = express();

const {SERVER_PORT, CONNECTION_STRING} = process.env;

app.use(express.json());

massive(CONNECTION_STRING).then((db) => {
    app.set('db', db)
    console.log('DB is setup')
    console.log(db.listTables())
}).catch(err => console.log(err))

app.get('/api/products/:id', controller.getOne)
app.get('/api/products', controller.getAll)
app.post('/api/products', controller.create)
app.put('/api/products/:id', controller.update)
app.delete('/api/products/:id', controller.delete)

app.listen(SERVER_PORT, () => console.log('listening on', SERVER_PORT))