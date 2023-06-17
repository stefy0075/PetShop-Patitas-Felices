document.addEventListener('DOMContentLoaded', () => {
  const formulario = document.getElementById('formulario-contacto')
  const modal = new bootstrap.Modal('#enviado', {
    show: true
  })
  const nombre = document.getElementById('nombre')
  const apellido = document.getElementById('apellido')
  const telefono = document.getElementById('telefono')
  const animal = document.getElementById('animal')
  const mensaje = document.getElementById('comentario')
  formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    modal.show()
    nombre.value = ''
    apellido.value = ''
    telefono.value = ''
    animal.value = ''
    mensaje.value = ''
  })
})