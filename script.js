// Validación de correo electrónico
document.getElementById('registroForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const correo = document.getElementById('correo').value;
  const mensaje = document.getElementById('mensajeCorreo');
  const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if (regex.test(correo)) {
    mensaje.textContent = "Correo válido ✅";
    mensaje.style.color = "green";
  } else {
    mensaje.textContent = "Correo inválido ❌";
    mensaje.style.color = "red";
  }
});

// Normalización de texto para búsqueda
function normalizarTexto(texto) {
  return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}

function buscarLibro() {
  const input = document.getElementById("busqueda").value;
  const resultado = document.getElementById("resultadoBusqueda");
  const libros = ["cien años de soledad", "el señor de los anillos", "la ciudad y los perros"];
  const normalizado = normalizarTexto(input);

  const encontrado = libros.find(libro => normalizarTexto(libro).includes(normalizado));

  if (encontrado) {
    resultado.textContent = `Libro encontrado: ${encontrado}`;
  } else {
    resultado.textContent = "No se encontró ningún libro.";
  }
}

// Simulación de préstamo de libro
let libroDisponible = true;

function prestarLibro() {
  const estado = document.getElementById("estadoLibro");
  if (libroDisponible) {
    libroDisponible = false;
    estado.textContent = "Libro prestado ✅";
  } else {
    estado.textContent = "El libro no está disponible ❌";
  }
}

function devolverLibro() {
  libroDisponible = true;
  document.getElementById("estadoLibro").textContent = "Libro devuelto y disponible 🔄";
}
