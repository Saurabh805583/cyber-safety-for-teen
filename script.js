// Page Content Loader
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("content-container");
    loadPage("home");

    document.querySelectorAll(".nav-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelector(".active")?.classList.remove("active");
            btn.classList.add("active");
            loadPage(btn.dataset.page);
        });
    });

    container.classList.add("page-content");
});

// Simple Page Loader Function
function loadPage(page) {
    const content = document.getElementById("content-container");

    if (page === "home") {
        content.innerHTML = `
            <div class="info-card">
                <h2>स्वागत आहे सायबर सुरक्षा बेस कॅम्प मध्ये!</h2>
                <p>येथे तुम्हाला ऑनलाइन सुरक्षित राहण्यासाठी सर्व महत्वाची माहिती मिळेल.</p>
            </div>
        `;
    }

    // बाकी pages पुढे तू भरू शकतोस
}

// Auto Tip Box
const tips = [
    "Strong passwords keep you safe!",
    "Never share OTP with anyone.",
    "Always check website URL before login.",
    "Public Wi-Fi वापरताना सावध रहा."
];

let tipIndex = 0;

setInterval(() => {
    document.getElementById("tip-text").innerText = tips[tipIndex];
    document.getElementById("tip-box").classList.add("show");

    setTimeout(() => {
        document.getElementById("tip-box").classList.remove("show");
    }, 3000);

    tipIndex = (tipIndex + 1) % tips.length;
}, 5000);
