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

    // Betting Page Interactivity
    const betButtons = document.querySelectorAll('.bet-button');
    const betModal = document.getElementById('place-bet-modal');
    const betCloseBtn = betModal.querySelector('.close-btn');
    const betDetails = document.getElementById('bet-details');
    const betForm = document.getElementById('bet-form');

    betButtons.forEach(button => {
        button.addEventListener('click', () => {
            const eventId = button.getAttribute('data-event');
            betDetails.textContent = `Placing a bet on event ${eventId}`;
            betModal.style.display = 'flex';
        });
    });

    betCloseBtn.addEventListener('click', () => {
        betModal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target == betModal) {
            betModal.style.display = 'none';
        }
    });

    betForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Process bet form submission
        alert('Bet placed successfully!');
        betModal.style.display = 'none';
    });
});
