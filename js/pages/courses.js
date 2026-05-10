// pages/courses.js
async function renderCourses() {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `
        <div class="container section" style="padding-top: 150px;">
            <div class="section-header">
                <h2>Our Courses</h2>
                <p>Browse our extensive catalog of Japanese and Chinese courses.</p>
            </div>
            <div class="grid grid-3 gap-6">
                <div class="card animate-slide-up stagger-1">
                    <img src="https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" class="card-img" alt="Japanese Course" style="height: 250px; object-fit: cover;">
                    <div class="card-body">
                        <div class="badge badge-japanese mb-3" style="background: var(--gradient-japanese); color: white;">Japanese</div>
                        <h3 class="mb-2">JLPT N5 Complete Preparation</h3>
                        <p class="mb-4 text-secondary">Master the basics of Japanese grammar, vocabulary, and kanji for the JLPT N5 exam.</p>
                        <a href="#/pricing" class="btn btn-primary" style="width: 100%; justify-content: center;">View Course</a>
                    </div>
                </div>
                
                <div class="card animate-slide-up stagger-2">
                    <img src="https://images.unsplash.com/photo-1508804185872-d7badad00f7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" class="card-img" alt="Chinese Course" style="height: 250px; object-fit: cover;">
                    <div class="card-body">
                        <div class="badge badge-chinese mb-3" style="background: var(--gradient-chinese); color: white;">Chinese</div>
                        <h3 class="mb-2">HSK 1 Complete Preparation</h3>
                        <p class="mb-4 text-secondary">Build a strong foundation in Mandarin Chinese with essential characters and tones.</p>
                        <a href="#/pricing" class="btn btn-primary" style="width: 100%; justify-content: center; background: var(--gradient-chinese); border: none;">View Course</a>
                    </div>
                </div>
            </div>
        </div>
    `;
}
