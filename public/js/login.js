const usernameInput = document.querySelector('label input#username');
const passwordInput = document.querySelector('label input#password');
const submit = document.querySelector('input#submit');

const loginValidate = formData => {
  // validate later
  return true;
};
submit.addEventListener('click', e => {
  e.preventDefault();
  const formData = { username: usernameInput.value, password: passwordInput.value };
  if (loginValidate(formData))
    fetch('/login', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      if (res.redirected) window.location.href = res.url;
    });
});
