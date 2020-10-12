export const validarRegForm = (fields, showAlert) => {
  const { name, mail, password, confirm } = fields;

  // Validate blank fields
  if (
    name.trim() === '' ||
    mail.trim() === '' ||
    password.trim() === '' ||
    confirm.trim() === '' 
  ) {
    showAlert('Todos los campos son obligatorios');
    return;
  }

  // Validate mail
  // eslint-disable-next-line no-useless-escape
  if (!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(mail)) {
    showAlert('Debes poner un mail válido');
    return;
  }

  // Min 6 characters
  if (password.length < 6) {
    showAlert('La contraseña debe ser de mínimo 6 caracteres');
    return;
  }

  // Validate that passwords matchs
  if ( password !== confirm) {
    showAlert('Las contraseñas no coinciden');
    return;
  }
}

export const validateLoginForm = (fields, showAlert) => {
  const { mail, password } = fields;

  // Validate blank fields
  if (mail.trim() === '' || password.trim() === '') {
    showAlert('Todos los campos son obligatorios');
    return;
  }

  // Validate mail
  // eslint-disable-next-line
  if (!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(mail)) {
    showAlert('Debes poner un mail válido');
    return;
  }
}