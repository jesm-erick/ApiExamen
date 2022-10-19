import { Schema, model } from 'mongoose'

const estudianteSchema = new Schema({
    codigo: String,
    apellidos: String,
    nombres: String,
    ciclo: String,
    grupo: String,
    dni: String,
    estado_practicas: String,

}, {
    timestamps: true,
    versionKey: false,
    }
);

export default model('estudiante', estudianteSchema)