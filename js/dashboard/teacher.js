// dashboard/teacher.js
async function renderTeacherDashboard() {
    document.getElementById('main-content').innerHTML = `
        <div class="dashboard-layout animate-fade-in">
            <aside class="sidebar">
                <div class="sidebar-header">
                    <div class="sidebar-title">Teacher Panel</div>
                </div>
                <nav class="sidebar-nav">
                    <a href="#/dashboard" class="sidebar-link active"><i data-lucide="layout-dashboard"></i> Overview</a>
                    <a href="#/dashboard/manage-courses" class="sidebar-link"><i data-lucide="book-open"></i> Manage Courses</a>
                    <a href="#/dashboard/students" class="sidebar-link"><i data-lucide="users"></i> Students</a>
                </nav>
            </aside>
            <div class="dashboard-content">
                <div class="dashboard-header">
                    <div>
                        <h1 class="dashboard-title">Teacher Dashboard</h1>
                        <p class="dashboard-subtitle">Manage your classes and students.</p>
                    </div>
                </div>
            </div>
        </div>
    `;
    lucide.createIcons();
}
