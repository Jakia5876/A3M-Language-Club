// pages/contact.js
async function renderContact() {
    document.getElementById('main-content').innerHTML = `
        <section class="hero" style="min-height: 40vh; padding-top: 150px; padding-bottom: var(--space-12);">
            <div class="hero-bg"></div>
            <div class="container text-center">
                <div class="hero-content animate-slide-up" style="max-width: 800px; margin: 0 auto;">
                    <div class="hero-badge" style="margin: 0 auto var(--space-6) auto; display: inline-block;">
                        Contact Us
                    </div>
                    <h1 class="hero-title" style="font-size: var(--text-5xl);">Have questions? We're here to help.</h1>
                    <p class="hero-desc">Whether you're curious about our courses, need technical support, or just want to say hello, our team is always ready to assist you.</p>
                </div>
            </div>
        </section>

        <section class="section" style="padding-top: 0;">
            <div class="container">
                <div class="grid-2" style="max-width: 800px; margin: 0 auto; gap: var(--space-6);">
                    <!-- Email Card -->
                    <div class="card card-body text-center animate-slide-up stagger-1" style="background: var(--bg-secondary);">
                        <div class="avatar avatar-lg mx-auto mb-4" style="background: var(--gradient-primary);"><i data-lucide="mail"></i></div>
                        <h3 class="mb-2">Email Support</h3>
                        <p class="mb-4" style="color: var(--text-secondary); font-size: var(--text-sm);">Send us an email anytime and we will get back to you within 24 hours.</p>
                        <a href="mailto:${CONFIG.CONTACT_EMAIL}" class="btn btn-outline" style="width: 100%; justify-content: center;">${CONFIG.CONTACT_EMAIL}</a>
                    </div>

                    <!-- WhatsApp Card -->
                    <div class="card card-body text-center animate-slide-up stagger-2" style="background: var(--bg-secondary);">
                        <div class="avatar avatar-lg mx-auto mb-4" style="background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);"><i data-lucide="message-circle"></i></div>
                        <h3 class="mb-2">WhatsApp Chat</h3>
                        <p class="mb-4" style="color: var(--text-secondary); font-size: var(--text-sm);">Need a quick response? Message us directly on WhatsApp.</p>
                        <a href="https://wa.me/${CONFIG.CONTACT_PHONE}" target="_blank" class="btn btn-primary" style="width: 100%; justify-content: center; background: #25D366; border-color: #25D366; color: white;">+88 ${CONFIG.CONTACT_PHONE}</a>
                    </div>
                </div>
            </div>
        </section>
    `;
    lucide.createIcons();
}
