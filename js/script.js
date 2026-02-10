document.addEventListener("DOMContentLoaded", () => {
    // ============================================
    //  1. MOBILE NAVIGATION
    // ============================================
    const mobileToggle = document.getElementById("mobile-toggle");
    const mobileClose = document.getElementById("mobile-close");
    const navContent = document.getElementById("nav-content");

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

    window.addEventListener("resize", () => {
        if (window.innerWidth > 992) {
            navContent.classList.remove("active");
            document.body.style.overflow = "";
        }
    });

    // ============================================
    //  2. STATS COUNTER ANIMATION
    // ============================================
    const statsObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                }
            });
        },
        { threshold: 0.5 }
    );

    const stats = document.querySelectorAll(".stat-item");
    stats.forEach((stat, index) => {
        stat.style.opacity = "0";
        stat.style.transform = "translateY(20px)";
        stat.style.transition = `all 0.6s ease ${index * 0.2}s`;
        statsObserver.observe(stat);
    });

    // ============================================
    //  3. MEMBERSHIP MODAL WIZARD
    // ============================================
    const membershipModal = document.getElementById("membership-modal");
    const thankYouModal = document.getElementById("thank-you-modal");

    // --- Open Membership Modal ---
    document.querySelectorAll(".btn-primary").forEach((btn) => {
        if (btn.innerText.includes("Become a Member") || btn.innerText.includes("Join")) {
            btn.addEventListener("click", (e) => {
                e.preventDefault();
                membershipModal.classList.add("open");
            });
        }
    });

    // --- Wizard Navigation ---
    let currentStep = 1;
    const totalSteps = 4;
    const form = document.getElementById("sarko-membership-form");
    const nextBtn = document.getElementById("next-btn");
    const prevBtn = document.getElementById("prev-btn");
    const submitBtn = document.getElementById("submit-btn");
    const progressFill = document.getElementById("progress-fill");

    function updateWizard() {
        document.querySelectorAll(".form-step").forEach((step) => step.classList.remove("active"));
        document.getElementById(`step-${currentStep}`).classList.add("active");

        document.querySelectorAll(".step-dot").forEach((dot) => {
            dot.classList.toggle("active", parseInt(dot.dataset.step) <= currentStep);
        });

        progressFill.style.width = `${((currentStep - 1) / (totalSteps - 1)) * 100}%`;
        prevBtn.style.visibility = currentStep === 1 ? "hidden" : "visible";
        nextBtn.style.display = currentStep === totalSteps ? "none" : "inline-block";
        submitBtn.style.display = currentStep === totalSteps ? "inline-block" : "none";
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            const currentStepDiv = document.getElementById(`step-${currentStep}`);
            const inputs = currentStepDiv.querySelectorAll("input[required], select[required]");
            let isValid = true;
            inputs.forEach((input) => {
                if (!input.checkValidity()) {
                    input.reportValidity();
                    isValid = false;
                }
            });
            if (isValid && currentStep < totalSteps) {
                currentStep++;
                updateWizard();
            }
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener("click", () => {
            if (currentStep > 1) {
                currentStep--;
                updateWizard();
            }
        });
    }

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            membershipModal.classList.remove("open");
            thankYouModal.classList.add("open");
            setTimeout(() => {
                window.location.href = "index.html";
            }, 3000);
        });
    }

    // ============================================
    //  4. UNIVERSAL MODAL CLOSING LOGIC (NEW!)
    // ============================================
    const allModals = document.querySelectorAll(".modal-overlay");

    allModals.forEach((modal) => {
        // --- Close on 'X' button click ---
        const closeButton = modal.querySelector(".modal-close");
        if (closeButton) {
            closeButton.addEventListener("click", () => {
                modal.classList.remove("open");
            });
        }

        // --- Close on clicking the blurred background ---
        modal.addEventListener("click", (e) => {
            // If the clicked element is the overlay itself, not the content inside
            if (e.target === modal) {
                modal.classList.remove("open");
            }
        });
    });

    // ============================================
    //  5. EXIT-INTENT MODAL LOGIC (NEW!)
    // ============================================
    const exitIntentModal = document.getElementById("exit-intent-modal");
    let exitIntentShown = false; // Flag to ensure it only shows once

    document.addEventListener("mouseout", (e) => {
        // If the mouse leaves the viewport at the top, and the modal hasn't been shown yet
        if (e.clientY <= 0 && !exitIntentShown) {
            exitIntentShown = true; // Set flag to true
            exitIntentModal.classList.add("open");
        }
    });

    // ============================================
    //  6. COOKIE CONSENT BANNER
    // ============================================
    const cookieBanner = document.getElementById("cookie-banner");
    const acceptBtn = document.getElementById("accept-cookies");
    const declineBtn = document.getElementById("decline-cookies");

    if (cookieBanner && !localStorage.getItem("sarko_consent")) {
        setTimeout(() => {
            cookieBanner.classList.add("show");
        }, 2000);
    }

    if (acceptBtn) {
        acceptBtn.addEventListener("click", () => {
            localStorage.setItem("sarko_consent", "accepted");
            cookieBanner.classList.remove("show");
        });
    }

    if (declineBtn) {
        declineBtn.addEventListener("click", () => {
            localStorage.setItem("sarko_consent", "declined");
            cookieBanner.classList.remove("show");
        });
    }
});
