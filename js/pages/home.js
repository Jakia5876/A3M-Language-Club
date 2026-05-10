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

        <section class="section">
            <div class="container">
                <div class="section-header animate-slide-up">
                    <span class="section-label">Testimonials</span>
                    <h2>What Our Students Say</h2>
                    <p>Join thousands of learners who are mastering Japanese and Chinese with A3M Language Club.</p>
                </div>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr)); gap: var(--space-6);">
                    <!-- Review 1 -->
                    <div class="card card-body animate-slide-up stagger-1">
                        <div class="rating mb-3">
                            <i data-lucide="star" class="star-filled"></i><i data-lucide="star" class="star-filled"></i><i data-lucide="star" class="star-filled"></i><i data-lucide="star" class="star-filled"></i><i data-lucide="star" class="star-filled"></i>
                        </div>
                        <p class="mb-4" style="font-style: italic;">"The JLPT N5 course is phenomenal. The video lessons are clear and the quizzes helped me pass on my first try!"</p>
                        <div class="flex items-center gap-3">
                            <div class="avatar avatar-md"><span>SJ</span></div>
                            <div>
                                <div style="font-weight: 600; color: var(--text-primary); font-size: var(--text-sm);">Sarah Jenkins</div>
                                <div style="font-size: var(--text-xs); color: var(--text-secondary);">Japanese Learner</div>
                            </div>
                        </div>
                    </div>

                    <!-- Review 2 -->
                    <div class="card card-body animate-slide-up stagger-2">
                        <div class="rating mb-3">
                            <i data-lucide="star" class="star-filled"></i><i data-lucide="star" class="star-filled"></i><i data-lucide="star" class="star-filled"></i><i data-lucide="star" class="star-filled"></i><i data-lucide="star" class="star-filled"></i>
                        </div>
                        <p class="mb-4" style="font-style: italic;">"I've tried many apps to learn Chinese, but A3M's approach with AI translation and real-time live classes is unmatched."</p>
                        <div class="flex items-center gap-3">
                            <div class="avatar avatar-md" style="background: var(--gradient-chinese);"><span>MC</span></div>
                            <div>
                                <div style="font-weight: 600; color: var(--text-primary); font-size: var(--text-sm);">Michael Chen</div>
                                <div style="font-size: var(--text-xs); color: var(--text-secondary);">HSK 4 Student</div>
                            </div>
                        </div>
                    </div>

                    <!-- Review 3 -->
                    <div class="card card-body animate-slide-up stagger-3">
                        <div class="rating mb-3">
                            <i data-lucide="star" class="star-filled"></i><i data-lucide="star" class="star-filled"></i><i data-lucide="star" class="star-filled"></i><i data-lucide="star" class="star-filled"></i><i data-lucide="star" class="star-filled"></i>
                        </div>
                        <p class="mb-4" style="font-style: italic;">"Love the interactive subtitles! Being able to click on a Kanji to see its meaning while watching a lesson is a game-changer."</p>
                        <div class="flex items-center gap-3">
                            <div class="avatar avatar-md" style="background: var(--gradient-accent);"><span>ER</span></div>
                            <div>
                                <div style="font-weight: 600; color: var(--text-primary); font-size: var(--text-sm);">Emily Rodriguez</div>
                                <div style="font-size: var(--text-xs); color: var(--text-secondary);">JLPT N4 Student</div>
                            </div>
                        </div>
                    </div>

                    <!-- Review 4 -->
                    <div class="card card-body animate-slide-up stagger-4">
                        <div class="rating mb-3">
                            <i data-lucide="star" class="star-filled"></i><i data-lucide="star" class="star-filled"></i><i data-lucide="star" class="star-filled"></i><i data-lucide="star" class="star-filled"></i><i data-lucide="star" class="star-filled"></i>
                        </div>
                        <p class="mb-4" style="font-style: italic;">"The teacher feedback on my speaking assignments was incredibly detailed. My pronunciation has improved so much."</p>
                        <div class="flex items-center gap-3">
                            <div class="avatar avatar-md" style="background: var(--gradient-secondary);"><span>DK</span></div>
                            <div>
                                <div style="font-weight: 600; color: var(--text-primary); font-size: var(--text-sm);">David Kim</div>
                                <div style="font-size: var(--text-xs); color: var(--text-secondary);">Speaking Practice</div>
                            </div>
                        </div>
                    </div>

                    <!-- Review 5 -->
                    <div class="card card-body animate-slide-up stagger-5">
                        <div class="rating mb-3">
                            <i data-lucide="star" class="star-filled"></i><i data-lucide="star" class="star-filled"></i><i data-lucide="star" class="star-filled"></i><i data-lucide="star" class="star-filled"></i><i data-lucide="star" class="star-empty"></i>
                        </div>
                        <p class="mb-4" style="font-style: italic;">"Finally, a platform that doesn't treat Japanese grammar like an afterthought. The step-by-step breakdowns are perfect."</p>
                        <div class="flex items-center gap-3">
                            <div class="avatar avatar-md"><span>JT</span></div>
                            <div>
                                <div style="font-weight: 600; color: var(--text-primary); font-size: var(--text-sm);">Jessica Thompson</div>
                                <div style="font-size: var(--text-xs); color: var(--text-secondary);">Beginner</div>
                            </div>
                        </div>
                    </div>

                    <!-- Review 6 -->
                    <div class="card card-body animate-slide-up stagger-1">
                        <div class="rating mb-3">
                            <i data-lucide="star" class="star-filled"></i><i data-lucide="star" class="star-filled"></i><i data-lucide="star" class="star-filled"></i><i data-lucide="star" class="star-filled"></i><i data-lucide="star" class="star-filled"></i>
                        </div>
                        <p class="mb-4" style="font-style: italic;">"The UI is beautiful and the dark mode makes studying at night so comfortable. The learning streaks keep me motivated!"</p>
                        <div class="flex items-center gap-3">
                            <div class="avatar avatar-md" style="background: var(--gradient-chinese);"><span>AW</span></div>
                            <div>
                                <div style="font-weight: 600; color: var(--text-primary); font-size: var(--text-sm);">Alex Walker</div>
                                <div style="font-size: var(--text-xs); color: var(--text-secondary);">Chinese Learner</div>
                            </div>
                        </div>
                    </div>

                    <!-- Review 7 -->
                    <div class="card card-body animate-slide-up stagger-2">
                        <div class="rating mb-3">
                            <i data-lucide="star" class="star-filled"></i><i data-lucide="star" class="star-filled"></i><i data-lucide="star" class="star-filled"></i><i data-lucide="star" class="star-filled"></i><i data-lucide="star" class="star-filled"></i>
                        </div>
                        <p class="mb-4" style="font-style: italic;">"HSK 3 seemed impossible until I found A3M. The vocabulary builder tool is exactly what I needed."</p>
                        <div class="flex items-center gap-3">
                            <div class="avatar avatar-md" style="background: var(--gradient-accent);"><span>SM</span></div>
                            <div>
                                <div style="font-weight: 600; color: var(--text-primary); font-size: var(--text-sm);">Sofia Martinez</div>
                                <div style="font-size: var(--text-xs); color: var(--text-secondary);">HSK 3 Student</div>
                            </div>
                        </div>
                    </div>

                    <!-- Review 8 -->
                    <div class="card card-body animate-slide-up stagger-3">
                        <div class="rating mb-3">
                            <i data-lucide="star" class="star-filled"></i><i data-lucide="star" class="star-filled"></i><i data-lucide="star" class="star-filled"></i><i data-lucide="star" class="star-filled"></i><i data-lucide="star" class="star-empty"></i>
                        </div>
                        <p class="mb-4" style="font-style: italic;">"The community features are great. I found a study buddy in my time zone and we practice speaking every weekend."</p>
                        <div class="flex items-center gap-3">
                            <div class="avatar avatar-md" style="background: var(--gradient-secondary);"><span>RO</span></div>
                            <div>
                                <div style="font-weight: 600; color: var(--text-primary); font-size: var(--text-sm);">Ryan O'Connor</div>
                                <div style="font-size: var(--text-xs); color: var(--text-secondary);">Conversation Practice</div>
                            </div>
                        </div>
                    </div>

                    <!-- Review 9 -->
                    <div class="card card-body animate-slide-up stagger-4">
                        <div class="rating mb-3">
                            <i data-lucide="star" class="star-filled"></i><i data-lucide="star" class="star-filled"></i><i data-lucide="star" class="star-filled"></i><i data-lucide="star" class="star-filled"></i><i data-lucide="star" class="star-filled"></i>
                        </div>
                        <p class="mb-4" style="font-style: italic;">"Worth every penny. The PDF downloads and offline support let me study during my commute."</p>
                        <div class="flex items-center gap-3">
                            <div class="avatar avatar-md"><span>YT</span></div>
                            <div>
                                <div style="font-weight: 600; color: var(--text-primary); font-size: var(--text-sm);">Yuki Tanaka</div>
                                <div style="font-size: var(--text-xs); color: var(--text-secondary);">JLPT N3 Student</div>
                            </div>
                        </div>
                    </div>

                    <!-- Review 10 -->
                    <div class="card card-body animate-slide-up stagger-5">
                        <div class="rating mb-3">
                            <i data-lucide="star" class="star-filled"></i><i data-lucide="star" class="star-filled"></i><i data-lucide="star" class="star-filled"></i><i data-lucide="star" class="star-filled"></i><i data-lucide="star" class="star-filled"></i>
                        </div>
                        <p class="mb-4" style="font-style: italic;">"Best investment in my education. The combination of self-paced video and live Zoom sessions is the perfect balance."</p>
                        <div class="flex items-center gap-3">
                            <div class="avatar avatar-md" style="background: var(--gradient-chinese);"><span>LP</span></div>
                            <div>
                                <div style="font-weight: 600; color: var(--text-primary); font-size: var(--text-sm);">Liam Patel</div>
                                <div style="font-size: var(--text-xs); color: var(--text-secondary);">Chinese Learner</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
    lucide.createIcons();
}
