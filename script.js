// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Subject Dropdown - Show/Hide Custom Subject Field
const subjectSelect = document.getElementById('subject');
const customSubjectGroup = document.getElementById('customSubjectGroup');
const customSubjectInput = document.getElementById('customSubject');

subjectSelect.addEventListener('change', function() {
    if (this.value === 'other') {
        customSubjectGroup.style.display = 'block';
        customSubjectInput.required = true;
    } else {
        customSubjectGroup.style.display = 'none';
        customSubjectInput.required = false;
        customSubjectInput.value = '';
    }
});

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');
const btnText = document.querySelector('.btn-text');
const btnLoading = document.querySelector('.btn-loading');

contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();

    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        customSubject: document.getElementById('customSubject').value,
        message: document.getElementById('message').value
    };

    // Validate form
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
        showMessage('Please fill in all required fields.', 'error');
        return;
    }

    // If "Other" is selected, ensure custom subject is provided
    if (formData.subject === 'other' && !formData.customSubject) {
        showMessage('Please enter a custom subject.', 'error');
        return;
    }

    // Show loading state
    btnText.style.display = 'none';
    btnLoading.style.display = 'inline-block';
    contactForm.querySelector('button[type="submit"]').disabled = true;

    try {
        // Prepare email content
        const finalSubject = formData.subject === 'other' ? formData.customSubject : getSubjectText(formData.subject);
        
        // Create mailto link
        const emailBody = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(formData.message)}`;
        const mailtoLink = `mailto:contact@aabanrehman.me?subject=${encodeURIComponent(finalSubject)}&body=${emailBody}`;
        
        // Attempt to use FormSubmit service (free form backend)
        // Note: Replace 'contact@aabanrehman.me' with your actual email address
        // or configure a different email service endpoint
        let response;
        try {
            response = await fetch('https://formsubmit.co/ajax/contact@aabanrehman.me', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    subject: finalSubject,
                    message: formData.message,
                    _subject: `Portfolio Contact: ${finalSubject}`,
                    _template: 'table'
                })
            });
        } catch (fetchError) {
            // If fetch fails, we'll use the fallback
            response = null;
        }

        if (response && response.ok) {
            showMessage('Thank you! Your message has been sent successfully. I\'ll get back to you soon.', 'success');
            contactForm.reset();
            customSubjectGroup.style.display = 'none';
        } else {
            // Fallback to mailto
            window.location.href = mailtoLink;
            showMessage('Your email client has been opened. Please send the pre-filled email.', 'success');
            contactForm.reset();
            customSubjectGroup.style.display = 'none';
        }
    } catch (error) {
        // If there's any error, fallback to mailto
        const finalSubject = formData.subject === 'other' ? formData.customSubject : getSubjectText(formData.subject);
        const emailBody = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(formData.message)}`;
        const mailtoLink = `mailto:contact@aabanrehman.me?subject=${encodeURIComponent(finalSubject)}&body=${emailBody}`;
        
        window.location.href = mailtoLink;
        showMessage('Your email client has been opened. Please send the pre-filled email.', 'success');
        contactForm.reset();
        customSubjectGroup.style.display = 'none';
    } finally {
        // Reset button state
        btnText.style.display = 'inline-block';
        btnLoading.style.display = 'none';
        contactForm.querySelector('button[type="submit"]').disabled = false;
    }
});

// Helper function to get subject text
function getSubjectText(value) {
    const subjects = {
        'job': 'Job Opportunity',
        'freelance': 'Freelance Project',
        'collaboration': 'Collaboration Proposal',
        'consultation': 'Consultation Request',
        'other': 'General Inquiry'
    };
    return subjects[value] || value;
}

// Helper function to show form messages
function showMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    formMessage.style.display = 'block';

    // Hide message after 5 seconds
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 5000);
}

// Update copyright year
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Add scroll effect to navbar
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.backgroundColor = '#ffffff';
    }

    lastScroll = currentScroll;
});

// Add animation on scroll for sections
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections for animation
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Certificate links - Update these URLs with your actual certificate links
// To add your certificates, replace the URLs below with your actual certificate URLs
const certificateLinks = document.querySelectorAll('.cert-link');
certificateLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        const certNumber = this.getAttribute('data-cert');
        
        // TODO: Replace these placeholder URLs with your actual certificate URLs
        const certificateUrls = {
            '1': '', // Add your certificate 1 URL here
            '2': '', // Add your certificate 2 URL here
            '3': ''  // Add your certificate 3 URL here
        };
        
        const certUrl = certificateUrls[certNumber];
        
        if (certUrl && certUrl.startsWith('http')) {
            // Valid URL exists, open it
            window.open(certUrl, '_blank');
        } else {
            // No URL configured yet
            e.preventDefault();
            alert('Certificate link will be added soon. Please check back later!');
        }
    });
});
