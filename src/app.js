import express from 'express';
import dotenv from 'dotenv';
import productRouter from './routers/product.js';
import handleMongoDB from './config/db.js';

dotenv.config();

// Create application
const app = express();

// Data processing (middleware)
app.use(express.json());

// Connect to database
handleMongoDB.connectDB(process.env.MONGODB_CONNECT_URL);

// Routes
app.use('/api/products', productRouter);

// Export viteNodeApp
export const viteNodeApp = app; // 🔹 Export đúng tên