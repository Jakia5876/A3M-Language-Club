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
                <div class="card">
                    <img src="https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" class="card-img" alt="Course">
                    <div class="card-body">
                        <div class="badge badge-japanese mb-2">Japanese</div>
                        <h3 class="mb-2">JLPT N5 Complete Preparation</h3>
                        <p class="mb-4">Master the basics of Japanese grammar, vocabulary, and kanji for the JLPT N5 exam.</p>
                        <button class="btn btn-primary btn-block">View Course</button>
                    </div>
                </div>
                <div class="card">
                    <img src="https://images.unsplash.com/photo-1545424436-ce47fa47f12e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" class="card-img" alt="Course">
                    <div class="card-body">
                        <div class="badge badge-chinese mb-2">Chinese</div>
                        <h3 class="mb-2">HSK 2 Vocabulary Builder</h3>
                        <p class="mb-4">Learn the essential vocabulary required to pass the HSK 2 examination.</p>
                        <button class="btn btn-primary btn-block">View Course</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}
