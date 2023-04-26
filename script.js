const buttonEntrar = document.getElementById('button-entrar');

const verificarButtonEntrar = () => {
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  buttonEntrar.addEventListener('click', () => {
    if (email.value === 'tryber@teste.com' && password.value === '123456') {
      alert('Olá, Tryber!');
    } else if (email.value !== 'tryber@teste.com' && password.value !== '123456') {
      alert('Email ou senha inválidos.');
    }
  });
};

const desativarEnviar = () => {
  const desativaEnviar = document.getElementById('submit-btn');
  desativaEnviar.disabled = true;
};

const validarCheckbox = () => {
  const checkbox = document.getElementById('agreement');
  checkbox.addEventListener('click', () => {
    if (checkbox.checked) {
      document.getElementById('submit-btn').disabled = false;
    } else {
      document.getElementById('submit-btn').disabled = true;
    }
  });
};

desativarEnviar();
validarCheckbox();
verificarButtonEntrar();
