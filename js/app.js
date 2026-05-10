// pages/courses.js
async function renderCourses() {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `
        <div class="container section">
            <div class="section-header">
                <h2>Our Courses</h2>
                <p>Browse our extensive catalog of Japanese and Chinese courses.</p>
            </div>
            <div class="grid-3 gap-6">
                <!-- Example Course Card -->
                <div class="card">
                    <img src="https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" class="card-img" alt="Course">
                    <div class="card-body">
                        <div class="badge badge-japanese mb-2">Japanese</div>
                        <h3 class="mb-2">JLPT N5 Complete Preparation</h3>
                        <p class="mb-4">Master the basics of Japanese grammar, vocabulary, and kanji for the JLPT N5 exam.</p>
                        <button class="btn btn-primary btn-block">View Course</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// pages/pricing.js
async function renderPricing() {
    document.getElementById('main-content').innerHTML = `
        <div class="container section">
            <div class="section-header">
                <h2>Simple, Transparent Pricing</h2>
                <p>Start learning today with our flexible plans.</p>
            </div>
        </div>
    `;
}

// pages/about.js
async function renderAbout() {
    document.getElementById('main-content').innerHTML = `
        <div class="container section">
            <div class="section-header">
                <h2>About A3M Language Club</h2>
                <p>We are dedicated to helping you master Japanese and Chinese.</p>
            </div>
        </div>
    `;
}

// pages/contact.js
async function renderContact() {
    document.getElementById('main-content').innerHTML = `
        <div class="container section">
            <div class="section-header">
                <h2>Contact Us</h2>
                <p>Have questions? We're here to help.</p>
            </div>
        </div>
    `;
}

// pages/blog.js
async function renderBlog() {
    document.getElementById('main-content').innerHTML = `
        <div class="container section">
            <div class="section-header">
                <h2>Our Blog</h2>
                <p>Tips, guides, and cultural insights.</p>
            </div>
        </div>
    `;
}

// dashboard/admin.js
async function renderAdminDashboard() {
    document.getElementById('main-content').innerHTML = `
        <div class="dashboard-layout">
            <div class="dashboard-content">
                <h1>Admin Dashboard</h1>
                <p>Welcome, Admin.</p>
            </div>
        </div>
    `;
}

// dashboard/teacher.js
async function renderTeacherDashboard() {
    document.getElementById('main-content').innerHTML = `
        <div class="dashboard-layout">
            <div class="dashboard-content">
                <h1>Teacher Dashboard</h1>
                <p>Welcome, Teacher.</p>
            </div>
        </div>
    `;
}

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
