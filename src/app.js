import express from 'express';
import morgan from 'morgan';

//Routes
import usersRoutes from './routes/users.routes.js';


const app = express();

// Settings
app.set('port', 4000);

// Middlewares
// morgan is a middleware that shows in the console the details about the request that i am doing
app.use(morgan('dev'));


// Routes
app.use("/api/users", usersRoutes);

export default app;