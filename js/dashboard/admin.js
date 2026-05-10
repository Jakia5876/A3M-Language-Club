// dashboard/admin.js
async function renderAdminDashboard() {
    document.getElementById('main-content').innerHTML = `
        <div class="dashboard-layout animate-fade-in">
            <aside class="sidebar">
                <div class="sidebar-header">
                    <div class="sidebar-title">Admin Panel</div>
                </div>
                <nav class="sidebar-nav">
                    <a href="#/dashboard" class="sidebar-link active"><i data-lucide="layout-dashboard"></i> Overview</a>
                    <a href="#/dashboard/users" class="sidebar-link"><i data-lucide="users"></i> User Management</a>
                    <a href="#/dashboard/platform" class="sidebar-link"><i data-lucide="settings"></i> Platform Settings</a>
                </nav>
            </aside>
            <div class="dashboard-content">
                <div class="dashboard-header">
                    <div>
                        <h1 class="dashboard-title">Super Admin Dashboard</h1>
                        <p class="dashboard-subtitle">Full platform control.</p>
                    </div>
                </div>
            </div>
        </div>
    `;
    lucide.createIcons();
}
