const usernameInput = document.querySelector('label input#username');
const passwordInput = document.querySelector('label input#password');
const confirmPasswordInput = document.querySelector('label input#confirmPassword');
const emailInput = document.querySelector('label input#email');
const submit = document.querySelector('input#submit');

const signupValidate = formData => {
  // validate later
  return true;
};

submit.addEventListener('click', e => {
  e.preventDefault();
  const formData = {
    username: usernameInput.value,
    password: passwordInput.value,
    confirmPassword: confirmPasswordInput.value,
    email: emailInput.value
  };
  if (signupValidate(formData))
    fetch('/signup', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      if (res.redirected) window.location.href = res.url;
    });
});
