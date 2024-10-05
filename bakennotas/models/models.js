import mongoose from "mongoose";
// Estudiante
const EstudianteSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    fechaNacimiento: { type: Date, required: true },
    cursos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Curso' }]
});
 
// Curso
const CursoSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    creditos: { type: Number, required: true },
    profesores: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Profesor' }],
    estudiantes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Estudiante' }]
});
 
// Profesor
const ProfesorSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    cursos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Curso' }]
});
 
// Nota
const NotaSchema = new mongoose.Schema({
    estudiante: { type: mongoose.Schema.Types.ObjectId, ref: 'Estudiante', required: true },
    curso: { type: mongoose.Schema.Types.ObjectId, ref: 'Curso', required: true },
    valor: { type: Number, required: true },
    fecha: { type: Date, default: Date.now }
});
 
// Modelos
export const Estudiante = mongoose.model('estudiantes', EstudianteSchema);
export const Curso = mongoose.model('cursos', CursoSchema);
export const Profesor = mongoose.model('profesores', ProfesorSchema);
export const Nota = mongoose.model('notas', NotaSchema);