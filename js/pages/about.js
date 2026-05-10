// pages/about.js
async function renderAbout() {
    document.getElementById('main-content').innerHTML = `
        <section class="hero" style="min-height: 50vh; padding-top: 150px;">
            <div class="hero-bg"></div>
            <div class="container text-center">
                <div class="hero-content animate-slide-up" style="max-width: 800px; margin: 0 auto;">
                    <div class="hero-badge" style="margin: 0 auto var(--space-6) auto; display: inline-block;">
                        Our Story
                    </div>
                    <h1 class="hero-title" style="font-size: var(--text-5xl);">Empowering Global Communication Through <span style="color: var(--gold);">Language</span></h1>
                    <p class="hero-desc">At A3M Language Club, we bridge cultures and open doors to new opportunities by providing world-class Japanese and Chinese language education tailored for modern learners.</p>
                </div>
            </div>
        </section>

        <section class="section bg-secondary">
            <div class="container">
                <div class="grid-2 animate-slide-up" style="gap: var(--space-12); align-items: center;">
                    <div>
                        <h2>Our Mission</h2>
                        <p class="mb-4" style="color: var(--text-secondary); line-height: 1.8;">Learning a language is more than just memorizing vocabulary; it's about understanding a culture, thinking differently, and connecting with people on a profound level. Our mission at A3M Language Club is to make mastering Japanese and Chinese accessible, engaging, and highly effective for learners worldwide.</p>
                        <p style="color: var(--text-secondary); line-height: 1.8;">Whether you're preparing for the JLPT, the HSK, aiming for a career abroad, or simply expanding your horizons, we provide the expert guidance, interactive tools, and community support you need to achieve absolute fluency.</p>
                    </div>
                    <div class="card card-body" style="background: var(--bg-tertiary);">
                        <h3 class="mb-4">Why We Stand Out</h3>
                        <ul style="list-style: none; padding: 0;">
                            <li class="flex items-center gap-3 mb-4"><i data-lucide="check-circle" style="color: var(--gold);"></i> <span>Industry-leading Expert Instructors</span></li>
                            <li class="flex items-center gap-3 mb-4"><i data-lucide="check-circle" style="color: var(--gold);"></i> <span>AI-Powered Smart Learning Assistance</span></li>
                            <li class="flex items-center gap-3 mb-4"><i data-lucide="check-circle" style="color: var(--gold);"></i> <span>Interactive Live Video Sessions</span></li>
                            <li class="flex items-center gap-3"><i data-lucide="check-circle" style="color: var(--gold);"></i> <span>Comprehensive Exam Preparation</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section class="section text-center animate-slide-up">
            <div class="container">
                <h2 class="mb-6">Ready to transform your future?</h2>
                <a href="#/courses" class="btn btn-primary btn-xl">Start Your Journey Now</a>
            </div>
        </section>
    `;
    lucide.createIcons();
}
