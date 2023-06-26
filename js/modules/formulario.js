export default function initFormulario() {
  const temForm = document.forms.length;

  if (temForm) {
    const form = document.querySelector('#contato');

    function handleChange(event) {
      const target = event.target;

      if (!target.checkValidity()) {
        target.classList.add('invalido');
        target.nextElementSibling.innerText = target.validationMessage;
      } else {
        target.classList.remove('invalido');
        target.nextElementSibling.innerText = '';
      }
    }

    function handleForm(event) {
      const select = form.querySelector('#meio_chegada');

      if (select.value === '') {
        event.preventDefault();
        select.classList.add('invalido');
        select.nextElementSibling.innerText = 'Selecione uma opção válida';
      }
    }

    form.addEventListener('change', handleChange);
    form.addEventListener('submit', handleForm);
  }
}
