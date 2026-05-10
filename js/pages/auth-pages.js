// pages/auth-pages.js

async function renderLogin() {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `
        <div class="container" style="display: flex; justify-content: center; align-items: center; min-height: 80vh;">
            <div class="card" style="width: 100%; max-width: 400px; padding: var(--space-8);">
                <div style="text-align: center; margin-bottom: var(--space-6);">
                    <div class="logo-icon" style="margin: 0 auto var(--space-4);">言</div>
                    <h2>Welcome Back</h2>
                    <p>Log in to continue your learning journey.</p>
                </div>
                
                <form id="login-form">
                    <div class="form-group">
                        <label class="form-label">Email</label>
                        <input type="email" id="login-email" class="form-input" required placeholder="Enter your email">
                    </div>
                    <div class="form-group">
                        <label class="form-label">Password</label>
                        <input type="password" id="login-password" class="form-input" required placeholder="Enter your password">
                    </div>
                    <button type="submit" class="btn btn-primary btn-block btn-lg" id="login-btn">Log In</button>
                </form>
                
                <div style="text-align: center; margin-top: var(--space-6);">
                    <p>Don't have an account? <a href="#/register">Sign Up</a></p>
                </div>
            </div>
        </div>
    `;

    document.getElementById('login-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        const btn = document.getElementById('login-btn');
        
        try {
            btn.classList.add('btn-loading');
            await auth.login(email, password);
            showToast('Login successful!', 'success');
            router.navigate('/dashboard');
        } catch (error) {
            showToast(error.message, 'error');
        } finally {
            btn.classList.remove('btn-loading');
        }
    });
}

async function renderRegister() {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `
        <div class="container" style="display: flex; justify-content: center; align-items: center; min-height: 80vh;">
            <div class="card" style="width: 100%; max-width: 400px; padding: var(--space-8);">
                <div style="text-align: center; margin-bottom: var(--space-6);">
                    <div class="logo-icon" style="margin: 0 auto var(--space-4);">言</div>
                    <h2>Create Account</h2>
                    <p>Start mastering Japanese and Chinese today.</p>
                </div>
                
                <form id="register-form">
                    <div class="form-group">
                        <label class="form-label">Email</label>
                        <input type="email" id="reg-email" class="form-input" required placeholder="Enter your email">
                    </div>
                    <div class="form-group">
                        <label class="form-label">Password</label>
                        <input type="password" id="reg-password" class="form-input" required placeholder="Create a password">
                    </div>
                    <button type="submit" class="btn btn-primary btn-block btn-lg" id="reg-btn">Sign Up</button>
                </form>
                
                <div style="text-align: center; margin-top: var(--space-6);">
                    <p>Already have an account? <a href="#/login">Log In</a></p>
                </div>
            </div>
        </div>
    `;

    document.getElementById('register-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('reg-email').value;
        const password = document.getElementById('reg-password').value;
        const btn = document.getElementById('reg-btn');
        
        try {
            btn.classList.add('btn-loading');
            await auth.register(email, password, 'student');
            showToast('Registration successful!', 'success');
            router.navigate('/dashboard');
        } catch (error) {
            showToast(error.message, 'error');
        } finally {
            btn.classList.remove('btn-loading');
        }
    });
}
