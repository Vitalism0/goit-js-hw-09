const feedbackForm = document.querySelector('.feedback-form');
const email = feedbackForm.querySelector('input');
const message = feedbackForm.querySelector('textarea');

const formData = {
  email: '',
  message: '',
};

populateForm();

feedbackForm.addEventListener('input', onFormInput);
feedbackForm.addEventListener('submit', handlerSubmit);

function onFormInput(e) {
  if (e.target.name === 'email') {
    formData.email = e.target.value.trim();
  } else if (e.target.name === 'message') {
    formData.message = e.target.value.trim();
  }
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function populateForm() {
  const parsedObj = JSON.parse(localStorage.getItem('feedback-form-state'));
  console.log(parsedObj);
  if (parsedObj) {
    feedbackForm.elements.email.value = parsedObj.email;
    feedbackForm.elements.message.value = parsedObj.message;
    formData.email = parsedObj.email;
    formData.message = parsedObj.message;
  }
  return;
}
function handlerSubmit(e) {
  e.preventDefault();
  if (
    feedbackForm.elements.email.value &&
    feedbackForm.elements.message.value !== ''
  ) {
    console.log(formData);
    e.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
    formData.email = '';
    formData.message = '';
  } else alert('Fill please all fields');
}
