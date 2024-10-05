import { Router } from 'express';
const router = Router();
import { Profesor } from '../models/models.js';
 
// Crear un nuevo Profesor
router.post('/', async (req, res) => {
    const {nombre,apellido,email,cursos} = req.body;
    const nuevoProfesor = new Profesor({nombre,apellido,email,cursos});
    try {
        await nuevoProfesor.save();
        res.status(201).json(nuevoProfesor);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});
 
// Obtener todos los Profesors
router.get('/', async (req, res) => {
    try {
        const Profesors = await find();
        res.status(200).json(Profesors);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
 
// Otros métodos (GET, PUT, DELETE) se pueden agregar aquí
 
export default router;