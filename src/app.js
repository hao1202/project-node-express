const express = require('express');
const dotenv = require('dotenv');
const productRouter = require('./routers/product'); 

dotenv.config();
// create application
const app = express();
// data processing (middleware)
app.use(express.json());

// routers
app.use('/api/products', productRouter);

export default viteNodeApp = app;