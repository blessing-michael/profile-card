document.addEventListener('DOMContentLoaded', () => {
    // ======================
    // ⏰ TIME UPDATE SECTION
    // ======================
    const timeElement = document.getElementById('user-time');
    if (timeElement) {
        function updateTime() {
            timeElement.textContent = Date.now();
        }
        updateTime();
        setInterval(updateTime, 1000);
    }


    // Hamburger + nav-links
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links'); // your element id

    // Safety: if either element not present, exit quietly
    if (hamburger && navLinks) {
        // keep ARIA state consistent
        hamburger.setAttribute('aria-expanded', 'false');

        hamburger.addEventListener('click', () => {
            const isActive = navLinks.classList.toggle('active');
            hamburger.classList.toggle('open', isActive);
            hamburger.setAttribute('aria-expanded', String(isActive));
        });

        // Optional: close menu if user clicks outside the menu (mobile)
        document.addEventListener('click', (e) => {
            const target = e.target;
            if (navLinks.classList.contains('active') && !navLinks.contains(target) && target !== hamburger) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('open');
                hamburger.setAttribute('aria-expanded', 'false');
            }
        });

        // Optional: close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('open');
                hamburger.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // ======================
    // 📩 CONTACT FORM SECTION
    // ======================
    const form = document.getElementById('contact-form');
    if (!form) return; // Stop if we’re not on the contact page

    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const subjectField = document.getElementById('subject');
    const messageField = document.getElementById('message');
    const successMsg = document.getElementById('success-message');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let isValid = true;

        // Clear previous errors
        document.querySelectorAll('.error').forEach(el => el.textContent = '');

        // Name validation
        if (!nameField.value.trim()) {
            document.getElementById('error-name').textContent = 'Full name is required.';
            isValid = false;
        }

        // Email validation
        const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
        if (!emailField.value.trim()) {
            document.getElementById('error-email').textContent = 'Email is required.';
            isValid = false;
        } else if (!emailPattern.test(emailField.value)) {
            document.getElementById('error-email').textContent = 'Enter a valid email address.';
            isValid = false;
        }

        // Subject validation
        if (!subjectField.value.trim()) {
            document.getElementById('error-subject').textContent = 'Subject is required.';
            isValid = false;
        }

        // Message validation
        if (messageField.value.trim().length < 10) {
            document.getElementById('error-message').textContent = 'Message must be at least 10 characters.';
            isValid = false;
        }

        // ✅ Display success or keep errors visible
        if (isValid) {
            successMsg.hidden = false;
            form.reset();
        } else {
            successMsg.hidden = true;
        }
    });

    // Hamburger toggle

});
