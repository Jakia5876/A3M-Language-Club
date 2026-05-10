// pages/home.js

async function renderHome() {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `
        <section class="hero">
            <div class="hero-bg"></div>
            <div class="container hero-container">
                <div class="hero-content animate-slide-up">
                    <div class="hero-badge">
                        <span>New</span> JLPT N5 Preparation Course Available
                    </div>
                    <h1 class="hero-title">Master <span class="text-gradient-japanese">Japanese</span> & <span class="text-gradient-chinese">Chinese</span> Faster</h1>
                    <p class="hero-desc">The premium online language learning platform. Expert instructors, interactive lessons, and AI-powered tools to help you achieve fluency.</p>
                    <div class="hero-actions">
                        <a href="#/courses" class="btn btn-primary btn-xl">Browse Courses</a>
                        <a href="#/register" class="btn btn-outline btn-xl">Start Free Trial</a>
                    </div>
                </div>
                <div class="hero-visual animate-slide-up stagger-2">
                    <div class="hero-image-wrapper">
                        <img src="https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1784&q=80" alt="Japanese Temple">
                    </div>
                    <div class="hero-floating-card card-1">
                        <div class="avatar avatar-md"><i data-lucide="check"></i></div>
                        <div>
                            <div style="font-weight: bold; font-size: 14px;">JLPT N4 Passed!</div>
                            <div style="font-size: 12px; color: var(--text-secondary);">Sarah M.</div>
                        </div>
                    </div>
                    <div class="hero-floating-card card-2">
                        <div class="avatar avatar-md" style="background: var(--gradient-chinese);"><i data-lucide="star"></i></div>
                        <div>
                            <div style="font-weight: bold; font-size: 14px;">HSK 3 Ready</div>
                            <div style="font-size: 12px; color: var(--text-secondary);">David K.</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section bg-secondary">
            <div class="container">
                <div class="section-header animate-slide-up">
                    <span class="section-label">Why Choose A3M</span>
                    <h2>Premium Learning Experience</h2>
                    <p>Everything you need to master a new language, beautifully designed and easy to use.</p>
                </div>
                
                <div class="features-grid">
                    <div class="feature-card animate-slide-up stagger-1">
                        <div class="feature-icon-wrapper"><i data-lucide="video"></i></div>
                        <h3 class="feature-title">HD Video Lessons</h3>
                        <p class="feature-desc">Learn from expert teachers with high-quality, structured video content and interactive subtitles.</p>
                    </div>
                    <div class="feature-card animate-slide-up stagger-2">
                        <div class="feature-icon-wrapper"><i data-lucide="users"></i></div>
                        <h3 class="feature-title">Live Classes</h3>
                        <p class="feature-desc">Join interactive live sessions via Zoom/Meet to practice speaking and get real-time feedback.</p>
                    </div>
                    <div class="feature-card animate-slide-up stagger-3">
                        <div class="feature-icon-wrapper"><i data-lucide="bot"></i></div>
                        <h3 class="feature-title">AI Assistant</h3>
                        <p class="feature-desc">Get instant translations, grammar corrections, and pronunciation checks powered by AI.</p>
                    </div>
                </div>
            </div>
        </section>
    `;
    lucide.createIcons();
}
