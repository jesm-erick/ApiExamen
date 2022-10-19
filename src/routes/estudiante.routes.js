import {Router} from 'express'
const router = Router()

import * as estudianteController from '../controllers/estudiante.controller'

router.post('/', estudianteController.createEstudiante)

router.get('/', estudianteController.getEstudiantes)

router.get('/:estudianteId', estudianteController.getEstudianteById)

router.put('/:estudianteId', estudianteController.updateEstudianteById)

router.delete('/:estudianteId', estudianteController.deleteEstudianteById)


export default router;