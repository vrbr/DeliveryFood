const buttonAuth = document.querySelector('.button-auth');
const modalAuth = document.querySelector('.modal-auth');
const closeAuth = modalAuth.querySelector('.close-auth');
const logInForm = document.getElementById('logInForm');

const buttonOut = document.querySelector('.button-out');
const userName = document.querySelector('.user-name');

const inputLogin = document.getElementById('login');
const inputPassword = document.getElementById('password');

/*открытие/закрытие модального окна*/
buttonAuth.addEventListener('click', () => {
    modalAuth.style.display = 'flex';
});

closeAuth.addEventListener('click', () => {
    modalAuth.style.display = 'none';
});

buttonOut.addEventListener('click', () => {
    logout();
});

/*ф-я для входа*/
const login = (user) => {
    buttonAuth.style.display = 'none';
    buttonOut.style.display = 'flex';
    userName.style.display = 'flex';

    userName.textContent = user.login;
    modalAuth.style.display = 'none';
}

/*ф-я для выхода*/
const logout = () => {
    buttonAuth.style.display = 'flex';
    buttonOut.style.display = 'none';
    userName.style.display = 'none';

    userName.textContent = '';

    /*удалить userа из хранилища при выходе */
    localStorage.removeItem('user');
}

logInForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const user = {
        login: inputLogin.value,
        password: inputPassword.value,
    }

    /*сохранить юзера в браузер*/
    localStorage.setItem('user', JSON.stringify(user)); /*переводим введенные данные в строчку */

    login(user);
});

/*при загрузке выполнить проверку */
if(localStorage.getItem('user')) {
    /*переводим введенные данные в объект и отправляем в ф-ю авторизации */
    login(JSON.parse(localStorage.getItem('user')));
}
