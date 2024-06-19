document.addEventListener('DOMContentLoaded', () => {
    const loginRegisterBtn = document.getElementById('login-register-btn');
    const modal = document.getElementById('login-register-modal');
    const closeModalBtn = document.querySelector('.close-btn');
    const showRegisterFormLink = document.getElementById('show-register-form');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    // Show modal
    loginRegisterBtn.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    // Hide modal
    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Switch to register form
    showRegisterFormLink.addEventListener('click', (e) => {
        e.preventDefault();
        loginForm.classList.add('hidden');
        registerForm.classList.remove('hidden');
    });

    // Close modal on click outside of modal content
    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            modal.style.display = 'none';
        }
    });

    // Slider functionality
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Automatically switch slides every 5 seconds
    setInterval(nextSlide, 5000);

    // Initialize the first slide
    showSlide(currentSlide);
});
