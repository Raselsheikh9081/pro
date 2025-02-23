const fornmStart = document.querySelector('.form-start');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click', () => {
  fornmStart.classList.add('active');
});

loginBtn.addEventListener('click', () => {
    fornmStart.classList.remove('active');
  });