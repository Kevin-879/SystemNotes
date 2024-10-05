import { Router } from 'express';
const router = Router();
import { Curso } from '../models/models.js';
 
// Crear un nuevo Curso
router.post('/', async (req, res) => {
    const { nombre, descripcion, creditos, profesores, Estudiantes } = req.body;
    const nuevoCurso = new Curso({ nombre, descripcion, creditos, profesores, Estudiantes } );
    try {
        await nuevoCurso.save();
        res.status(201).json(nuevoCurso);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});
 
// Obtener todos los Cursos
router.get('/', async (req, res) => {
    try {
        const Cursos = await find();
        res.status(200).json(Cursos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
 
// Otros métodos (GET, PUT, DELETE) se pueden agregar aquí
 
export default router;
