<!-- ============================================ -->
        <!--        MEMBERSHIP WIZARD (MODAL)             -->
        <!-- ============================================ -->
        <div id="membership-modal" class="modal-overlay">
            <div class="modal-content">
                <!-- Close Button -->
                <button class="modal-close" id="close-wizard"><i class="bx bx-x"></i></button>

                <!-- Wizard Header -->
                <div class="wizard-header">
                    <h3>Induction Form</h3>
                    <div class="progress-bar-container">
                        <div class="progress-track"></div>
                        <div class="progress-fill" id="progress-fill"></div>
                        <div class="step-dot active" data-step="1">1</div>
                        <div class="step-dot" data-step="2">2</div>
                        <div class="step-dot" data-step="3">3</div>
                        <div class="step-dot" data-step="4">4</div>
                    </div>
                </div>

                <!-- FORM START -->
                <form id="sarko-membership-form" action="#" method="POST">
                    <!-- STEP 1: IDENTITY -->
                    <div class="form-step active" id="step-1">
                        <h4>Identity Verification</h4>
                        <div class="input-group">
                            <label>Full Name</label>
                            <input type="text" name="fullname" placeholder="Enter your full legal name" required />
                        </div>
                        <div class="input-group">
                            <label>ID Number</label>
                            <input type="text" name="id_number" placeholder="13-digit SA ID Number" required />
                        </div>
                        <div class="row-group">
                            <div class="input-group">
                                <label>Gender</label>
                                <select name="gender">
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                            <div class="input-group">
                                <label>Age</label>
                                <input type="number" name="age" placeholder="Age" min="16" required />
                                <small style="color: #888">Must be 16 years or older.</small>
                            </div>
                        </div>
                        <div class="input-group">
                            <label>Mobile Number</label>
                            <input type="tel" name="phone" placeholder="072 123 4567" required />
                        </div>
                        <div class="input-group">
                            <label>Email Address</label>
                            <input type="email" name="email" placeholder="name@example.com" required />
                        </div>
                    </div>

                    <!-- STEP 2: HERITAGE & LOCATION -->
                    <div class="form-step" id="step-2">
                        <h4>Heritage & Residence</h4>
                        <div class="input-group">
                            <label>Kingdom / Nation</label>
                            <input type="text" name="kingdom" placeholder="e.g. AmaZulu, BaSotho..." required />
                        </div>
                        <div class="input-group">
                            <label>Under Inkosi / Nkosana</label>
                            <input type="text" name="chief" placeholder="Name of Traditional Leader" required />
                        </div>
                        <div class="row-group">
                            <div class="input-group">
                                <label>Province</label>
                                <select name="province">
                                    <option value="Eastern Cape">Eastern Cape</option>
                                    <option value="Free State">Free State</option>
                                    <option value="Gauteng">Gauteng</option>
                                    <option value="KwaZulu-Natal">KwaZulu-Natal</option>
                                    <option value="Limpopo">Limpopo</option>
                                    <option value="Mpumalanga">Mpumalanga</option>
                                    <option value="Northern Cape">Northern Cape</option>
                                    <option value="North West">North West</option>
                                    <option value="Western Cape">Western Cape</option>
                                </select>
                            </div>
                            <div class="input-group">
                                <label>Metro / Region</label>
                                <input type="text" name="region" placeholder="e.g. Maluti-a-Phofung" />
                            </div>
                        </div>
                        <div class="input-group">
                            <label>Residential Address</label>
                            <textarea name="address" rows="2" placeholder="Street address, Area, Code"></textarea>
                        </div>
                    </div>

                    <!-- STEP 3: THE OATH -->
                    <div class="form-step" id="step-3">
                        <h4>The Oath of Allegiance</h4>
                        <div class="oath-box">
                            <p>
                                "I agree to be a bonafide member of the South African Royal Kingdoms Organization
                                (SARKO).
                            </p>
                            <p>
                                This serves as an Oath which is signed under no duress. Furthermore, I pledge that I
                                will abide by the rules and regulations stipulated by SARKO. I undertake to abide by the
                                Constitution of SARKO.
                            </p>
                            <p>
                                I swear that all information related to SARKO shall be kept and protected by me and not
                                disclosed to any Organization other than SARKO.
                            </p>
                            <p>
                                It is my understanding that failure to abide by the rules and regulations of SARKO, I
                                will be prosecuted to the full extent of the law without prejudice.
                            </p>
                            <p>I personally agree that I will be honest and loyal to SARKO."</p>
                        </div>
                        <div class="checkbox-group">
                            <input type="checkbox" id="oath-check" required />
                            <label for="oath-check">I solemnly swear and agree to these terms.</label>
                        </div>
                    </div>

                    <!-- STEP 4: PAYMENT & SIGNATURE -->
                    <div class="form-step" id="step-4">
                        <h4>Membership Fee & Signature</h4>

                        <div class="banking-card">
                            <h5>Membership Fee: R50.00</h5>
                            <p>Please EFT to the account below using your <strong>ID Number</strong> as reference.</p>
                            <div class="bank-details">
                                <p><strong>Bank:</strong> FNB</p>
                                <p><strong>Account Name:</strong> SARKO</p>
                                <p><strong>Account No:</strong> 62899847184</p>
                                <p><strong>Branch Code:</strong> 251337 (Three Rivers)</p>
                            </div>
                        </div>

                        <div class="input-group" style="margin-top: 20px">
                            <label>Digital Signature</label>
                            <input type="text" name="signature" placeholder="Type your full name to sign" required />
                        </div>

                        <div class="checkbox-group">
                            <input type="checkbox" id="pop-check" required />
                            <label for="pop-check">I confirm I will make/have made the R50 payment.</label>
                        </div>
                    </div>

                    <!-- BUTTONS -->
                    <div class="wizard-footer">
                        <button type="button" class="btn btn-outline" id="prev-btn" style="visibility: hidden">
                            Back
                        </button>
                        <button type="button" class="btn btn-primary" id="next-btn">Next Step</button>
                        <button type="submit" class="btn btn-primary" id="submit-btn" style="display: none">
                            Submit Application
                        </button>
                    </div>
                </form>
            </div>
        </div>

        <!-- ============================================ -->
        <!--           THANK YOU MODAL                    -->
        <!-- ============================================ -->
        <div id="thank-you-modal" class="modal-overlay">
            <div class="modal-content text-center">
                <div class="thank-you-icon">
                    <i class="bx bxs-badge-check"></i>
                </div>
                <h3 class="gold-text">Application Received</h3>
                <p>Welcome to the Legion. Your oath has been recorded.</p>
                <p class="redirect-text">Redirecting to the Kingdom...</p>
                <div class="loader-line"></div>
            </div>
        </div>

        <!-- ============================================ -->
        <!--           COOKIE CONSENT BANNER              -->
        <!-- ============================================ -->
        <div id="cookie-banner" class="cookie-banner">
            <div class="container cookie-layout">
                <div class="cookie-text">
                    <h4>We Value Your Privacy</h4>
                    <p>
                        SARKO uses cookies to ensure you get the best experience on our platform and to adhere to POPIA
                        regulations. By continuing, you accept our <a href="placeholder.html">Privacy Policy</a>.
                    </p>
                </div>
                <div class="cookie-btns">
                    <button id="decline-cookies" class="btn btn-outline-sm">Decline</button>
                    <button id="accept-cookies" class="btn btn-primary-sm">Accept</button>
                </div>
            </div>
        </div>

/* =========================================
   MEMBERSHIP MODAL (WIZARD)
   ========================================= */

/* The Dark Backdrop */
.modal-overlay {
    position: fixed;
    top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(0, 0, 0, 0.85);
    backdrop-filter: blur(5px);
    z-index: 2000;
    display: none; /* Hidden by default */
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.modal-overlay.open {
    display: flex;
    opacity: 1;
}

/* The Modal Box */
.modal-content {
    background: var(--royal-dark);
    width: 90%;
    max-width: 600px;
    border: 1px solid var(--royal-gold);
    border-radius: 12px;
    padding: 30px;
    position: relative;
    box-shadow: 0 20px 50px rgba(0,0,0,0.5);
    max-height: 90vh; /* Prevent it from being taller than screen */
    overflow-y: auto; /* Scroll if content is too tall */
}

/* Close Button */
.modal-close {
    position: absolute;
    top: 15px; right: 15px;
    font-size: 1.5rem;
    color: var(--royal-white);
    background: transparent;
    border: none;
    cursor: pointer;
}

/* Wizard Header & Progress */
.wizard-header {
    text-align: center;
    margin-bottom: 30px;
}

.wizard-header h3 {
    font-family: "Vollkorn", serif;
    color: var(--royal-gold);
    margin-bottom: 20px;
}

.progress-bar-container {
    position: relative;
    display: flex;
    justify-content: space-between;
    margin: 0 20px;
}

.progress-track {
    position: absolute;
    top: 50%; left: 0; width: 100%; height: 2px;
    background: #333;
    z-index: 1;
    transform: translateY(-50%);
}

.progress-fill {
    position: absolute;
    top: 50%; left: 0; width: 0%; height: 2px;
    background: var(--royal-gold);
    z-index: 2;
    transform: translateY(-50%);
    transition: width 0.3s ease;
}

.step-dot {
    width: 30px; height: 30px;
    background: #1a2625;
    border: 2px solid #333;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;
    color: #555;
    font-family: "Comfortaa", sans-serif;
    font-weight: 700;
    font-size: 0.8rem;
    transition: 0.3s;
}

.step-dot.active {
    border-color: var(--royal-gold);
    color: var(--royal-gold);
    background: var(--royal-dark);
    box-shadow: 0 0 10px rgba(201, 131, 10, 0.5);
}

/* Form Steps */
.form-step {
    display: none; /* Hidden by default */
    animation: fadeIn 0.4s ease;
}

.form-step.active {
    display: block;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}

.form-step h4 {
    font-family: "Comfortaa", sans-serif;
    color: var(--royal-white);
    margin-bottom: 20px;
    border-bottom: 1px solid rgba(255,255,255,0.1);
    padding-bottom: 10px;
}

/* Input Styling */
.input-group {
    margin-bottom: 15px;
    text-align: left;
}

.row-group {
    display: flex;
    gap: 15px;
}

.row-group .input-group {
    flex: 1;
}

label {
    display: block;
    font-family: "Martel", serif;
    font-size: 0.9rem;
    color: #aaa;
    margin-bottom: 5px;
}

input, select, textarea {
    width: 100%;
    padding: 12px;
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 4px;
    color: var(--royal-white);
    font-family: "Comfortaa", sans-serif;
}

input:focus, select:focus, textarea:focus {
    outline: none;
    border-color: var(--royal-gold);
}

/* Special Areas: Oath & Bank */
.oath-box {
    background: rgba(0,0,0,0.3);
    padding: 15px;
    border-left: 3px solid var(--royal-gold);
    max-height: 200px;
    overflow-y: auto;
    font-size: 0.9rem;
    color: #ccc;
    font-style: italic;
    margin-bottom: 15px;
}

.oath-box p {
    margin-bottom: 10px;
}

.banking-card {
    background: #126917; /* Using Royal Green for Money context */
    background: linear-gradient(45deg, #0e4d12, #126917);
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 20px;
    color: white;
}

.bank-details p {
    margin: 5px 0;
    font-size: 0.9rem;
}

.checkbox-group {
    display: flex;
    align-items: center;
    gap: 10px;
    text-align: left;
}
.checkbox-group input {
    width: auto;
    flex-shrink: 0;
}
.checkbox-group label {
    margin: 0;
    font-size: 0.9rem;
}


/* Wizard Footer Buttons */
.wizard-footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid rgba(255,255,255,0.1);
    padding-top: 20px;
}

/* =========================================
   THANK YOU MODAL
   ========================================= */
.text-center { text-align: center; }

.thank-you-icon i {
    font-size: 5rem;
    color: var(--royal-gold);
    margin-bottom: 20px;
    animation: popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.gold-text {
    font-family: "Vollkorn", serif;
    color: var(--royal-gold);
    font-size: 2rem;
    margin-bottom: 15px;
}

.modal-content p {
    color: #ccc;
    line-height: 1.6;
}

.redirect-text {
    font-size: 0.9rem;
    opacity: 0.7;
    margin-top: 20px;
    font-family: "Comfortaa", sans-serif;
}

/* Loader Animation Line */
.loader-line {
    width: 100%;
    height: 4px;
    background: #333;
    margin-top: 15px;
    position: relative;
    overflow: hidden;
    border-radius: 4px;
}

.loader-line::after {
    content: '';
    position: absolute;
    left: -100%;
    top: 0;
    width: 100%;
    height: 100%;
    background: var(--royal-gold);
    animation: loading 3s linear forwards;
}

@keyframes popIn {
    0% { transform: scale(0); opacity: 0; }
    100% { transform: scale(1); opacity: 1; }
}

@keyframes loading {
    0% { left: -100%; }
    100% { left: 0%; }
}

/* =========================================
   COOKIE CONSENT BANNER
   ========================================= */
.cookie-banner {
    position: fixed;
    bottom: -100%; /* Hidden below screen initially */
    left: 0;
    width: 100%;
    background-color: rgba(16, 25, 24, 0.95); /* Royal Dark with transparency */
    border-top: 2px solid var(--royal-gold);
    padding: 20px 0;
    z-index: 9999; /* Highest priority */
    box-shadow: 0 -10px 30px rgba(0,0,0,0.5);
    backdrop-filter: blur(10px);
    transition: bottom 0.5s ease;
}

.cookie-banner.show {
    bottom: 0; /* Slide up */
}

.cookie-layout {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
}

.cookie-text h4 {
    font-family: "Vollkorn", serif;
    color: var(--royal-gold);
    margin-bottom: 5px;
}

.cookie-text p {
    font-family: "Martel", serif;
    font-size: 0.85rem;
    color: #ccc;
    max-width: 600px;
    margin: 0;
}

.cookie-text a {
    color: var(--royal-white);
    text-decoration: underline;
}

.cookie-btns {
    display: flex;
    gap: 15px;
}

/* Small Buttons for Cookie Banner */
.btn-primary-sm {
    background: var(--royal-gold);
    color: var(--royal-dark);
    padding: 8px 20px;
    border-radius: 4px;
    font-weight: 700;
    font-family: "Comfortaa", sans-serif;
    border: none;
    cursor: pointer;
    transition: 0.3s;
}

.btn-primary-sm:hover {
    background: #fff;
}

.btn-outline-sm {
    background: transparent;
    color: #ccc;
    border: 1px solid #555;
    padding: 8px 20px;
    border-radius: 4px;
    font-family: "Comfortaa", sans-serif;
    cursor: pointer;
    transition: 0.3s;
}

.btn-outline-sm:hover {
    border-color: var(--royal-white);
    color: var(--royal-white);
}

/* Mobile Cookie Responsiveness */
@media screen and (max-width: 768px) {
    .cookie-layout {
        flex-direction: column;
        text-align: center;
    }
    .cookie-btns {
        width: 100%;
        justify-content: center;
    }
}
