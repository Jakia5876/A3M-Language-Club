// dashboard/student.js

async function renderStudentDashboard() {
    const mainContent = document.getElementById('main-content');
    
    // Check if user is logged in
    if (!auth.isAuthenticated()) {
        router.navigate('/login');
        return;
    }

    const email = auth.user.email;

    mainContent.innerHTML = `
        <div class="dashboard-layout animate-fade-in">
            <!-- Sidebar -->
            <aside class="sidebar">
                <div class="sidebar-header">
                    <div class="sidebar-title">Student Panel</div>
                </div>
                <nav class="sidebar-nav">
                    <a href="#/dashboard" class="sidebar-link active">
                        <i data-lucide="layout-dashboard"></i> Overview
                    </a>
                    <a href="#/dashboard/courses" class="sidebar-link">
                        <i data-lucide="book-open"></i> My Courses
                    </a>
                    <a href="#/dashboard/progress" class="sidebar-link">
                        <i data-lucide="trending-up"></i> Progress
                    </a>
                    <a href="#/dashboard/certificates" class="sidebar-link">
                        <i data-lucide="award"></i> Certificates
                    </a>
                    <a href="#/dashboard/settings" class="sidebar-link">
                        <i data-lucide="settings"></i> Settings
                    </a>
                </nav>
            </aside>

            <!-- Dashboard Content -->
            <div class="dashboard-content">
                <div class="dashboard-header">
                    <div>
                        <h1 class="dashboard-title">Welcome back!</h1>
                        <p class="dashboard-subtitle">${email}</p>
                    </div>
                    <button class="btn btn-primary" onclick="router.navigate('/courses')">
                        <i data-lucide="plus"></i> Browse Courses
                    </button>
                </div>

                <div class="dashboard-stats">
                    <div class="stat-card">
                        <div class="stat-icon"><i data-lucide="book"></i></div>
                        <div class="stat-info">
                            <div class="stat-value">2</div>
                            <div class="stat-label">Active Courses</div>
                        </div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-icon"><i data-lucide="award"></i></div>
                        <div class="stat-info">
                            <div class="stat-value">1</div>
                            <div class="stat-label">Certificates</div>
                        </div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-icon"><i data-lucide="flame"></i></div>
                        <div class="stat-info">
                            <div class="stat-value">7</div>
                            <div class="stat-label">Day Streak</div>
                        </div>
                    </div>
                </div>

                <div class="dashboard-grid">
                    <div class="dashboard-panel">
                        <div class="panel-header">
                            <h2 class="panel-title">Continue Learning</h2>
                            <a href="#/dashboard/courses" class="btn btn-ghost btn-sm">View All</a>
                        </div>
                        <div class="course-list">
                            <div class="course-item">
                                <img src="https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Course" class="course-thumb">
                                <div class="course-details">
                                    <div class="course-title">JLPT N5 Complete Preparation</div>
                                    <div class="course-progress">
                                        <div class="progress-bar"><div class="progress-fill" style="width: 45%;"></div></div>
                                        <span class="course-progress-text">45%</span>
                                    </div>
                                </div>
                                <button class="btn btn-primary btn-sm">Resume</button>
                            </div>
                            <div class="course-item">
                                <img src="https://images.unsplash.com/photo-1545424436-ce47fa47f12e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Course" class="course-thumb">
                                <div class="course-details">
                                    <div class="course-title">HSK 2 Vocabulary Builder</div>
                                    <div class="course-progress">
                                        <div class="progress-bar"><div class="progress-fill" style="width: 15%;"></div></div>
                                        <span class="course-progress-text">15%</span>
                                    </div>
                                </div>
                                <button class="btn btn-primary btn-sm">Resume</button>
                            </div>
                        </div>
                    </div>

                    <div class="dashboard-panel">
                        <div class="panel-header">
                            <h2 class="panel-title">Recent Activity</h2>
                        </div>
                        <div class="activity-list">
                            <div class="activity-item">
                                <div class="activity-icon"><i data-lucide="check-circle"></i></div>
                                <div class="activity-content">
                                    <div class="activity-text">Completed Lesson 4: Hiragana</div>
                                    <div class="activity-time">2 hours ago</div>
                                </div>
                            </div>
                            <div class="activity-item">
                                <div class="activity-icon"><i data-lucide="video"></i></div>
                                <div class="activity-content">
                                    <div class="activity-text">Watched "Introduction to Kanji"</div>
                                    <div class="activity-time">Yesterday</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    lucide.createIcons();
}
