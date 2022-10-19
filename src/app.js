import express from 'express'
import morgan from 'morgan'
import estudianteRoutes from './routes/estudiante.routes'
import routerUser from "./routes/user.routes.js";

const app = express()

app.use(morgan('dev'));
app.use(express.json());


app.use(routerUser);

app.use('/api/estudiante', estudianteRoutes);


export default app;
