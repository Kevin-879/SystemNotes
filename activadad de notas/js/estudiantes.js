async function cargarEstudiantes() {
    const response = await fetch('http://localhost:5000/api/estudiantes');
    const estudiantes = await response.json();
    const tableBody = document.querySelector('#estudiantes-table tbody');
    tableBody.innerHTML = '';

    estudiantes.forEach(estudiante => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${estudiante.nombre}</td>
            <td>${estudiante.apellido}</td>
            <td>${estudiante.email}</td>
            <td>${new Date(estudiante.fechaNacimiento).toLocaleDateString()}</td>
        `;
        tableBody.appendChild(row);
    });
}

document.getElementById('estudiante-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const nuevoEstudiante = {
        nombre: document.getElementById('nombre').value,
        apellido: document.getElementById('apellido').value,
        email: document.getElementById('email').value,
        fechaNacimiento: document.getElementById('fechaNacimiento').value,
    };
    await fetch('http://localhost:5000/api/estudiantes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(nuevoEstudiante)
    });
    document.getElementById('estudiante-form').reset();
    document.getElementById('form-container').style.display = 'none';
    cargarEstudiantes();
});

function mostrarFormulario() {
    document.getElementById('form-container').style.display = 'block';
}

cargarEstudiantes();