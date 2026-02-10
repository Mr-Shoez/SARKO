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

document.addEventListener("DOMContentLoaded", () => {
    // 1. Modal Toggle Logic
    const modal = document.getElementById("membership-modal");
    const closeBtn = document.getElementById("close-wizard");
    // Select all buttons that should open the modal (The "Join" buttons)
    const openBtns = document.querySelectorAll('a[href="#"]');
    // ^ NOTE: Ideally, add a specific class like .open-join-modal to your buttons in HTML
    // For now, I'll assume you add class="open-modal" to your specific Join buttons.

    // Attach event to buttons with class .open-modal
    document.querySelectorAll(".btn-primary").forEach((btn) => {
        if (btn.innerText.includes("Become a Member") || btn.innerText.includes("Join")) {
            btn.addEventListener("click", (e) => {
                e.preventDefault();
                modal.classList.add("open");
            });
        }
    });

    closeBtn.addEventListener("click", () => {
        modal.classList.remove("open");
    });

    // 2. Wizard Navigation Logic
    let currentStep = 1;
    const totalSteps = 4;
    const form = document.getElementById("sarko-membership-form");
    const nextBtn = document.getElementById("next-btn");
    const prevBtn = document.getElementById("prev-btn");
    const submitBtn = document.getElementById("submit-btn");
    const progressFill = document.getElementById("progress-fill");

    function updateWizard() {
        // Show/Hide Steps
        document.querySelectorAll(".form-step").forEach((step) => {
            step.classList.remove("active");
        });
        document.getElementById(`step-${currentStep}`).classList.add("active");

        // Update Dots
        document.querySelectorAll(".step-dot").forEach((dot) => {
            const stepNum = parseInt(dot.dataset.step);
            if (stepNum <= currentStep) {
                dot.classList.add("active");
            } else {
                dot.classList.remove("active");
            }
        });

        // Update Progress Bar
        const percentage = ((currentStep - 1) / (totalSteps - 1)) * 100;
        progressFill.style.width = percentage + "%";

        // Button Visibility
        if (currentStep === 1) {
            prevBtn.style.visibility = "hidden";
        } else {
            prevBtn.style.visibility = "visible";
        }

        if (currentStep === totalSteps) {
            nextBtn.style.display = "none";
            submitBtn.style.display = "inline-block";
        } else {
            nextBtn.style.display = "inline-block";
            submitBtn.style.display = "none";
        }
    }

    nextBtn.addEventListener("click", () => {
        // Simple Validation: Check required inputs in current step
        const currentStepDiv = document.getElementById(`step-${currentStep}`);
        const inputs = currentStepDiv.querySelectorAll("input, select");
        let isValid = true;

        inputs.forEach((input) => {
            if (!input.checkValidity()) {
                input.reportValidity(); // Shows browser default error bubble
                isValid = false;
            }
        });

        if (isValid && currentStep < totalSteps) {
            currentStep++;
            updateWizard();
        }
    });

    prevBtn.addEventListener("click", () => {
        if (currentStep > 1) {
            currentStep--;
            updateWizard();
        }
    });

    // 1. UPDATED FORM SUBMIT HANDLER
    const thankYouModal = document.getElementById("thank-you-modal");

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            // 1. Close the Application Wizard
            document.getElementById("membership-modal").classList.remove("open");

            // 2. Open the Thank You Modal
            thankYouModal.classList.add("open");

            // 3. Wait 3 seconds, then Redirect
            setTimeout(() => {
                window.location.href = "index.html"; // Redirects/Refreshes
            }, 3000);
        });
    }

    // 2. COOKIE CONSENT LOGIC
    const cookieBanner = document.getElementById("cookie-banner");
    const acceptBtn = document.getElementById("accept-cookies");
    const declineBtn = document.getElementById("decline-cookies");

    // Check LocalStorage to see if user already decided
    if (!localStorage.getItem("sarko_consent")) {
        // Wait 2 seconds before showing the banner so it's not annoying immediately
        setTimeout(() => {
            cookieBanner.classList.add("show");
        }, 2000);
    }

    // Accept Action
    if (acceptBtn) {
        acceptBtn.addEventListener("click", () => {
            localStorage.setItem("sarko_consent", "accepted");
            cookieBanner.classList.remove("show");
        });
    }

    // Decline Action
    if (declineBtn) {
        declineBtn.addEventListener("click", () => {
            localStorage.setItem("sarko_consent", "declined");
            cookieBanner.classList.remove("show");
        });
    }
});
