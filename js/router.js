// router.js
class Router {
    constructor() {
        this.routes = {};
        this.currentRoute = null;
        this.init();
    }

    init() {
        window.addEventListener('hashchange', () => this.handleRoute());
        window.addEventListener('load', () => this.handleRoute());
    }

    addRoute(path, handler, requiresAuth = false, allowedRoles = []) {
        this.routes[path] = { handler, requiresAuth, allowedRoles };
    }

    async handleRoute() {
        let path = window.location.hash.slice(1) || '/';
        // Handle query params loosely
        const queryIndex = path.indexOf('?');
        if (queryIndex !== -1) {
            path = path.slice(0, queryIndex);
        }

        const route = this.routes[path] || this.routes['/404'] || { handler: () => this.navigate('/') };

        if (route.requiresAuth && !auth.isAuthenticated()) {
            this.navigate('/login');
            return;
        }

        if (route.allowedRoles && route.allowedRoles.length > 0 && !route.allowedRoles.includes(auth.getRole())) {
            this.navigate('/'); // unauthorized
            return;
        }

        document.getElementById('loading-screen').classList.remove('hidden');
        
        try {
            await route.handler();
        } catch (error) {
            console.error('Route error:', error);
            showToast('Error loading page', 'error');
        } finally {
            setTimeout(() => {
                document.getElementById('loading-screen').classList.add('hidden');
            }, 300);
        }

        this.updateNav(path);
    }

    navigate(path) {
        window.location.hash = path;
    }

    updateNav(path) {
        document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${path}`) {
                link.classList.add('active');
            }
        });

        // Hide footer on dashboard
        if (path.startsWith('/dashboard')) {
            document.body.classList.add('dashboard-active');
        } else {
            document.body.classList.remove('dashboard-active');
        }
    }
}

const router = new Router();
