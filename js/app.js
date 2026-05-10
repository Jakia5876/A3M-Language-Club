// app.js - Main Entry
document.addEventListener('DOMContentLoaded', () => {
    // Show app after a brief loading screen
    setTimeout(() => {
        document.getElementById('loading-screen').classList.add('hidden');
        document.getElementById('app').style.display = 'block';
    }, 1500);

    // Register Routes
    router.addRoute('/', renderHome);
    router.addRoute('/courses', renderCourses);
    router.addRoute('/pricing', renderPricing);
    addRouteIfDefined('/about', 'renderAbout');
    addRouteIfDefined('/contact', 'renderContact');
    addRouteIfDefined('/blog', 'renderBlog');
    router.addRoute('/login', renderLogin);
    router.addRoute('/register', renderRegister);

    // Dashboard routes based on roles
    router.addRoute('/dashboard', async () => {
        const role = auth.getRole();
        if (role === 'admin') await renderAdminDashboard();
        else if (role === 'teacher') await renderTeacherDashboard();
        else await renderStudentDashboard();
    }, true);

    // Initialize Auth Listener
    auth.onAuthChange((user, role) => {
        const authButtons = document.getElementById('auth-buttons');
        const userMenu = document.getElementById('user-menu');
        
        if (user) {
            authButtons.style.display = 'none';
            userMenu.style.display = 'block';
            document.getElementById('dropdown-user-info').innerHTML = `
                <span class="dropdown-name">${user.email.split('@')[0]}</span>
                <span class="dropdown-role">${role || 'Student'}</span>
            `;
            document.getElementById('nav-avatar').innerHTML = `<span>${user.email.charAt(0).toUpperCase()}</span>`;
        } else {
            authButtons.style.display = 'flex';
            userMenu.style.display = 'none';
        }
    });

    // Start Router
    router.handleRoute();
});

function addRouteIfDefined(path, funcName) {
    if (typeof window[funcName] === 'function') {
        router.addRoute(path, window[funcName]);
    } else {
        router.addRoute(path, () => {
            document.getElementById('main-content').innerHTML = `
                <div class="container section text-center">
                    <h2>Coming Soon</h2>
                </div>
            `;
        });
    }
}
