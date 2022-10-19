import mongoose from 'mongoose'

mongoose.connect("mongodb://localhost/api-db")


    .then(db => console.log('base de datos conectando'))
    .catch(error => console.log(error))