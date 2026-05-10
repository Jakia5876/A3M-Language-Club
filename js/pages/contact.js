// pages/contact.js
async function renderContact() {
    document.getElementById('main-content').innerHTML = `
        <div class="container section text-center">
            <h2>Contact Information</h2>
            <p>Phone: ${CONFIG.CONTACT_PHONE}</p>
            <p>Email: <a href="mailto:${CONFIG.CONTACT_EMAIL}">${CONFIG.CONTACT_EMAIL}</a></p>
        </div>
    `;
}
