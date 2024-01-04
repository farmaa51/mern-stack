import express from 'express';
import { port } from './config/config.js';
import connectDB from './config/db.js';
import chalk from 'chalk';
import { registerUser } from './Controller/userController.js';

const app = express();
app.use(express.json());
app.post('/api/register-user',registerUser)

connectDB()
app.listen(port,()=>{
    console.log(`${chalk.green.bold('Server')} listening on port ${port}`);
});''
