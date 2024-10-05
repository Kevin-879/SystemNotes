import express from 'express';
import { connect } from 'mongoose';
import json from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(json());

// Conexión a MongoDB
connect('mongodb+srv://ambidata2024:ambidata2024**@ambidata.vn0dlbx.mongodb.net/Sistema_de_notas', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Conectado a MongoDB');
}).catch(err => {
    console.error('Error de conexión a MongoDB:', err);
});

// Rutas
import estudiantesRoutes from './routes/estudiantes.js';
import cursosRoutes from './routes/cursos.js';
import profesoresRoutes from './routes/profesores.js';
import notasRoutes from './routes/notas.js';

app.use('/api/estudiantes', estudiantesRoutes);
app.use('/api/cursos', cursosRoutes);
app.use('/api/profesores', profesoresRoutes);
app.use('/api/notas', notasRoutes);

// Inicio del servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});