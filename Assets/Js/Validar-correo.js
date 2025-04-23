document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('MiFormulario');
    const correoInput = document.getElementById('correo');
  
    formulario.addEventListener('submit', function (e) {
      const correo = correoInput.value;
      const esValido = validarCorreo(correo);
  
      if (!esValido) {
        e.preventDefault();
        alert('Por favor, introduce un correo válido.');
      }
    });
  });
  
  function validarCorreo(correo) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
  }
  
  
  