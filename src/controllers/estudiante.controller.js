import Estudiante from '../models/estudiante'

export const createEstudiante = async (req, res) => {
    const {codigo, apellidos, nombres, ciclo, grupo, dni, estado_practicas} = req.body

    const newEstudiante = new Estudiante({codigo, apellidos, nombres, ciclo, grupo, dni, estado_practicas});

    const estudianteSaved = await newEstudiante.save()

    res.status(201).json(estudianteSaved)
};

export const getEstudiantes = async (req, res) => {

    const estudiante = await Estudiante.find();
    res.json(estudiante)
};

export const getEstudianteById = async (req, res) => {
    const estudiante = await Estudiante.findById(req.params.estudianteId);
    res.status(200).json(estudiante)
    
};

export const updateEstudianteById = async (req, res) => {
    const updateEstudiante = await Estudiante.findByIdAndUpdate(
        req.params.estudianteId, 
        req.body, 
        {
        new: true
        }
    );
    res.status(200).json(updateEstudiante)
    
};

export const deleteEstudianteById = async (req, res) => {
    
    const { estudianteId } = req.params;
    await Estudiante.findByIdAndDelete(estudianteId);
    res.status(204).json()
};