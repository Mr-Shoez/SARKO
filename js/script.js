document.addEventListener("DOMContentLoaded", () => {
    const mobileToggle = document.getElementById("mobile-toggle");
    const mobileClose = document.getElementById("mobile-close");
    const navContent = document.getElementById("nav-content");

    // Toggle Mobile Menu
    if (mobileToggle) {
        mobileToggle.addEventListener("click", () => {
            navContent.classList.add("active");
            document.body.style.overflow = "hidden";
        });
    }

    if (mobileClose) {
        mobileClose.addEventListener("click", () => {
            navContent.classList.remove("active");
            document.body.style.overflow = "";
        });
    }

    // Auto close on resize
    window.addEventListener("resize", () => {
        if (window.innerWidth > 992) {
            navContent.classList.remove("active");
            document.body.style.overflow = "";
        }
    });

    // Animate stats when they scroll into view
    const observerOptions = {
        threshold: 0.5
    };

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    const stats = document.querySelectorAll(".stat-item");
    stats.forEach((stat, index) => {
        // Initial state set in JS to avoid hiding if JS fails
        stat.style.opacity = "0";
        stat.style.transform = "translateY(20px)";
        stat.style.transition = `all 0.6s ease ${index * 0.2}s`; // Staggered delay
        statsObserver.observe(stat);
    });
});
