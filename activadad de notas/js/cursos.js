async function cargarCursos() {
    const response = await fetch('http://localhost:5000/api/cursos');
    const cursos = await response.json();
    const tableBody = document.querySelector('#cursos-table tbody');
    tableBody.innerHTML = '';

    cursos.forEach(curso => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${curso.nombre}</td>
            <td>${curso.descripcion}</td>
            <td>${curso.creditos}</td>
        `;
        tableBody.appendChild(row);
    });
}

document.getElementById('curso-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const nuevoCurso = {
        nombre: document.getElementById('nombre').value,
        descripcion: document.getElementById('descripcion').value,
        creditos: document.getElementById('creditos').value,
    };
    await fetch('http://localhost:5000/api/cursos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(nuevoCurso)
    });
    document.getElementById('curso-form').reset();
    document.getElementById('form-container').style.display = 'none';
    cargarCursos();
});

function mostrarFormulario() {
    document.getElementById('form-container').style.display = 'block';
}

cargarCursos();