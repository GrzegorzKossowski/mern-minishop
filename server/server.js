// import express
const express = require('express')
// import dotenv to create evironment variables
const dotenv = require('dotenv')
dotenv.config()
const PORT = process.env.PORT || 5000

// import custom logger with colors
const { logger, status } = require('./utils/logger.utils')

const products = require('./data/products')
const e = require('express')

// create express app
const app = express()
// read JSON from body
app.use(express.json())

// CORS Headers => Required for cross-origin/ cross-server communication
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, PATCH, DELETE, OPTIONS'
    );
    next();
});

// routest
app.get('/', (req, res) => {
    logger("Api works", status.INFO)
    res.send("API works")
})

app.get('/api/products', (req, res) => {
    if (process.env.NODE_ENV !== 'development') {
        const newProd = products.map(p => {
            return { ...p, image: `/mern-minishop${p.image}` }
        })
        res.send(newProd)
    } else {
        res.send(products)
    }
})
app.get('/api/products/:id', (req, res) => {
    const product = products.find((item) => item._id === req.params.id)
    if (process.env.NODE_ENV !== 'development') {
        const newProd = { ...product, image: `/mern-minishop${product.image}` }
        res.send(newProd)
    } else {
        res.send(products)
    }
})


app.listen(PORT, () => {
    logger(`Server started at ${process.env.NODE_ENV} environment on ${PORT} port.`);
})