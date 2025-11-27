/* join-script.js */

// --- Firebase Configuration ---
// TODO: Replace with your actual Firebase project config
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase (Try/Catch to handle missing config gracefully)
let db;
try {
    firebase.initializeApp(firebaseConfig);
    db = firebase.firestore();
    console.log("Firebase initialized");
} catch (error) {
    console.warn("Firebase initialization failed. Check config.", error);
}

// --- Form Logic ---
let currentStep = 1;
const totalSteps = 7;

// DOM Elements
const progressBar = document.getElementById('progressBar');
const stepIndicator = document.getElementById('stepIndicator');
const slides = document.querySelectorAll('.question-slide');
const successScreen = document.getElementById('successScreen');
const form = document.getElementById('joinForm');

// Initialize
updateProgress();

// Handle Enter Key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        // Prevent default form submission
        e.preventDefault();

        // If on textarea (last step), allow new lines unless Ctrl+Enter
        if (currentStep === totalSteps) {
            if (e.ctrlKey) submitForm();
            return;
        }

        // For other inputs, go to next step
        nextStep();
    }
});

function updateProgress() {
    const progress = ((currentStep - 1) / totalSteps) * 100;
    progressBar.style.width = `${progress}%`;
    stepIndicator.innerText = `${currentStep} / ${totalSteps}`;
}

function showError(step, msg) {
    const errorDiv = document.querySelector(`.question-slide[data-step="${step}"] .error-msg`);
    if (errorDiv) {
        errorDiv.innerText = msg;
        errorDiv.classList.add('visible');
        setTimeout(() => errorDiv.classList.remove('visible'), 3000);
    }
}

function validateStep(step) {
    const slide = document.querySelector(`.question-slide[data-step="${step}"]`);

    if (step === 1) { // Name
        const val = slide.querySelector('input').value.trim();
        if (val.length < 2) {
            showError(step, "Please enter your full name");
            return false;
        }
    }
    else if (step === 2) { // Email
        const val = slide.querySelector('input').value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(val)) {
            showError(step, "Please enter a valid college email");
            return false;
        }
    }
    else if (step === 3) { // Year
        const selected = slide.querySelector('input[type="radio"]:checked');
        if (!selected) {
            showError(step, "Please select your year");
            return false;
        }
    }
    else if (step === 4) { // Branch
        const val = slide.querySelector('select').value;
        if (!val) {
            showError(step, "Please select your branch");
            return false;
        }
    }
    else if (step === 5) { // Section
        const val = slide.querySelector('input').value.trim();
        if (val.length < 1) {
            showError(step, "Please enter your section");
            return false;
        }
    }
    else if (step === 6) { // Interest
        const selected = slide.querySelector('input[type="radio"]:checked');
        if (!selected) {
            showError(step, "Please select an area of interest");
            return false;
        }
    }
    else if (step === 7) { // Reason
        const val = slide.querySelector('textarea').value.trim();
        if (val.length < 10) {
            showError(step, "Please tell us a bit more (min 10 chars)");
            return false;
        }
    }

    return true;
}

function nextStep() {
    if (!validateStep(currentStep)) return;

    if (currentStep < totalSteps) {
        const currentSlide = document.querySelector(`.question-slide[data-step="${currentStep}"]`);
        const nextSlide = document.querySelector(`.question-slide[data-step="${currentStep + 1}"]`);

        currentSlide.classList.remove('active');
        currentSlide.classList.add('prev');

        nextSlide.classList.add('active');

        currentStep++;
        updateProgress();

        // Auto-focus next input
        setTimeout(() => {
            const input = nextSlide.querySelector('input, select, textarea');
            if (input) input.focus();
        }, 500);
    }
}

function prevStep() {
    if (currentStep > 1) {
        const currentSlide = document.querySelector(`.question-slide[data-step="${currentStep}"]`);
        const prevSlide = document.querySelector(`.question-slide[data-step="${currentStep - 1}"]`);

        currentSlide.classList.remove('active');

        prevSlide.classList.remove('prev');
        prevSlide.classList.add('active');

        currentStep--;
        updateProgress();
    }
}

function selectOption(card, groupName) {
    // Remove selected class from all cards in this group
    const cards = document.querySelectorAll(`input[name="${groupName}"]`);
    cards.forEach(input => {
        input.parentElement.classList.remove('selected');
    });

    // Add selected class to clicked card
    card.classList.add('selected');

    // Select the radio button
    const radio = card.querySelector('input');
    radio.checked = true;

    // Auto advance after short delay
    setTimeout(() => {
        nextStep();
    }, 400);
}

async function submitForm() {
    if (!validateStep(currentStep)) return;

    const btn = document.querySelector('.question-slide[data-step="7"] .btn-next'); // The submit button
    const originalText = btn.innerText;
    btn.innerText = "SENDING...";
    btn.disabled = true;

    // Collect Data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        year: document.querySelector('input[name="year"]:checked').value,
        branch: document.getElementById('branch').value,
        section: document.getElementById('section').value,
        interest: document.querySelector('input[name="interest"]:checked').value,
        reason: document.getElementById('reason').value,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        status: 'pending' // For dashboard
    };

    try {
        if (db) {
            await db.collection("applicants").add(formData);
            console.log("Document written to Firebase");
        } else {
            console.log("Firebase not configured. Mock submission:", formData);
            // Simulate network delay
            await new Promise(r => setTimeout(r, 1500));
        }

        // Show Success
        form.style.display = 'none';
        successScreen.style.display = 'block';
        progressBar.style.width = '100%';
        stepIndicator.style.display = 'none';

    } catch (e) {
        console.error("Error adding document: ", e);
        btn.innerText = "ERROR - TRY AGAIN";
        btn.disabled = false;
        alert("Something went wrong. Please check your connection.");
    }
}
