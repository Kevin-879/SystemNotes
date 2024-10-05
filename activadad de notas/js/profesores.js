async function cargarProfesores() {
    const response = await fetch('http://localhost:5000/api/profesores');
    const profesores = await response.json();
    const tableBody = document.querySelector('#profesores-table tbody');
    tableBody.innerHTML = '';

    profesores.forEach(profesor => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${profesor.nombre}</td>
            <td>${profesor.apellido}</td>
            <td>${profesor.email}</td>
        `;
        tableBody.appendChild(row);
    });
}

document.getElementById('profesor-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const nuevoProfesor = {
        nombre: document.getElementById('nombre').value,
        apellido: document.getElementById('apellido').value,
        email: document.getElementById('email').value,
    };
    await fetch('http://localhost:5000/api/profesores', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(nuevoProfesor)
    });
    document.getElementById('profesor-form').reset();
    document.getElementById('form-container').style.display = 'none';
    cargarProfesores();
});

function mostrarFormulario() {
    document.getElementById('form-container').style.display = 'block';


}

cargarProfesores();