const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const formStateKey = 'feedback-form-state';

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', saveFormState);

function onFormSubmit(event) {
  event.preventDefault();
  if (emailInput.value.trim() && messageInput.value.trim()) {
    const formData = {
      email: emailInput.value,
      message: messageInput.value,
    };
    console.log(formData);
    localStorage.removeItem(formStateKey);
    event.currentTarget.reset();
  }
}

function saveFormState() {
  const formState = {
    email: emailInput.value.trim(),
    message: messageInput.value.trim(),
  };
  localStorage.setItem(formStateKey, JSON.stringify(formState));
}

function restoreFormState() {
  const savedFormState = JSON.parse(localStorage.getItem(formStateKey));
  if (savedFormState) {
    emailInput.value = savedFormState.email;
    messageInput.value = savedFormState.message;
  }
}

restoreFormState();
