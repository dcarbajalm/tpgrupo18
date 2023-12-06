const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', validarFormulario);

function validarFormulario(event) {
    event.preventDefault();

    const usuario = document.getElementById('usuario');
    const password = document.getElementById('password');

    // Validar usuario
    if (!validarUsuario(usuario.value)) {
        alert('Ingrese un usuario correcto. Para la DEMO, usar un formato de correo válido');
        return;
    }

    // Validar contraseña
    if (!validarContrasena(password.value)) {
        alert('Ingrese una constraseña correcta. 8 caracteres mínimo, al menos una letra minúscula, una letra mayúscula y contiene números');
        return;
    }

    // Si todas las validaciones pasan, enviar el formulario
    alert('Logueo exitoso!');
    window.open("https://tp2-grupo18front.netlify.app/admin/index.html", "_self");
}

function validarUsuario(usuario) {
    // Revisar si el usuario es correcto
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return emailRegex.test(usuario);
}

function validarContrasena(password) {
    // Revisar estas reglas si cumplen los requerimientos de contraseña
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);

    return (
        password.length >= minLength &&
        hasUpperCase &&
        hasLowerCase &&
        hasNumber
    );
}
