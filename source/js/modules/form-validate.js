const form = document.querySelector('[data-form]');
const nameInput = form.querySelector('[data-form-name]');
const telInput = form.querySelector('[data-form-tel]');
const labelName = form.querySelector('[data-form-label="name"');
const labelTel = form.querySelector('[data-form-label="tel"');

const expressionName = /^[a-zA-Zа-яёА-ЯЁ]+( [a-zA-Zа-яёА-ЯЁ]+)*$/;
const expressionTel = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

nameInput.removeAttribute('required');
telInput.removeAttribute('required');

const createMessage = (message) => {
  if (form.querySelector('.client-contacts__message') === null) {
    const element = document.createElement('div');
    element.className = 'client-contacts__message';
    element.innerHTML = message;
    form.append(element);
    setTimeout(() => { element.remove() }, 3000);
  }
};

const createErrorMessage = (input, expression, errorMessage, label) => {
  let message = '';
  if (input.value === '') {
    message = 'Заполните это поле.';
  } else if (!expression.test(input.value)) {
    message = errorMessage;
  }
  if (label.querySelector('.client-contacts__error-message') === null) {
    const element = document.createElement('p');
    element.className = 'client-contacts__error-message';
    element.innerHTML = message;
    label.append(element);
  }
};

const removeErrorMessage = (label) => {
  if (label.querySelector('.client-contacts__error-message') !== null) {
    const message = label.querySelector('.client-contacts__error-message');
    message.remove();
  }
};

const validateItem = (item, expression, message, label) => {
  let found = true;
  if (item.value === '' ||
    !expression.test(item.value)) {
    label.classList.add('is-invalid');
    createErrorMessage(item, expression, message, label);
    found = false;
    return found;
  }
  label.classList.remove('is-invalid');
  removeErrorMessage(label);
  return found;
};

const validateName = () => {
  const found = validateItem(nameInput, expressionName, 'Недопустимые символы.', labelName);
  return found;
};

//const nameArray = nameInput.value.split(' ');
//const filteredName = nameArray.filter((element) => element !== '');

const validateTel = () => {
  const found = validateItem(telInput, expressionTel, 'Неверный номер.', labelTel);
  return found;
};

const sendData = (url, method = 'post', body = null) =>
  fetch(url, {method, body})
      .then((response) => {
        if (!response.ok) {
          throw new Error();
        }
      })
      .catch(() => {
        throw new Error('server error');
      });

const sendForm = (async (data) => {
  try {
    await sendData('https://echo.htmlacademy.ru', 'post', data);
    createMessage('Ваши данные получены.');
  } catch {
    createMessage('Ошибка сервера.');
  }
});

const setFormValidate = () => {
  if (form === null) {
    return;
  }
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    validateName();
    validateTel();
    if (validateName() && validateTel()) {
      const formData = new FormData(evt.target);
      sendForm(formData);
    }
  });
}

export {setFormValidate};
