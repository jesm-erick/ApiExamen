import express from 'express'
import morgan from 'morgan'
import estudianteRoutes from './routes/estudiante.routes'

const app = express()

app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) =>{
    res.json({
        author: 'fazt',
        description: "",
        version: "1.0.0"
    })
})

app.use('/estudiante', estudianteRoutes)

export default app;
