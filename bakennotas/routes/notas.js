import { Router } from 'express';
const router = Router();
import { Nota } from '../models/models.js';
 
// Crear un nuevo Nota
router.post('/', async (req, res) => {
    const {estudiante,curso,valor,fecha} = req.body;
    const nuevoNota = new Nota( {estudiante,curso,valor,fecha});
    try {
        await nuevoNota.save();
        res.status(201).json(nuevoNota);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});
 
// Obtener todos los Notas
router.get('/', async (req, res) => {
    try {
        const Notas = await find();
        res.status(200).json(Notas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
 
// Otros métodos (GET, PUT, DELETE) se pueden agregar aquí
 
export default router;