document.addEventListener('DOMContentLoaded', (event) => {
    const registerBtn = document.getElementById('register-btn');
    const loginBtn = document.getElementById('login-btn');
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    const closeBtn = document.getElementsByClassName('close')[0];

    function openModal(content) {
        modalBody.innerHTML = content;
        modal.style.display = "block";
    }

    registerBtn.addEventListener('click', () => {
        const registerForm = `
            <h2>Register</h2>
            <form id="register-form">
                <label for="username">Username:</label>
                <input type="text" id="username" required><br><br>
                <label for="email">Email:</label>
                <input type="email" id="email" required><br><br>
                <label for="password">Password:</label>
                <input type="password" id="password" required><br><br>
                <button type="submit">Register</button>
            </form>
        `;
        openModal(registerForm);
    });

    loginBtn.addEventListener('click', () => {
        const loginForm = `
            <h2>Login</h2>
            <form id="login-form">
                <label for="login-email">Email:</label>
                <input type="email" id="login-email" required><br><br>
                <label for="login-password">Password:</label>
                <input type="password" id="login-password" required><br><br>
                <button type="submit">Login</button>
            </form>
        `;
        openModal(loginForm);
    });

    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    document.addEventListener('submit', (e) => {
        e.preventDefault();
        if (e.target.id === 'register-form') {
            alert('Registration successful! (This is a mock registration)');
        } else if (e.target.id === 'login-form') {
            alert('Login successful! (This is a mock login)');
        }
        modal.style.display = "none";
    });
});
