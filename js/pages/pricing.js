// pages/pricing.js
async function renderPricing() {
    document.getElementById('main-content').innerHTML = `
        <section class="hero" style="min-height: 40vh; padding-top: 150px; padding-bottom: var(--space-12);">
            <div class="hero-bg"></div>
            <div class="container text-center">
                <div class="hero-content animate-slide-up" style="max-width: 800px; margin: 0 auto;">
                    <div class="hero-badge" style="margin: 0 auto var(--space-6) auto; display: inline-block;">
                        Pricing
                    </div>
                    <h1 class="hero-title" style="font-size: var(--text-5xl);">Simple, Transparent Pricing</h1>
                    <p class="hero-desc">Start learning today with our flexible plans.</p>
                </div>
            </div>
        </section>

        <section class="section" style="padding-top: 0;">
            <div class="container">
                <div style="max-width: 450px; margin: 0 auto;">
                    <div class="card card-body text-center animate-slide-up" style="background: var(--bg-secondary); border: 2px solid var(--gold); position: relative; overflow: hidden; padding: var(--space-10) var(--space-8);">
                        <div style="background: var(--gold); color: black; font-size: 12px; font-weight: bold; padding: 6px 40px; position: absolute; top: 20px; right: -35px; transform: rotate(45deg);">POPULAR</div>
                        
                        <h3 class="mb-2" style="font-size: var(--text-2xl);">Standard Course</h3>
                        <p class="mb-6" style="color: var(--text-secondary);">Complete access to any single language level (e.g. JLPT N5 or HSK 1).</p>
                        
                        <div class="mb-8" style="padding: var(--space-6) 0; border-top: 1px solid var(--border-secondary); border-bottom: 1px solid var(--border-secondary);">
                            <span style="font-size: var(--text-5xl); font-weight: var(--font-extrabold); color: var(--text-primary);">৳ 10,000</span>
                            <span style="color: var(--text-secondary); font-size: var(--text-lg);">/ course</span>
                        </div>
                        
                        <ul class="mb-8 text-left" style="list-style: none; padding: 0;">
                            <li class="flex items-center gap-3 mb-4"><i data-lucide="check-circle" style="color: var(--gold);"></i> <span>Live Interactive Video Sessions</span></li>
                            <li class="flex items-center gap-3 mb-4"><i data-lucide="check-circle" style="color: var(--gold);"></i> <span>Premium Downloadable Materials</span></li>
                            <li class="flex items-center gap-3 mb-4"><i data-lucide="check-circle" style="color: var(--gold);"></i> <span>AI-Powered Practice Tools</span></li>
                            <li class="flex items-center gap-3 mb-4"><i data-lucide="check-circle" style="color: var(--gold);"></i> <span>Dedicated Teacher Feedback</span></li>
                            <li class="flex items-center gap-3"><i data-lucide="check-circle" style="color: var(--gold);"></i> <span>Official Course Certificate</span></li>
                        </ul>
                        
                        <a href="#/courses" class="btn btn-primary btn-xl" style="width: 100%; justify-content: center; background: var(--gradient-primary); border: none;">Enroll Now</a>
                    </div>
                </div>
            </div>
        </section>
    `;
    lucide.createIcons();
}
