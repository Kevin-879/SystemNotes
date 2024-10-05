import { Router } from 'express';
const router = Router();
import { Estudiante } from '../models/models.js';
 
// Crear un nuevo estudiante
router.post('/', async (req, res) => {
    const { nombre, apellido, email, fechaNacimiento } = req.body;
    const nuevoEstudiante = new Estudiante({ nombre, apellido, email, fechaNacimiento });
    try {
        await nuevoEstudiante.save();
        res.status(201).json(nuevoEstudiante);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});
 
// Obtener todos los estudiantes
router.get('/', async (req, res) => {
    try {
        const estudiantes = await find();
        console.log(estudiantes);
        res.status(200).json(estudiantes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
 
// Otros métodos (GET, PUT, DELETE) se pueden agregar aquí
 
export default router;